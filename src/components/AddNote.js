import { useState } from "react";

const AddNote = ({handleAddNote}) =>{
    const [noteTitle,setNoteTitle] = useState('');
    const [noteText,setNoteText] = useState('');
    const characterLimit = 125;

    const handleTitleChange = (event) =>{
        setNoteTitle(event.target.value);
    }

    const handleTextChange = (event) =>{
        if (characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    }

    const handleSaveClick = () =>{
        if (noteTitle.trim().length > 0 && noteText.trim().length > 0){
            handleAddNote(noteTitle,noteText);
            setNoteText('');
            setNoteTitle('');
        }
    }

    return (
        <div className="note new">
            <input
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={handleTitleChange}
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
                    {characterLimit - noteText.length} Character left
                </small>
                <button className="save" onClick={handleSaveClick}>
                    Save
                </button>
            </div>

        </div>
    )



}

export default AddNote ;
