'use client'

import { Button } from "@/common/button";
import { Remove } from "@/common/icon/remove";
import { Input } from "@/common/input";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectCartItems,
  selectTotalPrice,
} from "@/lib/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";

export const OrderList = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  const taxfee = (totalPrice * items.length) / 100;

  const handleCheckout = () => {
    document.cookie = 'show_checkout=true; path=/'
    router.refresh()
  }

  return (
    <div className="flex ml-5 p-5">
      <div>
        <article className="text-center">
          <h1 className="bg-indigo-velvet font-popins font-semibold text-[1.875rem] leading-[100%] text-white rounded-[1.25rem] py-8">
            Order list
          </h1>
        </article>
        <div>
          {items.length == 0 && (
            <article className="text-center">
              <p className="text-[1.563rem] text-black font-medium leading-[200%] my-12.5">The basket is empty, add food.</p>
            </article>
          )}
          <ul>
            {items.map((item) => (
              <li className="my-12.5" key={item.id}>
                <div className="flex justify-between">
                  <p className="font-semibold text-[1.563rem] leading-[200%] font-popins">
                    {item.name}
                  </p>
                  <button className="cursor-pointer" onClick={() => dispatch(removeFromCart(item.id))}>
                    <Remove />
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="bg-bright-snow rounded-full">
                    <Button
                      className="rounded-full text-cinnabar shadow-md shadow-cinnabar/10"
                      variant="default"
                      title="‒"
                      onClick={() => {
                        dispatch(decrementQuantity(item.id));
                      }}
                    />
                    <span className="px-[1.299rem]">{item.quantity}</span>
                    <Button
                      className="rounded-full shadow-md shadow-emerald/10 text-emerald"
                      variant="default"
                      title="+"
                      onClick={() => {
                        dispatch(incrementQuantity(item.id));
                      }}
                    />
                  </div>
                  <p className="text-dark-orange text-[1.563rem] font-popins font-medium leading-[200%]">$ {(item.quantity * item.price).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr className="border-dashed border-gray-400" />
        <div className="space-y-5 my-6.25">
          <article>
            <h2 className="font-popins font-semibold text-[1.563rem] leading-[100%]">
              Voucher Code
            </h2>
          </article>
          <div className="flex items-center gap-x-2">
            <Input className="text-blue-bell text-[1.25rem] text-center leading-[100%] font-popins uppercase" />
            <Button
              variant="default"
              className="bg-blue-bell py-7 px-5 text-[1.575rem] text-white rounded-[0.938rem]"
              title="+"
            />
          </div>
        </div>
        <hr className="border-dashed border-gray-400" />
        <div className="space-y-3 my-15">
          {items.length > 0 ? (
            <>
              <article className="flex justify-between items-center">
                <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">
                  Subtotal
                </p>
                <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">
                  $ {totalPrice.toFixed(2)}
                </p>
              </article>
              <article className="flex justify-between items-center">
                <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">
                  Tax fee
                </p>
                <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">
                  $ {taxfee.toFixed(2)}
                </p>
              </article>
              <article className="flex justify-between items-center">
                <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">
                  Voucher
                </p>
                <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">
                  $ 0
                </p>
              </article>
              <article className="flex justify-between items-center">
                <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">
                  Total
                </p>
                <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">
                  $ {(totalPrice - taxfee).toFixed(2)}
                </p>
              </article>
            </>
          ) : (
            <>
              <article className="flex justify-between items-center">
                <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">
                  Subtotal
                </p>
                <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">
                  $ 0
                </p>
              </article>
              <article className="flex justify-between items-center">
                <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">
                  Tax fee
                </p>
                <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">
                  $ 0
                </p>
              </article>
              <article className="flex justify-between items-center">
                <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">
                  Voucher
                </p>
                <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">
                  $ 0
                </p>
              </article>
              <article className="flex justify-between items-center">
                <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">
                  Total
                </p>
                <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">
                  $ 0
                </p>
              </article>
            </>
          )
          }
        </div>
        <div>
          <Button
            onClick={handleCheckout}
            variant="default"
            className="w-full bg-emerald rounded-[0.938rem] text-[1.563rem] leading-[200%] font-semibold font-popins text-white py-7"
            title="Checkout"
          />
        </div>
      </div>
    </div>
  );
};
