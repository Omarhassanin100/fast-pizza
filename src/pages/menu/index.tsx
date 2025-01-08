import DefaultLayout from '@/components/layout/DefaulteLayout';
import MenuItem from '@/components/menuComponent/MenuItem';
import { pizzaData } from '@/constants/MenueData';
import { IPizza } from '@/interface/pizzaInteface';
import React from 'react'

const Menu = () => {
  return (
    <DefaultLayout>
    <ul className='flex flex-col items-center gap-4 py-2 h-full divide-cyan-900 divide-y'>
      {pizzaData.map((pizza: IPizza) => (
        <React.Fragment key={pizza.id}>
          <MenuItem pizza={pizza} />
        </React.Fragment>
      ))}
    </ul>
    </DefaultLayout>
  );
}
  export default Menu
