'use client';
import '../styles/App.css';
import CheatSheet from '../components/CheatSheet';
import CheatSheetList from '../components/CheatSheetList';
import { useState } from 'react';
export default function Home() {
	const [updateCount, setUpdateCount] = useState(0);
	//console.log('updateCount:', updateCount);

	const handleUpdate = () => {
		setUpdateCount(prev => prev + 1); // Увеличиваем текущее значение на 1
	};
	return (
		<div className='App'>
			<CheatSheet onAdd={handleUpdate} />
			<CheatSheetList onAdd={handleUpdate}  updateCount={updateCount} />
			
		</div>
	);
}
