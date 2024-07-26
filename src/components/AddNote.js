import { useState } from "react";

const AddNote = () =>{
    const [noteTitle,setNoteTitle] = useState('');
    const [noteText,setNoteText] = useState('');
    const charLimit = 125;

    const hadleTitleChange = (event) =>{
        setNoteTitle(event.target.value);
    }

    const handleTextChange = (event) =>{
        if (charLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    }

    const handleSaveClick = () =>{
        if (noteTitle.trim().length > 0 && noteText.trim().length > 0){
            // handleAddNote(noteTitle,noteText);
            setNoteText('')
            setNoteTitle('');
        }
    }

    return (
        <div className="note new">
            <input
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={hadleTitleChange}
                className="note-title"
            />
            <textarea
                rows='8'
                cols = '10'
                placeholder="Type Details Here !"
                value={noteText}
                onChange={handleTextChange}
            ></textarea>
            <div className="note-footer">
                <small>
                    {charLimit - noteText.length} Space left
                </small>
                <button className="save" onCanPlay={handleSaveClick}>
                    Save
                </button>
            </div>

        </div>
    )













}

export default AddNote ;