// Test ID: IIDSAT

import { order } from "@/constants/Order";
import {formatCurrency,} from "../../utils/helpers";
import DefaultLayout from "@/components/layout/DefaulteLayout";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    cart,
  } = order;

  return (
    <DefaultLayout>
    <div className=" space-y-8 py-6 px-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl">Order #{id} status</h2>

        <div className="flex items-center gap-4 sm:flex-row flex-col">
          {priority && <span className='bg-red-500 py-2 px-3 rounded-full text-white mx-3 '>Priority</span>}
          <span className="bg-green-500 py-2 sm:px-3 rounded-full text-white mx-3 text-center w-full px-1">{status} order</span>
        </div>
      </div>
      <div className="space-y-2 bg-gray-300 py-3 px-3 rounded-md">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
    </DefaultLayout>

  );
}
export default Order;