import Card from '../components/_Cards/Card';
import Input from '../components/Input/Input';
import Button from '../components/Buttons/Button';
import { useState } from 'react';

export default function TodoApp() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(tasks);
    if (newTask !== '') {
      setTasks((prevTask) => [
        ...prevTask,
        {
          id: Math.floor(Math.random() * Date.now()),
          name: newTask,
          isCompleted: false,
        },
      ]);
    } else {
      console.error('Task tidak boleh kosong');
    }
    setNewTask('');
  }

  return (
    <Card>
      <Card.Header>This is Header</Card.Header>
      <Card.Body>
        <form>
          <div className='mb-3 flex gap-2'>
            <Input
              placeholder='New Task...'
              name='new_task'
              value={newTask}
              onChange={(e) => {
                setNewTask(e.target.value);
              }}></Input>
            <Button type='submit' onClick={handleSubmit}>
              Add Task
            </Button>
          </div>
        </form>
        <hr className='mt-6 mb-3' />
        {tasks.length > 0 ? (
          <ol className='space-y-2 max-h-[50vh] overflow-y-auto'>
            {tasks.map((task) => (
              <li key={task.id} className='px-3 py-4 transition-all hover:shadow-md rounded-lg border border-slate-200'>
                {task.name}
              </li>
            ))}
          </ol>
        ) : null}
      </Card.Body>
      <Card.Footer>
        Total Task : <span className='font-bold'>{tasks.length}</span>
      </Card.Footer>
    </Card>
  );
}
