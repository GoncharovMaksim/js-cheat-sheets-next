'use client';
import React from 'react';
import { apiGet } from './api';
import { useState, useEffect } from 'react';

export default function CheatSheetList({ updateCount }) {
	const [sheetsList, setSheetsList] = useState([]);
	console.log('updateCount:', updateCount);
	useEffect(() => {
		async function fetchData() {
			const sheets = await apiGet();
			setSheetsList(sheets);
		}
		fetchData();
	}, [updateCount]);

	return (
		<div className='container mx-auto flex flex-col space-y-3 max-w-screen-sm '>
			{sheetsList.map((el, index) => {
				let sheetTitle = el.sheetTitle;
				let sheetContent = el.sheetContent;
				console.log(el.sheetContent);
				return (
					<div key={index}>
						<div>{sheetTitle}</div>
						<div>{sheetContent}</div>
					</div>
				);
			})}
		</div>
	);
}
