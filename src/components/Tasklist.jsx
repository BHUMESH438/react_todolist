import SingleTask from './SingleTask';

const Tasklist = ({ tasks, deleteTask, chekboxEdit, updatedEditedText }) => {
  return (
    <div className='item'>
      {tasks.map(task => {
        return <SingleTask task={task} key={task.id} chekboxEdit={chekboxEdit} deleteTask={deleteTask} updatedEditedText={updatedEditedText} />;
      })}
    </div>
  );
};
export default Tasklist;
