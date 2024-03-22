import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function ProfileBuild() {
  return (
    <section className="border rounded flex-1 flex-col">
      <div className="py-2 border-b bg-[#FAFAFA] rounded-t">
        <div className="flex items-center justify-between px-4">
          <div className="text-xl font-[400]">
            Edit Services or Dedicated Resources
          </div>
          <Link
            href={"/pro/profileBuild/addServiceorDedicatedResource"}
            className="bg-[#2777C6] hover:underline text-white p-1.5 rounded hover:scale-105 duration-200"
          >
            <FaPlus className="" />
          </Link>
        </div>
      </div>
      <div className="py-5 text-sm flex-1">
        <div className="px-4 space-y-2.5">
          <p className="text-gray-700 text-center">
            Add a service or a dedicated resource and increase your chances of
            getting contacted by Employers.
          </p>
        </div>
      </div>
    </section>
  );
}
