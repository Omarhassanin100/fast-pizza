import React from 'react'
import Input from '../shared/InputComponent'
import { useState } from 'react';
import Button from '../shared/Button';
import { useRouter } from 'next/router';

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const router = useRouter();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    };

    return (
      <div className='flex flex-col items-center justify-center gap-3 pt-11'>
          <p className='text-center py-3 px-3 text-2xl capitalize'>
          👋 Welcome! Please start by telling us your name:
          </p>
          <form onSubmit={handleSubmit}>
          <Input type="text" placeholder='your full name' onChange={handleChange} value={username} />
        <div className='flex flex-col items-center justify-center gap-3 pt-8'>
        <Button textInside='Start ordering' customStyle={username === '' ?  {opacity: "0",visibility: "hidden"} : {opacity: "1",visibility: "visible"}} onClick={() => {router.push('/menu')}} />
        </div>
          </form>
      </div>
    )
}
export default CreateUser
