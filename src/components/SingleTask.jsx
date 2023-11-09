import { useState } from 'react';

const SingleTask = ({ task, deleteTask, editTask }) => {
  const [isChecked, setisChecked] = useState(task.isComplete);
  return (
    <div>
      <input type='checkbox' checked={task.isComplete} onChange={() => editTask(task.id)} checked={isChecked} onChange={() => setisChecked(!isChecked)} />
      <p style={{ textDecoration: isChecked && 'line-through' }}>{task.text}</p>
      <button className='btn remove-btn' type='button' onClick={() => deleteTask(task.id)}>
        delete
      </button>
    </div>
  );
};
export default SingleTask;
