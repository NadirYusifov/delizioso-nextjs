"use client";

import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Input } from "@/common/input";
import { Button } from "@/common/button";
import LoginImage from "@/public/authassets/login1.png";
import GoogleImage from "@/public/authassets/googlelogo.svg";
import { Slide, toast, ToastContainer } from "react-toastify";
import LogoDelizosoIcon from "@/public/logoassets/logodeliziosoicon.png";

interface SignUpValues {
  fullname: string;
  email: string;
  password: string;
  toggle: boolean;
}

export default function SignUpSection() {
  const yupschema = object().shape({
    fullname: string().required("Full Name is required"),
    email: string().email().required("Email is required"),
    password: string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .required("Password is required"),
  });

  const handleSubmit = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        formik.submitForm();
      } else {
        toast.error("Please fill in all required fields!");
        formik.setTouched({
          fullname: true,
        });
      }
    });
  };

  const formik = useFormik<SignUpValues>({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      toggle: false,
    },
    validationSchema: yupschema,
    onSubmit: (values, actions) => {
      toast.success("Account created successfully");
      actions.setSubmitting(false);
      actions.resetForm({ values: formik.initialValues });
    },
  });

  return (
    <section className="h-dvh">
      <div className="relative m-9.75">
        <picture className="inline">
          <Image
            src={LogoDelizosoIcon}
            width={33}
            height={33}
            quality={100}
            alt="Logo Delzioso Icon"
          />
        </picture>
      </div>
      <div className="flex items-center absolute top-0 right-0 left-0">
        <div className="container px-4 mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <fieldset className="flex flex-1 flex-col">
              <legend className="font-raleway font-bold text-[3.125rem] leading-[100%] mt-13">
                Sign up
              </legend>
              <p className="text-deep-walnut font-popins font-normal text-[1.25rem] leading-[200%] mb-15">
                Don&apos;t have an account?{" "}
                <Link className="text-sky-500 font-medium" href={"/login"}>
                  Log in
                </Link>
              </p>
              <div className="flex flex-col gap-y-10">
                <div>
                  <Input
                    className="w-full h-17.5 bg-dust-grey/10 px-3 placeholder:text-grey-olive text-[1.25rem] font-popins leading-[200%] font-normal"
                    variant="outline"
                    placeholder="Full name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    name="fullname"
                    value={formik.values.fullname}
                  />
                  {formik.errors.fullname && formik.touched.fullname && (
                    <p className="text-red-500 text-[0.875rem] pl-5 pt-0.5">
                      {formik.errors.fullname}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    className="w-full h-17.5 bg-dust-grey/10 px-3 placeholder:text-grey-olive text-[1.25rem] font-popins leading-[200%] font-normal"
                    variant="outline"
                    placeholder="Email address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500 text-[0.875rem] pl-5 pt-0.5">
                      {formik.errors.fullname}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    className="w-full h-17.5 bg-dust-grey/10 px-3 placeholder:text-grey-olive text-[1.25rem] font-popins leading-[200%] font-normal"
                    variant="outline"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <p className="text-red-500 text-[0.875rem] pl-5 pt-0.5">
                      {formik.errors.fullname}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-10">
                <label className="label text-deep-walnut text-[1.25rem] font-normal font-popins leading-[200%] gap-x-5">
                  <input type="checkbox" className="checkbox" />
                  Remember me
                </label>
                <Link
                  href={"*"}
                  className="text-deep-walnut text-[1.25rem] font-normal font-popins leading-[200%]"
                >
                  Forget Password?
                </Link>
              </div>
              <div className="flex flex-col space-y-5 mt-10">
                <Button
                  onClick={handleSubmit}
                  className="h-17.5 rounded-[0.625rem] font-medium font-popins text-[1.25rem] leading-[100%]"
                  variant="primary"
                >
                  Log in
                </Button>
                <Button
                  className="h-17.5 rounded-[0.625rem] font-medium font-popins text-[1.25rem] leading-[100%]"
                  variant="outline"
                >
                  <Image
                    src={GoogleImage}
                    width={36}
                    height={36}
                    quality={100}
                    alt="Google Logo"
                  />
                  Log in with google
                </Button>
              </div>
            </fieldset>
          </form>
        </div>
        <Image
          src={LoginImage}
          width={1350}
          height={100}
          quality={100}
          alt="Login Image"
        />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        transition={Slide}
        pauseOnHover
        draggable
        stacked
      />
    </section>
  );
}
