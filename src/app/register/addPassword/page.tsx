"use client";

import Button from "@/components/button/Button";
import { addNewUser } from "@/lib/http/controller/userController";
import { useGlobalContext } from "@/store/contextForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState,MouseEvent, FormEvent } from "react";
import { FaBullseye } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import { toast } from "react-toastify";



export default function ChooseAccounType() {
  const [password, setPassword] = useState<string>("");
  const [ErrorPassword,setErrorPassword] = useState(false)
  const [isSubmitting,setIsSubmitting] = useState<boolean>(false)
  const [error,setError] = useState<boolean | string>(false)

  const router = useRouter();
  const formCtx = useGlobalContext()

  const signUpHandler = async (event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    setIsSubmitting(true)
    if(password.trim().length < 5){
      setErrorPassword(true)
      setIsSubmitting(false)
      return
    }
    if(password  && formCtx){
      const name = formCtx.userInfo.name
      const email = formCtx.userInfo.email
      if(!name || !email){
        router.push("/register")
        setIsSubmitting(false)
        return
      }
      const result = await addNewUser(name, email, password)
      if(result){
        toast.success('User created successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
            router.push(`/login`)
        setIsSubmitting(false)
      }else{
        setError("User already registered or something went wrong, try again")
        setIsSubmitting(false)
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
        <div className="flex items-center gap-2">
          <div className="flex-1 border-b" />
          <div className="text-sm">Set password</div>
          <div className="flex-1 border-b" />
        </div>
        <form className="space-y-5" onSubmit={signUpHandler}>
          <input
            type="password"
            className="focus:border-[#4FBFA3] border focus:outline-none w-full px-5 py-2.5"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {ErrorPassword && <p className="text-red-600">Password should be more than 5 characters</p>}
          <div className="space-y-2">
            <label htmlFor="term" className="flex gap-2 items-center">
              <input type="checkbox" className="scale-110" id="term" required/>
              <span className="text-xs">
                I agree to the Privacy Policy, Terms of Service and IP Policy.
              </span>
            </label>
            <label htmlFor="send" className="flex gap-2 items-center">
              <input type="checkbox" className="scale-110" id="send" required/>
              <span className="text-xs">
                Send me useful emails to help me get the most out of Freelancerhub.org
              </span>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <Link href={"/register"} className="text-sm text-[#4FBFA3]">
              Back
            </Link>
            <Button
              disabled={!password || isSubmitting ? true : false}
            >
              {isSubmitting? 
              <div className="animate-spin">
              <VscLoading size={25}/> 
              </div>
              :"Proceed"}
            </Button>
          </div>
          {error && <p className="text-red-600">{error}</p>}
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
