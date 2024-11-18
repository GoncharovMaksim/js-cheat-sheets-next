'use client';
import React, { useState, useEffect } from 'react';
import { apiGet } from './api';

export default function AccordionCheatSheets() {
	const [sheetsList, setSheetsList] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const sheets = await apiGet();
			setSheetsList(sheets);
		}
		fetchData();
	}, []);

	return (
		<div className='container mx-auto px-4 flex flex-col space-y-6 max-w-screen-sm'>
			{sheetsList.map((el, index) => {
				let sheetTitle = el.sheetTitle;
				let sheetContent = el.sheetContent;

				return (
					<div key={index}>
						<div className='collapse collapse-arrow bg-base-200'>
							<input type='checkbox' name='my-accordion-2' />
							<div className='collapse-title text-xl font-medium'>
								{sheetTitle}
							</div>
							<div className='collapse-content'>
								<p dangerouslySetInnerHTML={{ __html: sheetContent }}></p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
