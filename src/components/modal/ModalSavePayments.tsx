"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ModalSavePaymentsType {
  isHidden: boolean;
  onClick: () => void;
  userId: string;
}

export default function ModalSavePayments({
  userId,
  isHidden,
  onClick,
}: ModalSavePaymentsType) {
  const [buttonClicked, SetButtonClick] = useState(false);
  const router = useRouter();

  function clickHandler() {
    SetButtonClick(true);
    router.push(`/pro/dashboard/${userId}`);
  }
  return (
    !isHidden && (
      <div className="absolute top-0 left-0 right-0 min-h-screen min-w-full bg-black bg-opacity-35 flex justify-center items-center z-10 px-2">
        <div className="bg-white p-2 rounded-md md:w-1/2 lg:w-1/3">
          <div className="flex justify-center">
            <Image
              src={"/images/free-credit-card-icon-2056-thumb.png"}
              alt="defaul-image-payments"
              loading="lazy"
              width={100}
              height={0}
            />
          </div>
          <h1 className="text-xl font-semibold text-center">
            Congrats! You{"'"}re all Set
          </h1>
          <p className="text-wrap text-sm text-center py-2">
            We will email you once your profile has been activated
          </p>
          <div className="py-4 flex justify-center">
            <button
              type="button"
              onClick={clickHandler}
              className={`px-5 py-2 md:py-2.5 rounded-3xl font-semibold border border-[#4FBFA3] ${
                buttonClicked
                  ? "text-[#4FBFA3] cursor-not-allowed"
                  : "bg-[#4FBFA3] text-white cursor-pointer"
              }`}
            >
              {buttonClicked ? "Loading...":"Go to dashboard"}
            </button>
          </div>
        </div>
      </div>
    )
  );
}
