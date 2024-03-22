"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Verify() {
  const [inputValues, setInputValues] = useState<any>(
    Array.from({ length: 6 }, () => "")
  );
  const inputValue = inputValues.join("");
  const router = useRouter();
  const handleInputChange = (index: any, event: any) => {
    const inputValue = event.target.value;
    const newInputValues = [...inputValues];
    newInputValues[index] = inputValue;

    if (inputValue !== "") {
      if (index < inputValues.length - 1) {
        const nextInput = document.getElementById(`input-${index + 1}`);
        nextInput?.focus();
      }
    }

    setInputValues(newInputValues);
  };

  const handleKeyDown = (index: any, event: any) => {
    if (event.key === "Backspace" && index > 0 && inputValues[index] === "") {
      const newInputValues = [...inputValues];
      newInputValues[index - 1] = "";
      setInputValues(newInputValues);

      const prevInput = document.getElementById(`input-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <section className="container mx-auto flex md:shadow-xl my-5">
      <div className="bg-[#4F86C4] flex-1 text-center text-white pt-8 lg:px-20 px-5 hidden md:block">
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
      <div className="flex-1 pt-8 px-3 md:px-5 lg:px-20 space-y-5 pb-28 justify-center items-center ">
        <h1 className="text-[32px] leading-[46px] text-center text-blue-500">
          Sign Up
        </h1>
        <div className="flex items-center gap-2">
          <div className="flex-1 border-b" />
          <div className="text-sm">Verify email</div>
          <div className="flex-1 border-b" />
        </div>
        <div className="text-center py-3 text-gray-700">
          Please enter the 6-digit code sent to your email
        </div>
        <div className="flex flex-row items-center justify-between mx-auto w-full">
          {inputValues.map((value: any, index: number) => (
            <div key={index} className="w-14 h-14">
              <input
                id={`input-${index}`}
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                type="text"
                name=""
                maxLength={1}
                value={value}
                onChange={(e) => handleInputChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <div className="flex justify-between items-center px-5">
            <button className="text-sm text-blue-500">Resend Code</button>
            <button className="text-sm text-blue-500">Change Email</button>
          </div>
          <div className="flex justify-between items-center pt-10">
            <Link
              href={"/register/chooseAccounType"}
              className="text-sm text-blue-500"
            >
              Back
            </Link>
            <button
              onClick={() => router.push("/register/pro")}
              disabled={inputValue?.length == 6 ? false : true}
              className={`${
                inputValue?.length == 6
                  ? "bg-[#196EAF] text-white cursor-pointer"
                  : "text-[#196EAF] cursor-not-allowed"
              } px-5 py-3 rounded  font-semibold disabled border border-[#196EAF]`}
            >
              Verify
            </button>
          </div>
        </div>
        <div className="text-[14px] leading-[21px] text-center">
          <span>
            Already have an account?
            <Link href={"/login"} className="text-blue-500">
              Log In
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
