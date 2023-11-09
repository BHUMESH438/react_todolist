import { useState } from 'react';
import { toast } from 'react-toastify';

const SingleTask = ({ task, deleteTask, chekboxEdit, updatedEditedText }) => {
  // const [isChecked, setisChecked] = useState(false); //local state
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const handleEditclick = () => {
    setEditing(true);
  };

  const handleSaveclick = () => {
    setEditing(false);
    updatedEditedText(task.id, editedText);
  };
  return (
    <div className='single-item'>
      {/* fn1,2,3 */}
      {isEditing ? <input type='checkbox' checked={false} onClick={() => toast.error('please save changes and strike out')} /> : <input type='checkbox' checked={task.isComplete} onChange={() => chekboxEdit(task.id)} />}

      {isEditing ? <input type='text' value={editedText} style={{ textTransform: 'capitalize', border: 'none', outline: 'none', background: 'transparent', color: 'inherit' }} autoFocus={false} onChange={e => setEditedText(e.target.value)} /> : <p style={{ textTransform: 'capitalize', textDecoration: task.isComplete && 'line-through' }}>{task.text}</p>}

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

/* chekbox-boolean works only at edit*/
/* chekbox-boolean disabled in save because we pass the chekboxEdit id only from edit functionallity */
/*as if we disabled the checkbox with disabled={task.isComplete} unknown value below mentioned error will occur*/

// // error:Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
//     at input
//     at div
//     at SingleTask (http://localhost:5173/src/components/SingleTask.jsx?t=1699560429701:20:23)
//     at div
//     at Tasklist (http://localhost:5173/src/components/Tasklist.jsx?t=1699560357972:18:21)
//     at section
//     at App (http://localhost:5173/App.jsx?t=1699560344727:35:29)

//callback => react is onway bind so use callback fn
