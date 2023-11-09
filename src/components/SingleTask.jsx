import { useState } from 'react';

const SingleTask = ({ task, deleteTask }) => {
  console.log(task);
  const [isChecked, setisChecked] = useState(task.isComplete); //local state
  return (
    <div className='single-item'>
      <input type='checkbox' checked={isChecked} onChange={() => setisChecked(!isChecked)} />

      <p style={{ textTransform: 'capitalize', textDecoration: isChecked && 'line-through' }}>{task.text}</p>

      <button className='btn delete-btn' type='button' onClick={() => deleteTask(task.id)}>
        delete
      </button>
    </div>
  );
};
export default SingleTask;
