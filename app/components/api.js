// src/api.js
const url = '/api/sheets/';


export async function apiGet() {
	const response = await fetch(url);
	const sheets = await response.json();
	return sheets;
}

export async function apiPost(sheetTitle, sheetContent) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify({ sheetTitle, sheetContent }),
	});
	return response;
}
