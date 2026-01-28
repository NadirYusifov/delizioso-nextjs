"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";
// import { IoEye, IoEyeOff } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import LoginImage from "@/public/authassets/login1.png";
import GoogleImage from "@/public/authassets/googlelogo.svg";
import { object, string } from "yup";
// import { toast, ToastContainer } from "react-toastify";

export default function LoginSection() {
  const [showpsw, setShowPsw] = useState(false);

  const yupschema = object().shape({
    email: string().email().required("Email is required"),
    password: string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .required("Password is required"),
  });

  const notify = () => {
    if (formik.isValid) {
      toast.success("Account created successfully");
    } else {
      toast.error("Account creation failed");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      toggle: false,
    },
    validationSchema: yupschema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="h-screen">
      <div className="relative w-full h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
        <div className="container">
          <div>
            <h3 className="text-[50px] font-bold leading-[100%]">Login</h3>
            <p className="text-[20px] text-irish-coffee pt-3 pb-10 leading-[200%] font-normal">
              Don't have an account?{" "}
              <Link href="/signup">
                <span className="text-sky-500">Sign up</span>
              </Link>
            </p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col z-10 space-y-4">
              <div>
                <input
                  className={`w-full bg-infusion/15 p-4 outline-none rounded-lg placeholder:text-grullo ${formik.errors.email && formik.touched.email ? "outline-red-500" : "outline-none"}`}
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
                  className="text-[23px] absolute right-4 top-4 text-irish-coffee"
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
                    value="remember me"
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
                  onClick={notify}
                  disabled={!formik.values.toggle}
                  type="submit"
                  className={`text-[16px] bg-dark-orange text-white !p-4 rounded-lg leading-[100%] font-medium normal-case ${formik.values.toggle ? "cursor-pointer opacity-100" : "cursor-not-allowed opacity-30"}`}
                >
                  Log in
                </Button>
                <Button
                  type="submit"
                  className="border-solid text-[16px] border-2 border-irish-coffee text-medium-roast rounded-lg p-4 mt-4 leading-[100%] normal-case"
                >
                  <Image
                    className="mr-2"
                    src={GoogleImage}
                    width={25}
                    height={25}
                    alt="google-logo"
                  />
                  Log in with google
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full h-screen absolute right-0 overflow-hidden hidden lg:block -z-10">
          <Image
            className="w-full"
            src={LoginImage}
            width={1000}
            height={900}
            quality={100}
            alt="login-image"
          />
        </div>
      </div>
      <ToastContainer position="top-center" pauseOnHover draggable stacked />
    </section>
  );
}
