import { useState } from 'react';
import Form from './src/components/Form';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import Tasklist from './src/components/Tasklist';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = taskName => {
    //object will be created
    const newTask = {
      id: nanoid(),
      text: taskName,
      isComplete: false
    };
    //object will be added to state display
    const updatedTask = [...tasks, newTask];
    setTasks(updatedTask);
    toast.success('item added to the list');
  };

  const editTask = () => {};
  const deleteTask = () => {};
  return (
    <section>
      {/* <ToastContainer position='top-center' /> */}
      <Form addTask={addTask} />
      <Tasklist tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </section>
  );
};
export default App;
