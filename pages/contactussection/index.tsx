'use client'

import { Button } from "@mui/material"
import { FormikValues, useFormik } from "formik"
import { toast } from "react-toastify"

export default function ContactUsSection() {
const formik = useFormik<FormikValues>({
  initialValues: {
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  },
  onSubmit: (value) => {
    console.log(value);
    
  }
})

  return (
    <section>
      <div className="container">
        <div className="contact-us-header text-center">
          <h3 className="text-medium-roast text-[30px] lg:text-[80px] font-bold leading-[100%] pb-4 lg:pb-9">Contact us</h3>
          <p className="text-irish-coffee text-[18px] lg:text-[25px] font-normal leading-[100%]">We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
        </div>
        <div className="contact-us-form my-10">
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input name="firstname" placeholder="First name"/>
            <input name="lastname" placeholder="Last name"/>
            <input name="email" placeholder="Email address"/>
            <input name="subject" placeholder="Subject"/>
            </div>
            <textarea name="message" rows={15} placeholder="Message"/>
            <Button type="submit" className="w-full bg-dark-orange text-white rounded-lg py-3">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
