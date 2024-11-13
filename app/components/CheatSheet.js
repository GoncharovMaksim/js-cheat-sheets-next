//CheatSheet.js
'use client';
import { useState } from 'react';
import '../styles/CheatSheet.css';
import { apiPost } from './api';

function CheatSheet({ onAdd }) {
	const [titleValue, setTitleValue] = useState('');
	const [contentValue, setContentValue] = useState('');
	const [title, setTitle] = useState('здесь будет заголовок');
	const [content, setContent] = useState('здесь будет контент');

	const handleTitleChange = event => {
		setTitleValue(event.target.value);
	};
	const handleContentChange = event => {
		setContentValue(event.target.value);
	};
	const addContent = () => {
		const escapedContent = contentValue
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/\n/g, '<br />');
		setTitle(titleValue);
		setContent(escapedContent);
		apiPost(titleValue, escapedContent, onAdd);
		
	};

	return (
		<div
		className='
		container mx-auto
		flex flex-col
		space-y-3
		max-w-screen-sm
		'
		>
			<div>JS CHEAT SHEETS</div>
			<input
				className='border border-gray-400 rounded p-2'
				type='text'
				onChange={handleTitleChange}
			/>
			<textarea
				className='border border-gray-400 rounded p-2'
				onChange={handleContentChange}
				rows='5'
				cols='30'
			/>
			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				onClick={addContent}
			>
				AD
			</button>
			<div>{title}</div>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
}

export default CheatSheet;
