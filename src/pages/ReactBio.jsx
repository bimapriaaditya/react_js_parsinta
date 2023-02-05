import { useState, useRef } from 'react';
import Button from '../components/Buttons/Button';
import Card from '../components/_Cards/Card';

export default function ReactBio() {
  let [name, setName] = useState('name');
  const first_name = useRef('');
  const last_name = useRef('');

  const ChangeName = () => {
    const firstName_value = first_name.current.value;
    const lastName_value = last_name.current.value;
    const fullname = firstName_value + ' ' + lastName_value;

    name = fullname;
    setName(fullname);
  };

  return (
    <Card className={'w-full'}>
      <Card.Header>Card Name</Card.Header>
      <Card.Body>
        <h3 className={'text-4xl block mb-3'}>Hello {name}</h3>
        <div className='flex gap-3 w-full'>
          <div className='flex flex-grow'>
            <input
              type='text'
              name='change_name'
              id='id_change_name'
              placeholder='first name'
              className='px-4 py-2 border border-slate-300 mb-4 outline-none focus:border-sky-300 focus:shadow-sm w-full'
              ref={first_name}
            />
            <input
              type='text'
              name='change_name'
              id='id_change_name'
              placeholder='last name'
              className='px-4 py-2 border border-slate-300 mb-4 outline-none focus:border-sky-300 focus:shadow-sm w-full'
              ref={last_name}
            />
          </div>
          <div>
            <Button onClick={ChangeName} value-target='' className={'bg-blue-600 text-white whitespace-nowrap'}>
              Change Name
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
