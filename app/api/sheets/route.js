// app/api/sheets/route.js
import { NextResponse } from 'next/server';
import connectDB from '../../../backend/config/db';
import Sheet from '../../../backend/models/sheet'; // Импорт модели MongoDB

// Подключение к базе данных MongoDB
connectDB();

// GET запрос
export async function GET() {
	try {
		const sheets = await Sheet.find(); // Получаем данные из MongoDB
		return NextResponse.json(sheets); // Возвращаем данные
	} catch (error) {
		return NextResponse.json(
			{ error: 'Не удалось получить данные' },
			{ status: 500 }
		);
	}
}

// POST запрос
export async function POST(request) {
	try {
		const { sheetTitle, sheetContent } = await request.json();

		const newSheet = new Sheet({
			sheetTitle,
			sheetContent,
		});

		await newSheet.save(); // Сохраняем данные в MongoDB

		return NextResponse.json({ message: 'Лист успешно сохранен' });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
