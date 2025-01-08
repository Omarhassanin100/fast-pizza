import { IPizza } from '@/interface/pizzaInteface';
import { formatCurrency } from '@/utils/helpers';
import Image from 'next/image'
import React from 'react'
import Button from '../shared/Button';

const MenuItem = ({ pizza }: { pizza: IPizza }) => {
  const { name, price, ingredients, soldOut, photoName } = pizza;

  return (
    <div className={`w-full h-fit px-3  ${soldOut ? 'opacity-70 grayscale' : ''}`}>
      <li key={name} className='flex items-start gap-2  py-3 '>
        <div className='h-full w-1/5 lg:w-1/12'>
          <Image src={photoName} alt={name || ''} width={100} height={100} className=''/>
        </div>
        <div className='flex flex-col gap-2 w-full '>
          <p className='text-gray-500 font-bold text-xl'>{name}</p>
          <p className='text-gray-500 font-normal text-lg italic'>{Array.isArray(ingredients) ? ingredients.join(', ') : ingredients}</p>
            {!soldOut ? 
          <div className='flex items-end justify-between mt-auto'>
            <p className='font-bold'>{formatCurrency(price)}</p>
            <Button textInside='Add to cart' />
             </div>
             : <p className='font-bold'>Sold out</p>
             }
        </div>
      </li>
    </div>
  )
}

export default MenuItem
