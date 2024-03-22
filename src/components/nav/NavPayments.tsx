"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavPayments() {
  const pathName = usePathname();
  return (
    <>
      <div className="container mx-auto lg:px-12 flex px-3">
        <h1 className="text-xl font-semibold py-4">Payments</h1>
      </div>
      <div className="border-b py-2 text-sm">
        <div className="container mx-auto lg:px-12 space-x-1">
          <Link
            href={"/pro/payments"}
            className={`px-3 py-2  ${
              pathName == "/pro/payments"
                ? "border-b-2 border-blue-400 font-semibold"
                : ""
            }`}
          >
            Invoices
          </Link>
          <Link
            href={"/pro/payments/transfer-methods"}
            className={`px-3 py-2  ${
              pathName == "/pro/payments/transfer-methods"
                ? "border-b-2 border-blue-400 font-semibold"
                : ""
            }`}
          >
            Transfer Method
          </Link>
          <Link
            href={"/pro/payments/cashaccount"}
            className={`px-3 py-2  ${
              pathName == "/pro/payments/cashaccount"
                ? "border-b-2 border-blue-400 font-semibold"
                : ""
            }`}
          >
            Cash Account
          </Link>
        </div>
      </div>
    </>
  );
}
