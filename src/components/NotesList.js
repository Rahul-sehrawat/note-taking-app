import React, { useState } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import EditNote from './EditNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	handleEditNote
}) => {
	const [editingNoteId, setEditingNoteId] = useState(null);

	const startEditing = (id) => {
		setEditingNoteId(id);
	};

	const saveEdit = (id, newTitle, newText) => {
		handleEditNote(id, newTitle, newText);
		setEditingNoteId(null);
	};

	const cancelEdit = () => {
		setEditingNoteId(null);
	};

	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<div className = "single-note" key={note.id}>
					{editingNoteId === note.id ? (
						<EditNote
							note={note}
							handleSave={saveEdit}
							handleCancel={cancelEdit}
						/>
					) : (
						<Note
							id={note.id}
							title={note.title}
							text={note.text}
							date={note.date}
							time={note.time}
							handleDeleteNote={handleDeleteNote}
							handleEdit={startEditing}
						/>
					)}
				</div>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;
