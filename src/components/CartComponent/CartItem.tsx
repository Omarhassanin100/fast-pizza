import React from 'react'
import type { CartItem } from '@/interface/cartInterface'
import Button from '../shared/Button'

const CartItem = ({item}: {item: CartItem}) => {
  return (
              <div className="w-full  py-2  border-b-2 border-gray-300">
                <p>{item.name}</p> 
                <p>Quantity: {item.quantity}</p>
                <div className='w-full flex items-center justify-between py-2'>
                <p>Price: ${item.totalPrice}</p>
                <Button textInside='Delete'/>
                </div>
              </div>
  )
}

export default CartItem
