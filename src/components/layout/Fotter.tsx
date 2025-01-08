import Link from 'next/link'
import React from 'react'

const Fotter = () => {
  return (
    <div className='flex items-center justify  bg-stone-600 py-3 px-6 '>
      <div className='flex items-center justify-start   sm:flex-row   gap-2 w-[50%] h-full'>
        <h1 className='text-white sm:text-xl sm:font-medium sm:uppercase'>23 pizzas $23.45</h1>
        <h1 className='text-white sm:text-xl sm:font-medium sm:uppercase'></h1>
      </div>
      <Link href='/Cart' className='outline-none w-[50%] text-center sm:text-right h-full flex items-center justify-end'>
        <h1 className='text-white sm:text-xl sm:font-bold sm:uppercase'>Open cart &rarr;</h1>
        </Link>
      </div>
  )
}

export default Fotter
