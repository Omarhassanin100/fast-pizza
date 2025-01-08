import DefaultLayout from "@/components/layout/DefaulteLayout";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/InputComponent";
import { fakeCart } from "@/constants/CartData";
import { useRouter } from "next/router";
import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str :string) =>
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str
//   );


function CreateOrder() {
  const router = useRouter();
  const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <DefaultLayout>

    <div className="px-4 py-6 w-full text-sm sm:text-lg">
      <h2 className="font-bold text-2xl py-3 text-center">Ready to order? Lets go!</h2>

      <form className="w-full flex flex-col gap-5 items-center justify-center">
        <div className="w-full flex flex-col gap-2 items-center justify-center">
        <div className="w-1/2">
          <label className="font-bold  w-full text-left">First Name:</label>
          </div>
          <div className="w-1/2">
          <Input type="text" name="customer" required />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <div className="w-1/2">
          <label className="font-bold  w-full text-left">Phone number:</label>
          </div>
          <div className="w-1/2">
            <Input type="tel" name="phone" required />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 items-center justify-center">
        <div className="w-1/2">
          <label className="font-bold  w-full text-left">Address:</label>
          </div>
          <div className="w-1/2">
            <Input type="text" name="address" required />
          </div>
        </div>

        <div className="w-full flex  gap-2 items-center justify-center">
          <Input
            type="checkbox"
            name="priority"
            id="priority"
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="h-full font-bold text-lg">Want to yo give your order priority?</label>
        </div>

        <div className="w-1/2">
          <Button textInside="Order now" customStyle={{width:'100%'}} to="/order"/>
        </div>
      </form>
    </div>
    </DefaultLayout>

  );
}
export default CreateOrder;