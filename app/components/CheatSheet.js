//CheatSheet.js
'use client';
import { useState } from 'react';
import '../styles/CheatSheet.css';
import { apiPost } from './api';

function CheatSheet({onAdd}) {
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
		apiPost(titleValue, escapedContent);
		onAdd();
	};

	return (
		<div>
			<input type='text' onChange={handleTitleChange} />
			<textarea onChange={handleContentChange} rows='5' cols='30' />
			<button onClick={addContent}>AD</button>
			<div>{title}</div>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
}

export default CheatSheet;
