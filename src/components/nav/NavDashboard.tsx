"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavDashboard() {
  const pathName = usePathname();

  return (
    <div className="bg-[#F5F5F5]">
      <nav className="container mx-auto lg:px-12 flex text-sm font-[500]">
        <Link
          href={"/pro/dashboard"}
          className={`px-4 py-2 ${
            pathName.startsWith("/pro/dashboard") ||
            pathName.startsWith("/pro/profileBuild")
              ? "bg-white rounded-t-md"
              : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          href={"/pro/jobs"}
          className={`px-4 py-2 ${
            pathName.startsWith("/pro/jobs") ? "bg-white rounded-t-md" : ""
          }`}
        >
          Jobs
        </Link>
        <Link
          href={"/pro/payments/transfer-methods"}
          className={`px-4 py-2 ${
            pathName.startsWith("/pro/payments") ? "bg-white rounded-t-md" : ""
          }`}
        >
          Payments
        </Link>
      </nav>
    </div>
  );
}
