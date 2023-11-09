import { useState } from 'react';
import Form from './src/components/Form';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import Tasklist from './src/components/Tasklist';

//if want to session storage use session storage instead of localstorage
const getLocalStorage = () => {
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
  const [tasks, setTasks] = useState(getLocalStorage() || []);

  const addTask = taskName => {
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

  //during the edting
  const chekboxEdit = taskId => {
    console.log(taskId);
    const checkbox = tasks.map(i => {
      if (i.id === taskId) {
        const checked = { ...i, isComplete: !i.isComplete };
        return checked;
      }
      return i;
    });
    setTasks(checkbox);
    setLocalstorage(checkbox);
  };

  const updatedEditedText = (taskId, editedText) => {
    const updatedTasks = tasks.map(i => {
      if (i.id === taskId) {
        const updatetext = {
          ...i,
          isComplete: false,
          text: editedText
        };

        return updatetext;
      }
      return i;
    });
    setTasks(updatedTasks);
    setLocalstorage(updatedTasks);
    toast.success('task updated successfully');
  };

  const deleteTask = taskId => {
    const deletetask = tasks.filter(task => task.id !== taskId);
    setTasks(deletetask);
    setLocalstorage(deletetask);
    toast.error('item deleted');
  };
  return (
    <section className='section-center'>
      <ToastContainer position='bottom-center' />
      <Form addTask={addTask} />
      <Tasklist tasks={tasks} deleteTask={deleteTask} chekboxEdit={chekboxEdit} updatedEditedText={updatedEditedText} />
    </section>
  );
};
export default App;

// we dont wnat to mutate the existing value so we create a new obj and overrite it with {...}destructure and update in map so the refernce adress will differ
//so while editing maksure to copy the array and change the values and not directly change the array values by refernve
