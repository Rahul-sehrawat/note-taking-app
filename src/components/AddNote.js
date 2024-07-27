import { useState, useRef } from "react";

const AddNote = ({handleAddNote}) =>{
    const [noteTitle,setNoteTitle] = useState('');
    const [noteText,setNoteText] = useState('');
    const characterLimit = 125;
    const textareaRef = useRef(null)

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

    const hadleKeyDown = (event) =>{
        if (event.key === 'Enter'){
            event.preventDefault();
            textareaRef.current.focus()
        }
    };

    return (
        <div className="note new">
            <input
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={handleTitleChange}
                onKeyDown={hadleKeyDown}
                className="note-title"
            />
            <textarea
                ref={textareaRef}
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
