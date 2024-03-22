import React from "react";

export default function Cashaccount() {
  return (
    <>
      <section className="container mx-auto lg:px-12 px-3 flex justify-between border-b items-center">
        <div className="flex flex-col sm:flex-row">
          <div className="text-[13px] flex items-center">
            <p className="font-semibold">Type:</p>
            <select className="select focus:outline-none border-none">
              <option className="text-[12px]">All Activity</option>
              <option className="text-[12px]">Payments</option>
              <option className="text-[12px]">Deposits</option>
              <option className="text-[12px]">Withdraws</option>
              <option className="text-[12px]">Cancelled</option>
              <option className="text-[12px]">On hold</option>
            </select>
          </div>
          <div className="text-[13px] flex items-center gap-3 pb-3 sm:pb-0">
            <p className="font-semibold">Date Range:</p>
            <div className="border rounded px-2">
              <span> feb 2</span>
              <span> to </span>
              <span>feb 3</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="text-[13px] flex items-center gap-1">
            <p className="font-semibold"> Balance:</p>
            <span>$0.00</span>
          </div>
          <button className="w-fit px-3 py-2 rounded-md border text-sm text-gray-500">
            Withdraw
          </button>
        </div>
      </section>
      <section className="container mx-auto lg:px-12 px-3 py-20">
        <div>
          <h2 className="text-center font-semibold text-lg">
            No transaction history to display.
          </h2>
        </div>
      </section>
    </>
  );
}
