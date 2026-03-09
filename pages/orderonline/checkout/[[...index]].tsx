import { Button } from "@/common/button"
import { Arrow } from "@/common/icon/arrow"
import { Input } from "@/common/input"
// import { Textarea } from "@/common/textarea"

export const Checkout = () => {
  return (
    <section>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <span className="">
            <Arrow />
          </span>
          <article className="text-center grow">
            <h1 className="text-dark-coffee font-tinos font-bold leading-[100%] text-[5rem]">Checkout</h1>
          </article>
        </div>
        <div>
          <form className="">
            <fieldset>
              <legend>Order time</legend>
              <input className="radio radio-success" name="ordertime" id="ordernow" value="Order now" type="radio" defaultChecked/>
              <label>Order now</label>
              <input className="radio radio-success" name="ordertime" id="orderlater" value="Order later" type="radio"/>
              <label htmlFor="orderlater">Order later</label>

              <legend>Order method</legend>
              <input className="radio radio-success" name="ordertime" id="ordernow" value="Delivery" type="radio" defaultChecked/>
              <label>Delivery</label>
              <input className="radio radio-success" name="ordertime" id="orderlater" value="Take a way" type="radio"/>
              <label htmlFor="orderlater">Take a way</label>

              <legend>Payment method</legend>
              <input className="radio radio-success" name="ordertime" id="ordernow" value="Cash On Delivery" type="radio" defaultChecked/>
              <label>Cash On Delivery</label>
              <input className="radio radio-success" name="ordertime" id="orderlater" value="BCA Virtual Account" type="radio"/>
              <label htmlFor="orderlater">BCA Virtual Account</label>
              <input className="radio radio-success" name="ordertime" id="orderlater" value="Credit Card" type="radio"/>
              <label htmlFor="orderlater">Credit Card</label>

              <legend>Shipping address</legend>
              <Input type="text" placeholder="Plase type your enter address"/>
              <Button className="bg-blue-bell text-white" variant="default" title="Search"/>
              <Button className="text-cinnabar" title="Use your current location"/>

              {/* Map */}

              <Button type="submit" title="Order now"/>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  )
}
