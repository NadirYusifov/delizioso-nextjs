"use client";

import { Input } from "@/common/input";
import { Button } from "@/common/button";
import { Textarea } from "@/common/textarea";
import { FormikValues, useFormik } from "formik";
// import { toast } from "react-toastify";

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
    },
  });

  return (
    <section className="flex justify-center items-center pt-32.5">
      <div className="container">
        <div className="contact-us-header text-center">
          <h3 className="text-dark-coffee text-[30px] lg:text-[80px] font-tinos font-bold leading-[100%] pb-4 lg:pb-9">
            Contact us
          </h3>
          <p className="text-deep-walnut text-[18px] lg:text-[25px] font-normal font-popins leading-[100%]">
            We love hearing from our customers. Feel free to share your
            experience or ask any questions you may have.
          </p>
        </div>
        <div className="contact-us-form my-10">
          <form className="space-y-4 flex flex-col justify-center" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
              <Input className="w-full text-[18px]" type="text" name="firstname" placeholder="First name" />
              <Input className="w-full text-[18px]" type="text" name="lastname" placeholder="Last name" />
              <Input className="w-full text-[18px]" type="text" name="email" placeholder="Email address" />
              <Input className="w-full text-[18px]" type="text" name="subject" placeholder="Subject" />
            </div>
            <Textarea className="w-full text-[18px]" name="message" rows={15} placeholder="Message" />
            <div className="flex justify-center items-center pt-25">
            <Button
              title="Submit"
              className="w-60 h-14 bg-dark-orange text-[18px] text-white rounded-[20px] py-3 font-popins font-normal"
            />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
