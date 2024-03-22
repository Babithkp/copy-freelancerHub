import CardTransferMethod from "@/components/card/CardTransferMethod";
import Image from "next/image";
import Link from "next/link";

export default function TransferMethod() {
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
        <div>**** **** **** **** 6757</div>
        <div className="space-y-3">
          <div className="text-sm">
            <div>master card debit ** 7579</div>
            <Link
              href={"/pro/payments/transfer-methods/verify-card"}
              className="text-blue-500 underline"
            >
              verify card
            </Link>
          </div>
          <div className="text-sm">
            <div>Expiration Date</div>
            <div>20/23</div>
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
