"use client";

import { useState } from "react";
import { Button, Slide } from "@mui/material";
import { useFormik } from "formik";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { object, string } from "yup";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import LoginImage from "../../public/login1.png";
import GoogleImage from "../../public/googlelogo.svg";
import Image from "next/image";

export default function SignUpSection() {
  const [showpsw, setShowPsw] = useState(false);

  const yupschema = object().shape({
    fullname: string().required("Full Name is required"),
    email: string().email().required("Email is required"),
    password: string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .required("Password is required"),
  });

  const notfify = () => {
    if (formik.isValid) {
      toast.success("Account created successfully");
    } else {
      toast.error("Account creation failed");
    }
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      toggle: false,
    },
    validationSchema: yupschema,
    onSubmit: (values) => {},
  });

  return (
    <section>
      <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
        <div className="container">
          <div>
            <h3 className="text-[50px] font-bold leading-[100%]">Sign Up</h3>
            <p className="text-[20px] text-irish-coffee pt-3 pb-10 leading-[200%] font-normal">
              Don't have an account?{" "}
              <Link href="/login">
                <span className="text-sky-500">Log in</span>
              </Link>
            </p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col relative space-y-4">
              <div>
                <input
                  className={`w-full bg-infusion/15 p-4 border-none outline-none rounded-lg placeholder:text-grullo ${formik.errors.fullname && formik.touched.fullname ? "outline-red-500" : "outline-none"}`}
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.fullname && formik.touched.fullname ? (
                  <p className="text-red-500 text-[14px] mt-2">
                    {formik.errors.fullname}
                  </p>
                ) : null}
              </div>
              <div>
                <input
                  className={`w-full bg-infusion/15 p-4 border-none outline-none rounded-lg placeholder:text-grullo ${formik.errors.email && formik.touched.email ? "outline-red-500" : "outline-none"}`}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-500 text-[14px] mt-2">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <div className="relative">
                <input
                  className={`w-full bg-infusion/15 p-4 border-none outline-none rounded-lg placeholder:text-grullo ${formik.errors.password && formik.touched.password ? "outline-red-500" : "outline-none"}`}
                  id="password"
                  name="password"
                  type={showpsw ? "text" : "password"}
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <button
                  type="button"
                  className="text-[23px] absolute top-4 right-3 text-irish-coffee"
                  onClick={() => setShowPsw(!showpsw)}
                >
                  {showpsw ? (
                    <span>
                      <IoEye />
                    </span>
                  ) : (
                    <span>
                      <IoEyeOff />
                    </span>
                  )}
                </button>
                {formik.errors.password && formik.touched.password ? (
                  <p className="text-red-500 text-[14px] mt-2">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <div className="text-[16px] flex items-center justify-between text-irish-coffee py-8">
                <label>
                  <input
                    className="accent-dark-orange scale-125"
                    name="toggle"
                    type="checkbox"
                    value="Rememberme"
                    onChange={formik.handleChange}
                  />
                  <span className="ml-2 text-irish-coffee pl-2">
                    Remember me
                  </span>
                </label>
                <Link href="/">Forget Password?</Link>
              </div>
              <div className="flex flex-col">
                <Button
                  onClick={notfify}
                  disabled={!formik.values.toggle}
                  type="submit"
                  className={`text-[16px] bg-dark-orange text-white p-4 rounded-lg leading-[100%] font-medium normal-case ${formik.values.toggle ? "cursor-pointer opacity-100" : "cursor-not-allowed opacity-20"}`}
                >
                  Sign up
                </Button>
                <Button className="border-solid text-[16px] border-2 border-irish-coffee text-medium-roast rounded-lg p-4 mt-4 leading-[100%] normal-case">
                  <Image
                    className="mr-2"
                    src={GoogleImage}
                    width={25}
                    height={25}
                    alt="google-logo"
                  />
                  Sign up with google
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full h-screen absolute right-0 overflow-hidden hidden lg:block -z-10">
          <Image
            className="w-full"
            src={LoginImage}
            width={900}
            height={900}
            quality={100}
            alt="signup-image"
          />
        </div>
      </div>
      <ToastContainer position="top-center" pauseOnHover draggable stacked />
    </section>
  );
}
