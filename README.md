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


### step-4 create the fn for edittext/updatetext, checkbox in app>>tasklist>>singleTasklist

- use map to make copy of array and destructure and update the obj
- dont nake reference change in the array or obj
- pass id for checkbox and id,text.value(updated) for save/update text
- use state for change between edit/save button
- use state for checkbox unable and disable for disabling the checkbox in save mode and enabling the checkbox in edit mode
