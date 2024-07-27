import { useState, useRef } from 'react';

const EditNote = ({ note, handleSave, handleCancel }) => {
	const [noteTitle, setNoteTitle] = useState(note.title);
	const [noteText, setNoteText] = useState(note.text);
	const characterLimit = 125;
	const textareaRef = useRef(null);

	const handleTitleChange = (event) => {
		setNoteTitle(event.target.value);
	};

	const handleTextChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
			handleSave(note.id, noteTitle, noteText);
		}
	};

	const handleKeyDown = (event) =>{
		if (event.key === "Enter"){
			event.preventDefault();
			textareaRef.current.focus();
		}
	};

	return (
		<div className='note new'>
			<input
				type='text'
				placeholder='Title'
				value={noteTitle}
				onChange={handleTitleChange}
				onKeyDown={handleKeyDown}
				className='note-title'
			/>
			<textarea
				ref={textareaRef}
				rows='8'
				cols='10'
				placeholder='Edit your note...'
				value={noteText}
				onChange={handleTextChange}
			></textarea>
			<div className='note-footer'>
				<small>{characterLimit - noteText.length} character left</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
				<button className='cancel' onClick={handleCancel}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default EditNote;
