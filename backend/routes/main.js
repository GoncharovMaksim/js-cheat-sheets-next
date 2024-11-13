const Sheet = require('../models/sheet');

module.exports = function (app) {
	// Маршрут для создания нового контента
	app.post('/sheets', async (req, res) => {
		const { sheetTitle, sheetContent } = req.body; // Для POST-запроса используем req.body
		try {
			const newSheet = new Sheet({ sheetTitle, sheetContent });
			await newSheet.save(); // Сохраняем новый документ в базе данных
			res.status(201).json(newSheet); // Отправляем ответ с данными
		} catch (err) {
			res.status(500).json({ message: 'Ошибка при сохранении данных' });
		}
	});

	// Маршрут для получения данных
	app.get('/sheets', async (req, res) => {
		try {
			// Получаем все записи из коллекции
			const sheets = await Sheet.find(); // Это вернет все записи
			res.status(200).json(sheets); // Отправляем найденные записи в ответ
		} catch (err) {
			res.status(500).json({ message: 'Ошибка при извлечении данных' });
		}
	});
};
