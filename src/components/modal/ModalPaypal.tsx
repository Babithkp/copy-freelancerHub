"use client";

import React from "react";
import { IoCloseOutline } from "react-icons/io5";
interface ModalPaypalType {
  isHidden: boolean;
  onClick: () => void;
}

export default function ModalPaypal({ isHidden, onClick }: ModalPaypalType) {
  return (
    !isHidden && (
      <div className="absolute top-0 left-0 right-0 min-h-screen min-w-full bg-black bg-opacity-35 flex justify-center items-center z-10 px-2">
        <div className="bg-white p-2 rounded-md md:w-1/2 lg:w-1/3">
          <div className="flex justify-between border-b py-2 items-center">
            <h1 className="text-xl font-semibold">Add PayPal Account</h1>
            <button className="text-2xl" onClick={onClick}>
              <IoCloseOutline />
            </button>
          </div>
          <div className="py-2 px-2">
            <h2 className="text-base font-semibold">Account Holder Info</h2>
            <div className="pt-2 space-y-2">
              <label htmlFor="" className="space-y-1">
                <div className="text-xs">Account Holder Name</div>
                <input
                  type="text"
                  placeholder="Account Holder Name"
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5"
                />
              </label>
              <label htmlFor="" className="space-y-1">
                <div className="text-xs">Phone</div>
                <input
                  type="text"
                  placeholder="+62 565 6565 656"
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5"
                />
              </label>
            </div>
            <div className="text-xs pt-2">
              By clicking {'"'}Continue{'"'} you will be directed to Paypal to
              authenticate the account and choose any available options.
            </div>
            <div className="pt-3">
              <button className="px-3 py-1.5 rounded-3xl text-sm font-semibold border border-[#4FBFA3] bg-[#4FBFA3] text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
