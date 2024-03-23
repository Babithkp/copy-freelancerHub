"use client";
import CardTransferMethod from "@/components/card/CardTransferMethod";
import { getUserCardInfo } from "@/lib/http/controller/userController";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TransferMethod() {
  const [cvc, setCvc] = useState("");
  const [cardNumber, setcardNumber] = useState<string>("");
  const [expireMonth, setExpireMonth] = useState<number>();
  const [expireYr, setExpireYr] = useState<number>();
  const getUrl = usePathname();
  const path = getUrl.split("/")[4];

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getUserCardInfo(path);
        if (response) {
          const filter = JSON.parse(response);
          setCvc(filter.cvc);
          setcardNumber(filter.cardNumber);
          const date = new Date(filter.expeiry);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          setExpireMonth(month)
          setExpireYr(year)
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
            src={"/images/pngwing.com (1).png"}
            alt="default"
            width={100}
            height={0}
          />
        </div>
        <div>**** **** **** **** {cvc || "000"}</div>
        <div className="space-y-3">
          <div className="text-sm">
            <div>
              master card debit ** {String(cardNumber).slice(-4) || "0000"}
            </div>
            <Link
              href={`/pro/payments/transfer-methods/verify-card/${path}`}
              className="text-blue-500 underline"
            >
              verify card
            </Link>
          </div>
          <div className="text-sm">
            <div>Expiration Date</div>
            <div>{expireMonth || "00"}/{String(expireYr).slice(-2) || "00"}</div>
          </div>
          <div className="text-sm">
            <div>Billing Address</div>
            <div>verify card</div>
          </div>
        </div>
      </div>
    </section>
  );
}
