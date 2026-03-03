import { Button } from "@/common/button"
import { Input } from "@/common/input"

export const OrderList = () => {
    return (
        <div className="flex ml-5 p-5">
            <div>
                <article className="text-center">
                    <h1 className="bg-indigo-velvet font-popins font-semibold text-[1.875rem] leading-[100%] text-white rounded-[1.25rem] py-8">Order list</h1>
                </article>
                <div>
                    
                </div>
                <hr className="border-dashed border-gray-400"/>
                <div className="space-y-5 my-6.25">
                    <article>
                        <h2 className="font-popins font-semibold text-[1.563rem] leading-[100%]">Voucher Code</h2>
                    </article>
                    <div className="flex items-center gap-x-2">
                        <Input className="text-blue-bell text-[1.25rem] text-center leading-[100%] font-popins uppercase"/>
                        <Button variant="default" className="bg-blue-bell py-7 px-5 text-[1.575rem] text-white rounded-[0.938rem]" title="+" />
                    </div>
                </div>
                <hr className="border-dashed border-gray-400"/>
                <div className="space-y-3 mx-9.75 my-15">
                    <article className="flex justify-between items-center">
                        <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">Subtotal</p>
                        <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">$ 0</p>
                    </article>
                    <article className="flex justify-between items-center">
                        <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">Tax fee</p>
                        <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">$ 0</p>
                    </article>
                    <article className="flex justify-between items-center">
                        <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">Voucher</p>
                        <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">$ 0</p>
                    </article>
                    <article className="flex justify-between items-center">
                        <p className="font-popins font-semibold text-[1.563rem] leading-[100%]">Total</p>
                        <p className="text-dark-orange font-popins font-medium text-[1.563rem] leading-[200%]">$ 0</p>
                    </article>
                </div>
                <div>
                    <Button variant="default" className="w-full bg-emerald rounded-[0.938rem] text-[1.563rem] leading-[200%] font-semibold font-popins text-white py-7" title="Checkout" />
                </div>
            </div>
        </div>
    )
}
