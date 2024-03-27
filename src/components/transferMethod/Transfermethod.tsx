"use client"
import React from "react";
import CardTransferMethod from "@/components/card/CardTransferMethod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserCardInfo } from "@/lib/api/fetch";
import { toast } from "react-toastify";

interface card {
  cardNumber: string;
  address: string;
  type: string;
}

export default function Transfermethod({ params }: any) {
  const [card, setcard] = useState<card>();
  const [expire, setExpire] = useState<number>();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getUserCardInfo(params.userid);
        if (response) {
          // setCvc(filter.card.cvc);
          setcard(response.card);
          setExpire(response.card.expeiry);
          if (response.verifyDoc.length > 0) {
            setIsVerified(true);
          }
        }else{
          toast.error("Failed to Load,try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);
  return (
    <section className="container mx-auto lg:px-12 px-3 py-10">
      <div className="flex-1">
        <div>
          <img
            src={
              card?.type == "visa"
                ? "/images/png-transparent-visa-logo-mastercard-credit-card-payment-visa-blue-company-text.png"
                : card?.type == "masterCard"
                ? "/svg/MasterCard_Logo.svg.png"
                : "/images/free-credit-card-icon-2056-thumb.png"
            }
            alt="default"
            width={100}
            height={0}
          />
        </div>
        {/* <div>**** {cvc || "000"}</div> */}
        <div className="space-y-3">
          <div className="text-sm">
            <div>**** {String(card?.cardNumber).slice(-4) || "0000"}</div>
            {!isVerified && (
              <Link
                href={`/pro/verify-card/${params.userid}`}
                className="text-blue-500 underline"
              >
                verify card
              </Link>
            )}
          </div>
          <div className="text-sm">
            <div>Expiration Date</div>
            <div>{expire}</div>
          </div>
          <div className="text-sm">
            <div>Billing Address</div>
            <div>{card?.address}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
