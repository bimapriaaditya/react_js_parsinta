import React, { useState } from 'react';
import Card from '../../components/_Cards/Card';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Input/Input';
import Label from '../../components/Labels/Label';
import { IconBrandGithub } from '@tabler/icons';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkState = () => {
    console.log({ email, password });
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
              id='login-email'
              onBlur={(e) => setEmail(e.target.value)}
              placeholder='yourmain@mail.com'></Input>
          </div>
          <div>
            <Label htmlFor='login-pass'>Password</Label>
            <Input
              type='password'
              id='login-pass'
              onBlur={(e) => setPassword(e.target.value)}
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
