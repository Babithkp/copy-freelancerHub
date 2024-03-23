import React from "react";

export default function VerifyCard() {
  return (
    <section className="container mx-auto px-3 lg:w-1/3 md:w-1/2 lg:py-10 py-5">
      <div className="text-sm pt-2">
        We will charge $1.95 to your card. Enter the 4-digit code that appears next to the charged amount and upload your bank statement to verify your credit or debit card.
      </div>
      <div className="border border-dashed mt-3">
        <div className="text-xs text-center border-separate py-1">
          Sample card statement
        </div>
        <div className="flex justify-between px-3 border-y text-xs py-1 border-dashed mx-2 mb-3">
          <span>PP*1234 CODE</span>
          <span>-$x,xx</span>
        </div>
      </div>
      <div className="mt-3">
        <input
          type="number"
          className="border focus:outline-none px-3 py-1.5 w-full rounded-md focus:border-[#4FBFA3]"
          maxLength={4}
        />
        <div className="pt-3 text-sm">
          <label htmlFor="selectDocumentCard">
            <div className="px-3 py-1.5 border rounded-md ">
              select document
            </div>
            <input
              type="file"
              className="hidden"
              name="selectDocumentCard"
              id="selectDocumentCard"
            />
          </label>
        </div>
        <div className="mt-3">
          <button className="bg-[#4FBFA3] text-white cursor-pointer px-4 py-1.5 rounded-3xl w-full">
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
}
