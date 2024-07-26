import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Note = ({ id, title, text, date, time, handleDeleteNote, handleEdit }) => {
	return (
		<div className='note'>
			<div>
				<span><b>{title}</b></span>
				<br />
				<p>{text}</p>
			</div>
			<div className='note-footer'>
				<small>{date}</small>
				<small>{time}</small>
				<FaEdit
					onClick={() => handleEdit(id)}
					className='edit-icon'
					size='1.3em'
				/>
				<RiDeleteBin6Fill
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
