import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (taskName === '') {
      toast.error('do not enter empty value');
      return;
    }
    addTask(taskName);
    setTaskName('');
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>todo</h1>
        <div>
          <input type='text' className='form-input' value={taskName} onChange={e => setTaskName(e.target.value)} />
          <button type='submit' className='btn'>
            add Task
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
