'use client';

import React from 'react';
import { apiGet, apiDelete } from './api';
import { useState, useEffect } from 'react';

export default function CheatSheetList({ updateCount, onAdd }) {
	const [sheetsList, setSheetsList] = useState([]);
	console.log('updateCount:', updateCount);
	useEffect(() => {
		async function fetchData() {
			const sheets = await apiGet();
			setSheetsList(sheets);
		}
		fetchData();
	}, [updateCount]);

	const sheetDelete = sheetId => {
				apiDelete(sheetId, onAdd);
	};

	return (
		<div className='container mx-auto px-4 flex flex-col space-y-3 max-w-screen-sm '>
			{sheetsList.map((el, index) => {
				let sheetTitle = el.sheetTitle;
				let sheetContent = el.sheetContent;
				let sheetId = el._id;
				console.log(el);
				return (
					<div key={index}>
						<div>{sheetId}</div>
						<div>{sheetTitle}</div>
						<div dangerouslySetInnerHTML={{ __html: sheetContent }} />
						<button
							className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
							onClick={() => sheetDelete(sheetId)}
						>
							DELETE
						</button>
					</div>
				);
			})}
		</div>
	);
}
