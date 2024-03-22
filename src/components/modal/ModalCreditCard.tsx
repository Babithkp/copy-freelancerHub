"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ModalSavePayments from "./ModalSavePayments";
interface ModalPaypalType {
  isHidden: boolean;
  onClick: () => void;
}

export default function ModalCreditCard({
  isHidden,
  onClick,
}: ModalPaypalType) {
  const [selectCardType, setSelectCardType] = useState<string | null>(null);
  const [isHiddenSavePayments, setIsHiddenSavePayments] =
    useState<boolean>(true);
  return (
    !isHidden && (
      <div className="absolute top-0 left-0 right-0 min-h-screen min-w-full bg-black bg-opacity-35 flex justify-center items-center z-10 px-2">
        <div className="bg-white p-2 w-full h-full md:rounded-md md:w-1/2 lg:w-1/3 ">
          <div className="flex justify-between border-b py-2 items-center">
            <h1 className="text-xl font-semibold">Add your debit or credit card</h1>
            <button className="text-2xl" onClick={onClick}>
              <IoCloseOutline />
            </button>
          </div>
          <div className="py-2 px-2 max-h-96 overflow-auto">
            <div className="flex justify-center">
              <Image
                src={"/images/pngwing.com.png"}
                alt="paypal"
                width={40}
                height={0}
              />
            </div>
            <h2 className="text-base font-semibold text-center pt-4">
              Link a Card
            </h2>
            <div className="flex justify-center">
              <Image
                src={
                  selectCardType == "visa"
                    ? "/images/png-transparent-visa-logo-mastercard-credit-card-payment-visa-blue-company-text.png"
                    : selectCardType == "masterCard"
                    ? "/svg/MasterCard_Logo.svg.png"
                    : "/images/free-credit-card-icon-2056-thumb.png"
                }
                alt="credit"
                width={80}
                height={0}
              />
            </div>
            <div className="pt-2 space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Debit or credit card number"
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                />
              </div>
              <select
                name=""
                id=""
                className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                onChange={(e: any) => setSelectCardType(e.target.value)}
              >
                <option value="">Select, your card type</option>
                <option value="visa">Visa</option>
                <option value="masterCard">Master Card</option>
              </select>
              <div>
                <input
                  type="month"
                  placeholder="Expiration date"
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                />
              </div>
              <div className="flex justify-between items-center gap-5">
                <input
                  type="text"
                  placeholder="CVC"
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                />
                 <Image
                src={
                  selectCardType == "visa"
                    ? "/images/png-transparent-visa-logo-mastercard-credit-card-payment-visa-blue-company-text.png"
                    : selectCardType == "masterCard"
                    ? "/svg/MasterCard_Logo.svg.png"
                    : "/images/free-credit-card-icon-2056-thumb.png"
                }
                alt="credit"
                width={50}
                height={0}
              />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Billing address"
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                />
              </div>
            </div>
            <div className="pt-3">
              <button
                onClick={() => setIsHiddenSavePayments(!isHiddenSavePayments)}
                className="px-3 py-1.5 rounded-md text-sm font-semibold border border-[#4FBFA3] bg-[#4FBFA3] text-white w-full"
              >
                Link Card
              </button>
            </div>
            <ModalSavePayments
              isHidden={isHiddenSavePayments}
              onClick={() => setIsHiddenSavePayments(!isHiddenSavePayments)}
            />
          </div>
        </div>
      </div>
    )
  );
}
