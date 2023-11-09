import { useState } from 'react';
import Form from './src/components/Form';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import Tasklist from './src/components/Tasklist';

//if want to session storage use session storage instead of localstorage
const getLocalStorage = taskobj => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(list);
  } else {
    list = [];
  }
  return list;
};

const setLocalstorage = taskobj => localStorage.setItem('list', JSON.stringify(taskobj));

const App = () => {
  getLocalStorage();
  const [tasks, setTasks] = useState(getLocalStorage());

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
    setLocalstorage(updatedTask);
    toast.success('item added to the list');
  };

  const deleteTask = taskId => {
    const deletetask = tasks.filter(task => task.id !== taskId);
    setTasks(deletetask);
    setLocalstorage(deletetask);
    console.log('item deleted');
    toast.error('item deleted');
  };
  return (
    <section className='section-center'>
      <ToastContainer position='bottom-center' />
      <Form addTask={addTask} />
      <Tasklist tasks={tasks} deleteTask={deleteTask} />
    </section>
  );
};
export default App;
