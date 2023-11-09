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
  // we dont wnat to mutate the existing value so we create a new obj and overrite it with {...}destructure and update in map so the refernce adress will differ
  //so while editing maksure to copy the array and change the values and not directly change the array values by refernve
  const editTask = taskId => {
    console.log(taskId);
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
      <Tasklist tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </section>
  );
};
export default App;
// tasks.map(task => {
//   if (task.id === taskId) {
//     const editItem = { ...task, isComplete: !task.isComplete };
//     setTasks(editItem);
//     setLocalstorage(updatedTask);
//     return editItem;
//   }
//   return taskId;
// });
