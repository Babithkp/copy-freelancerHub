"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoAddOutline, IoPencil } from "react-icons/io5";

export default function NavSideProfileBuild() {
  const pathName = usePathname();
  return (
    <aside className="md:w-1/5 lg:w-1/6">
      <div className="pb-3 border-b flex flex-col justify-center items-center gap-2">
        <Image
          src={"https://placehold.co/400x400/png"}
          alt="default"
          width={50}
          height={50}
          loading="lazy"
        />
        <h2 className="font-semibold text-base">User Name</h2>
        <div className="text-center">
          <p className="text-[13px] text-[#2777C6] hover:underline cursor-pointer text-nowrap">
            View Profile
          </p>
        </div>
      </div>
      <div className="mt-3 text-sm text-gray-500 space-y-2">
        <Link
          href={"/pro/profileBuild/editAboutInfo"}
          className={`${
            pathName === "/pro/profileBuild/editAboutInfo"
              ? "text-black font-semibold"
              : ""
          } flex items-center gap-1 hover:bg-gray-200 px-1 py-0.5 rounded-md duration-200`}
        >
          <IoPencil />
          <span>Edit Profile</span>
        </Link>
        <Link
          href={"/pro/profileBuild/addServiceorDedicatedResource"}
          className={`${
            pathName === "/pro/profileBuild/addServiceorDedicatedResource"
              ? "text-black font-semibold"
              : ""
          } flex items-center gap-1 hover:bg-gray-200 px-1 py-0.5 rounded-md duration-200`}
        >
          <IoAddOutline />
          <span>Add a Service</span>
        </Link>
      </div>
    </aside>
  );
}
