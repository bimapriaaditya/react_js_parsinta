import { useState, useRef } from 'react';
import Button from './components/Buttons/Button';
import Card from './components/Cards/Card';

export default function App() {
  let [name, setName] = useState('lorem');
  const first_name = useRef('');
  const last_name = useRef('');

  const ChangeName = () => {
    const firstName_value = first_name.current.value;
    const lastName_value = last_name.current.value;
    const fullname = firstName_value + ' ' + lastName_value;

    name = fullname;
    setName(fullname);

    console.log(name);
  };

  return (
    <div className={'bg-slate-100 min-h-screen flex justify-center items-center'}>
      <div className={'max-w-xl w-full'}>
        <h3 className={'text-4xl block mb-3'}>Hello {name}</h3>
        <div className='flex gap-3'>
          <div>
            <input
              type='text'
              name='change_name'
              id='id_change_name'
              placeholder='first name'
              className='px-4 py-2 border border-slate-300 mb-4 outline-none focus:border-sky-300 focus:shadow-sm'
              ref={first_name}
            />
            <input
              type='text'
              name='change_name'
              id='id_change_name'
              placeholder='last name'
              className='px-4 py-2 border border-slate-300 mb-4 outline-none focus:border-sky-300 focus:shadow-sm'
              ref={last_name}
            />
          </div>
          <div>
            <Button onClick={ChangeName} value-target=''>
              Change Name
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
