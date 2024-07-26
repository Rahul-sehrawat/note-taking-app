import React, { useState, useEffect } from 'react';
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Header = ({ handleToggleDarkMode }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [name, setName] = useState('');
	const [tempName, setTempName] = useState('');

	useEffect(() => {
		const savedName = localStorage.getItem('user-name');
		if (savedName) {
			setName(savedName);
		}
	}, []);

	const toggleDarkMode = () => {
		setIsDarkMode((previousDarkMode) => !previousDarkMode);
		handleToggleDarkMode((previousDarkMode) => !previousDarkMode);
	};

	const handleNameChange = (event) => {
		setTempName(event.target.value);
	};

	const handleNameSubmit = (event) => {
		event.preventDefault();
		if (tempName.trim() !== '') {
			setName(tempName);
			localStorage.setItem('user-name', tempName);
		} else {
			alert('Please enter your name');
		}
	};

	return (
		<div className='header'>
			{!name ? (
				<form onSubmit={handleNameSubmit} className='name-form'>
					<input
						type="text"
						value={tempName}
						onChange={handleNameChange}
						placeholder="Enter your name"
						className='name-input'
					/>
					<button type="submit" className='save-name-button'>Save</button>
				</form>
			) : (
				<h1>{`${name}'s Notes`}</h1>
			)}
			<div onClick={toggleDarkMode} className='toggle-icon'>
				{isDarkMode ? <FaToggleOn size={30} color='white'/> : <FaToggleOff size={30} />}
			</div>
		</div>
	);
};

export default Header;
