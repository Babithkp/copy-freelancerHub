import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserPen } from "react-icons/fa6";
import { MdAddBox, MdCardMembership, MdOutlineVerified } from "react-icons/md";

export default function Dashboard() {
  return (
    <div className="">
      <div className="border-b">
        <h1 className="text-xl font-semibold py-4 container mx-auto lg:px-12 px-3">
          Dashboard
        </h1>
      </div>
      <section className="flex gap-3 container mx-auto lg:px-12 px-3 my-5 flex-wrap justify-center flex-col md:flex-row">
        {/* profile */}
        <div className="bg-[#FAFAFA] border rounded flex-1">
          <div className="py-5 border-b flex flex-col justify-center items-center gap-2">
            <Image
              src={"https://placehold.co/400x400/png"}
              alt="default"
              width={50}
              height={50}
              loading="lazy"
            />
            <h2 className="text-[#2777C6] font-semibold text-base">
              User Name
            </h2>
            <div className="text-sm font-[500]">
              $0 <span className="text-gray-400">earned/yr</span> ·{" "}
              <span className="text-[#2777C6] font-[300]">No Feedback</span>
            </div>
            <p className="text-xs text-[#2777C6] hover:underline cursor-pointer text-nowrap">
              All-Time Transaction Data
            </p>
          </div>
          <div className="py-5 border-b text-xs space-y-3">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <MdOutlineVerified className="scale-150" />
                <span>Not Verified Yet</span>
              </div>
              <Link href={"#"} className="text-[#2777C6] hover:underline">
                Verify
              </Link>
            </div>
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <MdCardMembership className="scale-150" />
                <span>Basic Member</span>
              </div>
              <Link href={"#"} className="text-[#2777C6] hover:underline">
                Upgrade
              </Link>
            </div>
          </div>
          <div className="py-5 border-b text-xs space-y-3">
            <div className="px-4">
              <div className="flex items-center gap-2">
                <FaUserPen className="scale-150" />
                <Link href={"/pro/profileBuild/editAboutInfo"} className="text-[#2777C6] hover:underline">
                  Edit Profile
                </Link>
              </div>
            </div>
            <div className="px-4">
              <div className="flex items-center gap-2">
                <MdAddBox className="scale-150 -ml-0.5" />
                <Link href={"/pro/profileBuild/addServiceorDedicatedResource"} className="ml-0.5 text-[#2777C6] hover:underline">
                  Add a Service
                </Link>
              </div>
            </div>
          </div>
          <div className="py-5 text-xs space-y-3">
            <div className="px-4">
              <div className="">
                <p className="text-gray-400">Cash Account Balance</p>
                <Link
                  href={"#"}
                  className="text-[#2777C6] hover:underline text-base font-[400]"
                >
                  $0.00
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* end profile */}

        {/* find work */}
        <div className="border rounded flex-1">
          <div className="py-2 border-b text-xs bg-[#FAFAFA]">
            <div className="flex items-center justify-between px-4">
              <div className="text-base font-[400]">Find Work</div>
              <Link href={"#"} className="text-[#2777C6] hover:underline">
                10 Bids
              </Link>
            </div>
          </div>
          <div className="py-5 border-b text-xs">
            <div className="px-4 space-y-2.5">
              <div className="text-base font-[400] text-gray-600">
                Saved Searches
              </div>
              <p className="text-gray-500">You have not saved any searches.</p>
            </div>
          </div>

          <div className="py-5 border-b text-xs">
            <div className="px-4 space-y-2.5">
              <div className="text-base font-[400] text-gray-600">Leads</div>
              <div>
                <Link
                  href={"#"}
                  className="text-[#2777C6] hover:underline font-[600] "
                >
                  Invitations
                </Link>
              </div>
              <div>
                <Link
                  href={"#"}
                  className="text-[#2777C6] hover:underline font-[600] "
                >
                  Job Matches
                </Link>
              </div>
              <div>
                <Link
                  href={"#"}
                  className="text-[#2777C6] hover:underline font-[600] text-sm"
                >
                  Watchlist
                </Link>
              </div>
            </div>
          </div>
          <div className="py-5 text-xs">
            <div className="px-4 space-y-2.5">
              <div className="text-base font-[400] text-gray-600">
                Generate Leads
              </div>
              <div className="text-gray-500">
                Tell us about your services and showcase your work. We will
                identify potential job matches and help you connect with
                Employers.
              </div>
              <div>
                <Link
                  href={"#"}
                  className="text-[#2777C6] hover:underline font-[600] "
                >
                  + Add Services
                </Link>
              </div>
              <div>
                <Link
                  href={"#"}
                  className="text-[#2777C6] hover:underline font-[600] "
                >
                  + Add Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* end find work */}

        {/* Quotes Under Negotiation */}
        <div className="border rounded flex-1 flex flex-col">
          <div className="py-2 border-b text-xs bg-[#FAFAFA] flex-none">
            <div className="px-4">
              <div className="text-base font-[400]">
                Quotes Under Negotiation
              </div>
            </div>
          </div>
          <div className="py-5 text-xs flex-1">
            <div className="px-4 space-y-2.5">
              <p className="text-gray-700 text-center">
                Messages will appear when an Employer responds to your Quotes.
              </p>
              <div className="flex justify-center">
                <Link href={"#"} className="text-[#2777C6] hover:underline">
                  Find Work
                </Link>
              </div>
            </div>
          </div>
          <div className="py-2 text-xs bg-[#FAFAFA] border-t flex-none">
            <div className="px-4 flex justify-center">
              <Link href={"#"} className="text-[#2777C6] hover:underline">
                View All Quotes
              </Link>
            </div>
          </div>
        </div>
        {/* Quotes Under Negotiation */}
      </section>
      <section className="container mx-auto px-3 lg:px-12 flex gap-3 flex-col md:flex-row mb-10">
        {/* current jobs */}
        <div className="border rounded flex-1 flex flex-col">
          <div className="py-2 border-b text-xs bg-[#FAFAFA] flex-none">
            <div className="px-4">
              <div className="text-base font-[400]">Current Jobs</div>
            </div>
          </div>
          <div className="py-5 text-xs flex-1">
            <div className="px-4 space-y-2.5">
              <p className="text-gray-700 text-center">
                Jobs will appear when you get hired.
              </p>
            </div>
          </div>
          <div className="py-2 text-xs bg-[#FAFAFA] border-t flex-none">
            <div className="px-4 flex justify-center">
              <Link href={"#"} className="text-[#2777C6] hover:underline">
                View All Jobs
              </Link>
            </div>
          </div>
        </div>
        {/* end current jobs */}
        {/* invoices */}
        <div className="border rounded flex-1 flex-col">
          <div className="py-2 border-b text-xs bg-[#FAFAFA]">
            <div className="flex items-center justify-between px-4">
              <div className="text-base font-[400]">Invoices</div>
              <Link href={"#"} className="text-[#2777C6] hover:underline">
                Create New
              </Link>
            </div>
          </div>
          <div className="py-5 text-xs flex-1">
            <div className="px-4 space-y-2.5">
              <p className="text-gray-700 text-center">
                There are no new invoices.
              </p>
            </div>
          </div>
          <div className="py-2 text-xs bg-[#FAFAFA] border-t flex-none">
            <div className="px-4 flex justify-center">
              <Link href={"#"} className="text-[#2777C6] hover:underline">
                View All Invoices
              </Link>
            </div>
          </div>
        </div>
        {/* end invoices */}
      </section>
    </div>
  );
}
