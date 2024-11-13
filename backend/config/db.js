// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://papkand:Val12345678@cluster0.sorq7.mongodb.net/jsSheets?retryWrites=true&w=majority&appName=Cluster0'
		);
		//'mongodb://root:P48cD4iKfZ26exd4Lp2H@localhost:27017/js-cheat-sheets?authSource=admin'
		//'mongodb://root:P48cD4iKfZ26exd4Lp2H@195.54.178.243:24625/js-cheat-sheets?authSource=admin'
		console.log('Подключено к MongoDB');
	} catch (error) {
		console.error('Ошибка подключения к MongoDB', error);
		process.exit(1); // Завершение процесса, если подключение не удалось
	}
};

module.exports = connectDB;
