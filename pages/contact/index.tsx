"use client";

import { Input } from "@/common/input";
import { Button } from "@/common/button";
import { Textarea } from "@/common/textarea";
import { useFormik } from "formik";
import { object, string } from "yup";
import { toast, ToastContainer } from "react-toastify";

interface ContactFormValues {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactUsSection() {
  const yupSchema = object().shape({
    firstname: string().required("Firstname is required!"),
    lastname: string().required("Lastname is required!"),
    email: string()
      .email("Email must be a valid email!")
      .required("Email is required!")
      .lowercase(),
    subject: string().required("Subject is required!"),
    message: string()
      .max(500, "The text exceeded the 500-word limit!")
      .required("Message is required!"),
  });

  const handleSubmit = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        formik.submitForm();
      } else {
        toast.error("Please fill in all required fields!");
        formik.setTouched({
          firstname: true,
          lastname: true,
          email: true,
          subject: true,
          message: true,
        });
      }
    });
  };

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values, actions) => {
      toast.success("Message sent success!");
      actions.setSubmitting(false);
      actions.resetForm({ values: formik.initialValues });
    },
  });

  return (
    <section className="flex justify-center items-center pt-32.5">
      <div className="container">
        <div className="contact-us-header text-center">
          <h3 className="text-dark-coffee text-[1.875rem] lg:text-[5rem] font-tinos font-bold leading-[100%] pb-4 lg:pb-9">
            Contact us
          </h3>
          <p className="text-deep-walnut text-[1.125rem] lg:text-[1.563rem] font-normal font-popins leading-[100%]">
            We love hearing from our customers. Feel free to share your
            experience or ask any questions you may have.
          </p>
        </div>
        <div className="contact-us-form my-10">
          <form
            className="space-y-4 flex flex-col justify-center"
            onSubmit={formik.handleSubmit}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <Input
                  className="w-full text-[18px]"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  value={formik.values.firstname}
                />
                {formik.errors.firstname && formik.touched.firstname && (
                  <p className="text-red-500 text-[0.875rem] pl-5 pt-0.5">
                    {formik.errors.firstname}
                  </p>
                )}
              </div>
              <div>
                <Input
                  className="w-full text-[18px]"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  value={formik.values.lastname}
                />
                {formik.errors.lastname && formik.touched.lastname && (
                  <p className="text-red-500 text-{0.875rem} pl-5 pt-0.5">
                    {formik.errors.lastname}
                  </p>
                )}
              </div>
              <div>
                <Input
                  className="w-full text-[18px]"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  name="email"
                  placeholder="Email address"
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-500 text-{0.875rem} pl-5 pt-0.5">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div>
                <Input
                  className="w-full text-[18px]"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formik.values.subject}
                />
                {formik.errors.subject && formik.touched.subject && (
                  <p className="text-red-500 text-{0.875rem} pl-5 pt-0.5">
                    {formik.errors.subject}
                  </p>
                )}
              </div>
            </div>
            <div>
              <Textarea
                className="w-full text-[18px]"
                name="message"
                rows={15}
                placeholder="Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.errors.message && formik.touched.message && (
                <p className="text-red-500 text-{0.875rem} pl-5 pt-0.5">
                  {formik.errors.message}
                </p>
              )}
            </div>
            <div className="flex justify-center items-center pt-25">
              <Button
                type="button"
                onClick={handleSubmit}
                title="Submit"
                className="w-60 h-14 bg-dark-orange text-[18px] text-white rounded-[20px] py-3 font-popins font-normal"
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" pauseOnHover draggable stacked />
    </section>
  );
}
