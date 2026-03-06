import { Input } from "@/common/input";
import { Button } from "@/common/button";
import { Remove } from "@/common/icon/remove";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectCartItems,
  selectTotalPrice,
} from "@/lib/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { Arrow } from "@/common/icon/arrow";
import Image from "next/image";
import Link from "next/link";

interface OrderListMobileProps {
  onClose: () => void;
}

export const OrderListMobile = ({ onClose }: OrderListMobileProps) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  const taxfee = (totalPrice * items.length) / 100;

  return (
    <div className="fixed inset-0">
      <div className="py-22 w-full h-full bg-white overflow-auto">
        <div className="bg-indigo-velvet py-5" onClick={onClose}>
          <div className="container px-4 mx-auto grid grid-cols-3">
            <button className="bg-white fill-dark-coffee w-5 h-5 px-5 py-5 rounded-full cursor-pointer">
              <Arrow />
            </button>
            <article className="text-center flex items-center justify-center">
              <h1 className="text-white">Order List</h1>
            </article>
          </div>
        </div>
        <div
          className="container px-4 mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {items.length == 0 && (
              <article className="text-center">
                <p className="text-[1.563rem] text-black font-medium leading-[200%] my-12.5">
                  The basket is empty, add food.
                </p>
              </article>
            )}
            <ul>
              {items.map((item) => (
                <li className="my-12.5" key={item.id}>
                  <div className="flex items-center">
                    <Image src={item.image} width={150} height={150} alt={item.name} quality={100} />
                    <div className="flex flex-1 flex-col justify-between space-y-10">
                      <div className="flex flex-1 justify-between items-center">
                        <p className="text-black font-popins text-[0.875rem] leading-[200%] font-semibold">{item.name}</p>
                        <button onClick={() => dispatch(removeFromCart(item.id))} className="cursor-pointer"><Remove /></button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className=" t-snow rounded-full">
                          <Button
                            className="w-8 h-8 rounded-full text-cinnabar shadow-md shadow-cinnabar/10"
                            variant="default"
                            title="‒"
                            onClick={() => {
                              dispatch(decrementQuantity(item.id));
                            }}
                          />
                          <span className="px-[1.199rem] text-[0.774rem] font-popins leading-[100%] font-normal  text-black">{item.quantity}</span>
                          <Button
                            className="w-8 h-8 rounded-full shadow-md shadow-emerald/10 text-emerald"
                            variant="default"
                            title="+"
                            onClick={() => {
                              dispatch(incrementQuantity(item.id));
                            }}
                          />
                        </div>
                        <p className="text-dark-orange text-[0.875rem] font-medium leading-[100%]">${item.price}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="border-dashed border-gray-400" />
            <div className="space-y-5 my-6.25">
              <article>
                <h2 className="font-popins text-start text-black font-semibold text-[0.875rem] leading-[100%]">
                  Voucher Code
                </h2>
              </article>
              <div className="flex items-center gap-x-2">
                <Input className="w-full text-blue-bell text-[0.875rem] text-center leading-[100%] font-normal font-popins uppercase" />
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
                    <p className="font-popins text-black font-semibold text-[0.875rem] leading-[100%]">
                      Subtotal
                    </p>
                    <p className="text-dark-orange font-popins font-medium text-[0.875rem] leading-[200%]">
                      $ {totalPrice.toFixed(2)}
                    </p>
                  </article>
                  <article className="flex justify-between items-center">
                    <p className="font-popins text-black font-semibold text-[0.875rem] leading-[100%]">
                      Tax fee
                    </p>
                    <p className="text-dark-orange font-popins font-medium text-[0.875rem] leading-[200%]">
                      $ {taxfee.toFixed(2)}
                    </p>
                  </article>
                  <article className="flex text-black justify-between items-center">
                    <p className="font-popins font-semibold text-[0.875rem] leading-[100%]">
                      Voucher
                    </p>
                    <p className="text-dark-orange font-popins font-medium text-[0.875rem] leading-[200%]">
                      $ 0
                    </p>
                  </article>
                  <article className="flex justify-between items-center py-[1.813rem]">
                    <p className="font-popins text-black font-semibold text-[1.25rem] leading-[100%]">
                      Total
                    </p>
                    <p className="text-dark-orange font-popins font-semibold text-[1.25rem] leading-[200%]">
                      $ {(totalPrice - taxfee).toFixed(2)}
                    </p>
                  </article>
                </>
              ) : (
                <>
                  <article className="flex justify-between items-center">
                    <p className="font-popins text-black font-semibold text-[0.875rem] leading-[100%]">
                      Subtotal
                    </p>
                    <p className="text-dark-orange font-popins font-medium text-[0.875rem] leading-[200%]">
                      $ 0
                    </p>
                  </article>
                  <article className="flex justify-between items-center">
                    <p className="font-popins text-black font-semibold text-[0.875rem] leading-[100%]">
                      Tax fee
                    </p>
                    <p className="text-dark-orange font-popins font-medium text-[0.875rem] leading-[200%]">
                      $ 0
                    </p>
                  </article>
                  <article className="flex justify-between items-center">
                    <p className="font-popins text-black font-semibold text-[0.875rem] leading-[100%]">
                      Voucher
                    </p>
                    <p className="text-dark-orange font-popins font-medium text-[0.875rem] leading-[200%]">
                      $ 0
                    </p>
                  </article>
                  <article className="flex justify-between items-center py-[1.813rem]">
                    <p className="font-popins text-black font-semibold text-[1.25rem] leading-[100%]">
                      Total
                    </p>
                    <p className="text-dark-orange font-popins font-medium text-[1.25rem] leading-[200%]">
                      $ 0
                    </p>
                  </article>
                </>
              )
              }
            </div>
            <div>
              <Link href="/order">
              <Button
                variant="default"
                className="w-3/5  bg-emerald rounded-[0.938rem] text-[1rem] leading-[200%] font-semibold font-popins text-white py-7"
                title="Checkout"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
