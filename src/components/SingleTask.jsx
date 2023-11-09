import { useState } from 'react';

const SingleTask = ({ task, deleteTask, editTask }) => {
  const [isChecked, setisChecked] = useState(task.isComplete); //local state
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  console.log(editedText);
  const handleEditclick = () => {
    setEditing(true);
  };

  const handleSaveclick = () => {
    setEditing(false);
  };

  return (
    <div className='single-item'>
      <input type='checkbox' checked={task.isComplete} onChange={() => setisChecked(!isChecked)} />

      {isEditing ? <input type='text' value={editedText} style={{ textTransform: 'capitalize', border: 'none', outline: 'none', background: 'transparent', color: 'inherit' }} autoFocus={false} onChange={e => setEditedText(e.target.value)} /> : <p style={{ textTransform: 'capitalize', textDecoration: isChecked && 'line-through' }}>{task.text}</p>}

      {isEditing ? (
        <button className='btn delete-btn' type='button' onClick={handleSaveclick}>
          save
        </button>
      ) : (
        <button className='btn delete-btn' type='button' onClick={handleEditclick}>
          edit
        </button>
      )}

      <button className='btn delete-btn' type='button' onClick={() => deleteTask(task.id)}>
        delete
      </button>
    </div>
  );
};
export default SingleTask;
