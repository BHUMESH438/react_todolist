# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## step-1 - structure the todoList project

- create App component
- inside the App component create a from componenet
- ### from component
  - create input, create state,set form input value = state
- ### get the data from form cmoponent by passing the addfn through props

```js
const addTask = taskName => {
  //object will be created
  const newTask = {
    name: taskName,
    completed: false,
    id: nanoid()
  };
  //object will be added to state display
  const updatedTask = [...task, newTask];
  setTask(updatedTask);
  toast.success('item added to the list');
};
const Form = ({ addTask }) => {
  addTask(taskName);
    setTaskName('');
```

- ### pass the task, deletetask to tasklist component to render. every single task.and for every single task create a componet in mapfn to render

- ### pass the remove,edit,task from tasklist to singleTask component and render the values. use checkbox and line-through for strike and set a state for check and use textTransform: 'capitalize' to capitalize the first letter

## step-2 save to localstorage/session

- to save to the local storage the key should be same name
- stringify the obj and parse the obj from string
- addtask,deletetask - save the redult to local storage
- check in localstorage and dev component

### step-3 style by css

- use grid for add input and button align it in a row
- use grid for the single compent and align base
- use css tricks for letters and spcing

<!-- import { useState } from 'react';
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
  // const editTask = taskId => {
  //   console.log(taskId);
  // };

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
      {/* <Tasklist tasks={tasks} deleteTask={deleteTask} /> */}
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
 -->
