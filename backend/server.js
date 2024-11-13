const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Подключаем конфигурацию

const app = express();
const port = 3001;

// Middleware для работы с JSON
app.use(express.json());
app.use(cors());

// Подключение к базе данных MongoDB
connectDB();
require('./routes')(app);

// Запуск сервера
app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});
