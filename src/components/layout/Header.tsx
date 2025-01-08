import React from 'react'
import Input from '../shared/InputComponent'
import UserName from '../user/UserName'
const Header = () => {
  return (
    <div className='flex items-center justify-between  z-[100] w-full sticky top-0 bg-red-600 py-3 px-3'>
        <div>
            <h1 className='text-white text-xl font-normal tracking-widest'>Fast React Pizza Co.</h1>
        </div>
        <div className='flex items-center justify-center gap-3'>
      <Input type='text' placeholder='search order' />
      <UserName />
        </div>
    </div>      
  )
}

export default Header
