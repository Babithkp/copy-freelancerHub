"use client";

import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import { useGlobalContext } from "@/store/contextForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState,MouseEvent, FormEvent, useEffect } from "react";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState(false)
  const router = useRouter();
  const formCtx = useGlobalContext()


  function isValidEmail(email:string) {
    // Basic email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const checkValidation = (event:any)=>{
    event.preventDefault();
    if(name && email){
      if(name.trim().length < 5){
        setNameError(true)
        return
      }
      if(email.trim().length < 5 || !isValidEmail(email)){
        setEmailError(true)
        return
      }
      if(formCtx){
        formCtx.storeUserInfo(name, email)
          router.push("/register/addPassword")
      }
    }
  }

  return (
    <section className="container mx-auto flex md:shadow-xl my-5">
      <div className="bg-[#4FBFA3] flex-1 text-center text-white pt-8 lg:px-20 px-5 hidden md:block">
        <h1 className="text-[32px] leading-[46px]">Grow with Guru</h1>
        <div className="w-64 carousel rounded-box">
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">
                99% Customer Satisfaction
              </h2>
              <h3 className="font-semibold text-base">
                Based on paid invoices
              </h3>
            </div>
          </div>
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">Flexible Platform</h2>
              <h3 className="font-semibold text-base">
                Choose from four Payment terms
              </h3>
            </div>
          </div>
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">Payment Protection</h2>
              <h3 className="font-semibold text-base">
                Secure your transactions with SafePay
              </h3>
            </div>
          </div>
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">Lowest Transaction Fees</h2>
              <h3 className="font-semibold text-base">
                Get maximum value at minimum cost
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 pt-8 px-10 md:px-5 lg:px-20 space-y-5 pb-28 justify-center items-center ">
        <h1 className="text-[32px] leading-[46px] text-center text-[#4FBFA3]">
          Sign Up
        </h1>
        <div className="border-b" />
        <form className="space-y-5" onSubmit={checkValidation}>
          <Input placeholder="Full Name" type="text" onChange={(e) => setName(e.target.value)}/>
          {nameError && <p className="text-red-600">Full Name should be more than 5 characters</p>}
          <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
          {emailError && <p className="text-red-600">Please Enter a Valid Email address</p>}
          <div className="flex justify-end">
            <Button
              disabled={!email || !name ? true : false}
            >
              Proceed
            </Button>
          </div>
        </form>
        <div className="text-[14px] leading-[21px] text-center">
          <span>
            Already have an account?
            <Link href={"/login"} className="text-[#4FBFA3]">
              Log In
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
