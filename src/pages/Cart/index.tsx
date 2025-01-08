

import CartItem from "@/components/CartComponent/CartItem";
import DefaultLayout from "@/components/layout/DefaulteLayout";
import Loader from "@/components/Loader/Loader";
import Button from "@/components/shared/Button";
import { fakeCart } from "@/constants/CartData";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'

const Cart = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true); // Start loading
    const handleComplete = () => setIsLoading(false); // Finish loading

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Cleanup event listeners on unmount
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
  const cart = fakeCart;

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : (
        <DefaultLayout>
          <div className='py-10 px-3 h-full'>
            <Link href="/menu" className="text-md text-blue-500 hover:text-blue-700 font-bold hover:underline ">← Back to menu</Link>
    
            <h2 className="font-bold text-xl py-3">Your cart, OMAR</h2>
  
            <div className="cart-items">
              {cart.map((item) => (
                <React.Fragment key={item.id}>
                  <CartItem item={item} />
                </React.Fragment>
              ))}
            </div>
    
            <div className="flex gap-3 items-center py-3">
              <Button to="createorder" textInside="Order pizzas"/>
              <Button textInside="Clear cart" customStyle={{background: "rgb(87 83 78 / var(--tw-bg-opacity, 1)) "}}/>
            </div>
          </div>
        </DefaultLayout>
      )}
    </>
  );
}
export default Cart
