import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Pagination from './components/Pagination';

function App() {
	const initialNotes = [];
	const [currentPage, setCurrentPage] = useState(1);
	const [notes, setNotes] = useState(() => {
		const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
		return savedNotes || initialNotes;
	});
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
	}, [notes]);

	const addNote = (title, text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			title: title,
			text: text,
			date: date.toLocaleDateString(),
			time: date.toLocaleTimeString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const editNote = (id, newTitle, newText) => {
		const date = new Date();
		const updatedNotes = notes.map((note) =>
			note.id === id ? { ...note, title: newTitle, text: newText, date: date.toLocaleDateString(), time: date.toLocaleTimeString() } : note
		);
		setNotes(updatedNotes);
	};

	const notesPerPage = 10;
	const filteredNotes = notes.filter((note) =>
		note.text.toLowerCase().includes(searchText.toLowerCase()) || 
		note.title.toLowerCase().includes(searchText.toLowerCase())
	);

	const indexOfLastNote = currentPage * notesPerPage;
	const indexOfFirstNote = indexOfLastNote - notesPerPage;
	const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

	return (
		<div>
			<div className='container'>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={currentNotes}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
					handleEditNote={editNote}
				/>
				<Pagination
					totalNotes={filteredNotes.length}
					notesPerPage={notesPerPage}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</div>
	);

}

export default App;
