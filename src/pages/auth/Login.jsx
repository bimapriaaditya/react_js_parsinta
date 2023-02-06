import React, { useState } from 'react';
import Card from '../../components/_Cards/Card';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Input/Input';
import Label from '../../components/Labels/Label';
import { IconBrandGithub } from '@tabler/icons';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const stateChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  

  const checkState = (e) => {
    console.log({ email:form.email, password:form.password });
  };

  return (
    <Card>
      <Card.Header>Login To Applications</Card.Header>
      <Card.Body>
        <div className='mb-4'>
          <div>
            <Label htmlFor='login-email'>Email</Label>
            <Input
              type='email'
              name='email'
              id='login-email'
              onBlur={stateChange}
              placeholder='yourmain@mail.com'></Input>
          </div>
          <div>
            <Label htmlFor='login-pass'>Password</Label>
            <Input
              type='password'
              name='password'
              id='login-pass'
              onBlur={stateChange}
              placeholder='********'></Input>
          </div>
        </div>
        <div className='mx-auto w-full'>
          <Button className='bg-slate-600 text-white w-full text-center' onClick={checkState}>
            Sign In
          </Button>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button type='button' className='bg-black text-white'>
          <IconBrandGithub />
          Sign in with Github
        </Button>
      </Card.Footer>
    </Card>
  );
}
