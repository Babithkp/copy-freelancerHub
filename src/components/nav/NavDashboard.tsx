"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function NavDashboard() {
  const [userId,setIserId]= useState("")
  const pathName = usePathname();

  useEffect(()=>{
    if (typeof localStorage !== "undefined") {
      const value = localStorage.getItem("userId");
      if (value) {
        const filter = JSON.parse(value);
        setIserId(filter)
      }}
    },[])

  return (
    <div className="bg-[#F5F5F5]">
      <nav className="container mx-auto lg:px-12 flex text-sm font-[500]">
        <Link
          href={`/pro/dashboard/${userId}`}
          className={`px-4 py-2 ${
            pathName.startsWith(`/pro/dashboard/${userId}`) ||
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
          href={`/pro/payments/transfer-methods/${userId}`}
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
