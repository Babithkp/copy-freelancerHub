"use client";

import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import { useRouter } from "next/navigation";

interface ModalSavePaymentsType {
  isHidden: boolean;
  onClick: () => void;
}

export default function ModalSavePayments({
  isHidden,
  onClick,
}: ModalSavePaymentsType) {
  const router = useRouter();
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
            We{"'"}ve emailed you confirmation link to verify that the email
            address you provide belongs to you
          </p>
          <div className="py-4 flex justify-center">
            <Button onClick={() => router.push("/pro/dashboard")}>
              Go to dashboard
            </Button>
          </div>
        </div>
      </div>
    )
  );
}
