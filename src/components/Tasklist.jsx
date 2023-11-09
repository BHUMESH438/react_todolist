import SingleTask from './SingleTask';

const Tasklist = ({ tasks, editTask, deleteTask }) => {
  return (
    <div>
      {tasks.map(task => {
        return <SingleTask task={task} key={task.id} editTask={editTask} deleteTask={deleteTask} />;
      })}
    </div>
  );
};
export default Tasklist;
