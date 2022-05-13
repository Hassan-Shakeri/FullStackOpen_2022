const Note = ({ note,toggleImportance,deleteItem}) => {
  const label = note.important
  ? 'make it not important' : 'make it important'
    return (
      <li className="note">
        {note.content}
        <button onClick={toggleImportance}>{label}</button>
        <button onClick={deleteItem}>Delete</button>
      </li>
    )
  }
  
  export default Note