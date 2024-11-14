'use client';
import React, { useState, useEffect } from 'react';
import { apiGet } from './api';

export default function MainCheatSheets() {
	const [sheetsList, setSheetsList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const sheets = await apiGet();
			setSheetsList(sheets);
		}
		fetchData();
	}, []);

	return (
		<div className="container mx-auto px-4 flex flex-col space-y-6 max-w-screen-sm">
			{sheetsList.map((el, index) => {
				let sheetTitle = el.sheetTitle;
				let sheetContent = el.sheetContent;

				return (
					<div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
						<h2 className="text-xl font-semibold text-gray-900 mb-2">{sheetTitle}</h2>
						<div className="text-gray-700 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: sheetContent }} />
					</div>
				);
			})}
		</div>
	);
}
