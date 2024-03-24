"use client";
import CardTransferMethod from "@/components/card/CardTransferMethod";
import { getUserCardInfo } from "@/lib/http/controller/userController";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface card{
  cardNumber:string;
  address:string
  type:string;
}

export default function TransferMethod() {
  // const [cvc, setCvc] = useState("");
  const [card, setcard] = useState<card>();
  const [expire, setExpire] = useState<number>();
  const [isVerified, setIsVerified] = useState(false)


  const getUrl = usePathname();
  const path = getUrl.split("/")[4];

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getUserCardInfo(path);
        if (response) {
          const filter = JSON.parse(response);
          // setCvc(filter.card.cvc);
          setcard(filter.card);
          setExpire(filter.card.expeiry)
          if(filter.verifyDoc.length > 0){
            setIsVerified(true)
          }
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
          <Image
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
            <div>
              **** {String(card?.cardNumber).slice(-4) || "0000"}
            </div>
            {!isVerified && <Link
              href={`/pro/verify-card/${path}`}
              className="text-blue-500 underline"
            >
              verify card
            </Link>}
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
