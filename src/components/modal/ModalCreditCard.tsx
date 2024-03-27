"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ModalSavePayments from "./ModalSavePayments";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { addcard } from "@/lib/api/fetch";
interface ModalPaypalType {
  isHidden: boolean;
  onClick: () => void;
  userId: string;
}

type Inputs = {
  cardNumber: number;
  type: string;
  expeiry: Date;
  cvc: number;
  address: string;
};

export default function ModalCreditCard({
  isHidden,
  onClick,
  userId,
}: ModalPaypalType) {
  const [selectCardType, setSelectCardType] = useState<string | null>(null);
  const [isHiddenSavePayments, setIsHiddenSavePayments] =
    useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ExprireInput, setExprireInput] = useState('')


  const handleChange = (event:any) => {
    const { value } = event.target;

    // If the input value is empty or consists of only digits and "/"
    if (/^\d*\/?\d*$/.test(value)) {
      // Update the state with the new value
      setExprireInput(value);

      // If the length of the value is 2 after "/", append "/" to it
      if (value.length === 2 && !value.includes('/')) {
        setExprireInput(value + '/');
      }
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try{
      const response = await addcard(userId, data);
      if(response){
        toast.success("Card saved successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsSubmitting(false)
        setIsHiddenSavePayments(!isHiddenSavePayments)
      }else{
        toast.error("Somthing went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsSubmitting(false)
      }
    }catch(err){
      console.log(err);
    }
  };
  return (
    !isHidden && (
      <div className="absolute top-0 left-0 right-0 min-h-screen min-w-full bg-black bg-opacity-35 flex justify-center items-center z-10 px-2">
        <div className="bg-white p-2 w-full h-full md:rounded-md md:w-1/2 lg:w-1/3 ">
          <div className="flex justify-between border-b py-2 items-center">
            <h1 className="text-xl font-semibold">
              Add your debit or credit card
            </h1>
            <button className="text-2xl" onClick={onClick}>
              <IoCloseOutline />
            </button>
          </div>
          <form
            className="py-2 px-2 max-h-96 overflow-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-center">
              <img
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
              <img
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
                  style={
                    {
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                    } as React.CSSProperties
                  }
                  type="text"
                  placeholder="Debit or credit card number"
                  className="appearance-none border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                  {...register("cardNumber", {
                    required: true,
                    minLength: 16,
                    maxLength: 16,
                  })}
                  maxLength={16}
                />
                {errors.cardNumber && (
                  <p className="text-sm text-red-500">
                    Please enter a valid card number
                  </p>
                )}
              </div>
              <select
                id=""
                className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                {...register("type", { required: true })}
                onChange={(e)=>setSelectCardType(e.target.value)}
              >
                <option value="">Select, your card type</option>
                <option value="visa">Visa</option>
                <option value="masterCard">Master Card</option>
              </select>
              {errors.type && (
                <p className="text-sm text-red-500">
                  Please enter a valid Type
                </p>
              )}
              <div>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                  {...register("expeiry", { required: true,minLength:5,maxLength:5 })}
                  onChange={handleChange}
                  value={ExprireInput}
                  maxLength={5}
                />
                {errors.expeiry && (
                  <p className="text-sm text-red-500">
                    Please enter a valid expeiry
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center gap-5">
                <input
                  style={
                    {
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                    } as React.CSSProperties
                  }
                  type="text"
                  placeholder="CVC"
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                  {...register("cvc", {
                    required: true,
                    minLength: 3,
                    maxLength: 3,
                  })}
                  maxLength={3}
                />

                <img
                  src={
                    // selectCardType == "visa"
                    //   ? "/images/png-transparent-visa-logo-mastercard-credit-card-payment-visa-blue-company-text.png"
                    //   : selectCardType == "masterCard"
                    //   ? "/svg/MasterCard_Logo.svg.png"
                    //   : "/images/free-credit-card-icon-2056-thumb.png"
                    // "/images/credit-card-cvv.png"
                    "/images/security_code_back-512.webp"
                  }
                  alt="credit"
                  width={50}
                  height={0}
                />
              </div>
              {errors.cvc && (
                <p className="text-sm text-red-500">Please enter a valid CVC</p>
              )}
              <div>
                <input
                  type="text"
                  placeholder="Billing address"
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                  {...register("address", { required: true, minLength: 10 })}
                />
                {errors.address && (
                  <p className="text-sm text-red-500">
                    Please enter a valid Address
                  </p>
                )}
              </div>
            </div>
            <div className="pt-3">
              <button
              disabled={isSubmitting ? true : false}
              className="px-3 py-1.5 rounded-md text-sm font-semibold border border-[#4FBFA3] bg-[#4FBFA3] text-white w-full">
                {isSubmitting ? "Loading..." : "Link card"}
              </button>
            </div>
            <ModalSavePayments
              isHidden={isHiddenSavePayments}
              onClick={() => setIsHiddenSavePayments(!isHiddenSavePayments)}
              userId={userId}
            />
          </form>
        </div>
      </div>
    )
  );
}
