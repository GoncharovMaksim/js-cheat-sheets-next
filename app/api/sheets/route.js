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
		console.log(error);
		
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

export async function DELETE(request) {
	try {
		// Извлекаем id из URL
		const { searchParams } = new URL(request.url);
		const id = searchParams.get('id'); // предполагается, что id передается в параметре

		if (!id) {
			return new Response(JSON.stringify({ message: 'ID не передан' }), {
				status: 400,
			});
		}

		const result = await SheetModel.deleteOne({ _id: id }); // Удаляем запись по _id

		if (result.deletedCount > 0) {
			return new Response(
				JSON.stringify({ message: 'Элемент удалён успешно' }),
				{ status: 200 }
			);
		} else {
			return new Response(JSON.stringify({ message: 'Элемент не найден' }), {
				status: 404,
			});
		}
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Ошибка сервера', error }), {
			status: 500,
		});
	}
}