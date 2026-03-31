"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Input } from "@/common/input";
import { Button } from "@/common/button";
import { Lock, LockOpen } from "lucide-react";
import LogoDelizosoIcon from "@/public/logoassets/logodeliziosoicon.png"
import { toast, ToastContainer } from "react-toastify";
import LoginImage from "@/public/authassets/login1.png";
import GoogleImage from "@/public/authassets/googlelogo.svg";

export default function LoginSection() {
  const [showpsw, setShowPsw] = useState(false);

  const yupschema = object().shape({
    email: string().email().required("Email is required"),
    password: string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const notify = () => {
    if (formik.isValid) {
      toast.success("Account created successfully!");
    } else {
      toast.error("Account creation failed!");
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
    <section className="h-dvh">
      <div className="relative m-9.75">
        <picture className="inline">
          <Image src={LogoDelizosoIcon} width={33} height={33} quality={100} alt="Logo Delzioso Icon"/>
        </picture>
      </div>
      <div className="flex items-center absolute top-0 right-0 left-0">
        <div className="container px-4 mx-auto">
          <form>
            <fieldset className="flex flex-1 flex-col">
              <legend className="font-raleway font-bold text-[50px] leading-[100%] mt-13">Login</legend>
              <p className="text-deep-walnut font-popins font-normal text-[20px] leading-[200%]">Don&apos;t have an account? <Link className="text-sky-500 font-medium" href={"/signup"}>Sign up</Link></p>
              <div className="flex flex-col gap-y-10">
              <Input className="h-17.5 bg-dust-grey/10 px-3 placeholder:text-grey-olive text-[20px] font-popins leading-[200%] font-normal clas" variant="outline" placeholder="Email address" />
              <Input className="h-17.5 bg-dust-grey/10 px-3 placeholder:text-grey-olive text-[20px] font-popins leading-[200%] font-normal clas" variant="outline" placeholder="Password" />
              </div>
              <div className="flex items-center justify-between">
                <label className="label text-deep-walnut text-[20px] font-normal font-popins leading-[200%]">
                <input type="checkbox" className="checkbox" />
                  Remember me
                </label>
                <Link href={"*"} className="text-deep-walnut text-[20px] font-normal font-popins leading-[200%]">Forget Password?</Link>
              </div>
              <Button className="rounded-[10px] font-medium font-popins text-[20px] leading-[100%]" variant="primary">Log in</Button>
              <Button className="rounded-[10px] font-medium font-popins text-[20px] leading-[100%]" variant="outline"><Image src={GoogleImage} width={36} height={36} quality={100} alt="Google Logo"/>Log in with google</Button>
            </fieldset>
          </form>
        </div>
        <Image src={LoginImage} width={1350} height={100} quality={100} alt="Login Image" />
      </div>
    </section>
  );
}
