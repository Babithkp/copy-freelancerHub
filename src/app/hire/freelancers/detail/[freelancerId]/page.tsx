"use client";

import { dummyFreelanceDetail } from "@/lib/dummyFreelanceDetail";
import Image from "next/image";
import Link from "next/link";
import { BiSolidDollarCircle, BiSolidLike } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoFlagSharp, IoShareSocial } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";

export default function page({ params }: { params: { freelancerId: string } }) {
  const freelancer:any = dummyFreelanceDetail(params.freelancerId)
  return (
    <section className="container mx-auto px-3 lg:px-12 py-5 lg:my-14 flex flex-col lg:flex-row gap-5">
      {/* profile */}
      <div className="flex flex-col items-center justify-center border space-y-3 px-5 pb-5 flex-none lg:w-[27%] rounded-md h-fit">
        <div className="w-full flex flex-row lg:flex-col items-center justify-start gap-3 pt-3 lg:pt-0 ">
          <Image
            src={freelancer?.imageUrl ||"https://placehold.co/400x400/png"}
            alt={freelancer?.name||"example"}
            width={100}
            height={100}
            loading="lazy"
            className="border rounded-md lg:-mt-12"
          />
          <div className="text-center space-y-1">
            <h1 className="font-[500] text-xl text-start lg:text-center">
              {freelancer?.name}
            </h1>
            <div className="flex lg:justify-center w-full">
              <div className="text-[#707070] flex text-wrap items-start text-base">
                <div className="mt-1">
                  <FaLocationDot className="" />
                </div>
                {freelancer?.address}
              </div>
            </div>
            {freelancer?.payYear && 
            <div className="flex lg:justify-center items-center gap-2 w-full">
              <div className="text-[16px] font-[500] leading-[24px] text-[#333] flex items-center gap-1">
                <BiSolidDollarCircle />
                <div>
                  <span className="font-semibold">{freelancer?.payYear}/</span> <span>yr</span>
                </div>
              </div>

              <div>·</div>
              <div className="w-fit flex items-center text-[#2777c6] gap-1 border border-[#2777c6] px-2 py-0.5 rounded-md text-sm">
                <BiSolidLike />
                <span>100%</span>
              </div>
            </div>
            }
          </div>
        </div>
        <div className="border-b w-full" />
        <div className="text-sm w-full space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 ">All-Time Earnings</h2>
            <span className="font-semibold justify-between">${freelancer?.allTimeEarnings}</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 ">Transactions Completed</h2>
            <span className="font-semibold justify-between">{freelancer?.transactionCompleted}</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 ">Employers</h2>
            <span className="font-semibold justify-between">{freelancer?.employers}</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 ">Largest Employer</h2>
            <span className="font-semibold justify-between">${freelancer?.largestEmployers}</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 ">Member Since</h2>
            <span className="font-semibold justify-between">{freelancer?.memberSince}</span>
          </div>
        </div>
        <div className="border-b w-full" />
        <div className="text-wrap text-sm text-gray-500">
        {freelancer?.descriptionProfile}
        </div>
        <div className="border-b w-full" />
        <div className="text-wrap text-sm text-gray-500 flex justify-evenly w-full pt-3">
          <div className="flex items-center gap-1">
            <IoShareSocial className="text-xl" />
            <div className="text-blue-500">Share</div>
          </div>
          <div className="border-r" />
          <div className="flex items-center gap-1">
            <IoFlagSharp className="text-xl" />
            <div className="text-blue-500">Report</div>
          </div>
        </div>
      </div>
      {/* end profile */}

      {/* overview */}
      <div className="flex-1 rounded-md lg:-mt-12 w-full">
        <div className="flex">
          <div className="border-x w-fit px-10 border-t rounded-t-md flex-1 text-center py-2.5 font-semibold">
            Overview
          </div>
          <div className="flex-1 border-b" />
          <div className="flex-1 border-b" />
        </div>
        <div className="border-x border-b px-5 pt-2">
          <h2 className="text-gray-500 font-semibold">{freelancer?.typeService}</h2>
          <h1 className="font-[500] text-xl pt-2">
          {freelancer?.titleService}
          </h1>
          <div className="text-sm text-gray-600 font-semibold pt-1">
          {freelancer?.payService}
          </div>
          <div className="text-base text-gray-500 pt-5">
          {freelancer?.descriptionService}
          </div>
          <div className="border-b pt-5" />
          <div className="pt-5">
            <h2 className="font-semibold">Skills & Expertise</h2>
            <div className="text-sm flex flex-wrap gap-2 pt-3">
            {freelancer?.tagSkills?.map((data:string,i:number)=>(
              <div key={i} className="w-fit px-2 py-1 border rounded">{data}</div>
            ))}
            </div>
          </div>
          <div className="border-b pt-5" />
          <div className="pt-5">
            <h2 className="font-semibold">0 Reviews</h2>
            <div className="pt-3">
              <div className="rounded-full border w-fit p-6 text-gray-400 ">
                <VscFeedback className="text-6xl" />
              </div>
              <div className="pt-2 text-gray-500">
                This Freelancer has not received any feedback
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border rounded-md px-5 py-5">
          <h2 className="text-gray-500 font-semibold">
            Browse Similar Freelance Experts
          </h2>
          <div className="footer mt-3 text-sm text-gray-500">
            <div>
              <Link href={"#"}>Designers</Link>
              <Link href={"#"}>Logistics Consultants</Link>
              <Link href={"#"}>Project Managers</Link>
            </div>
            <div>
              <Link href={"#"}>Experts</Link>
              <Link href={"#"}>Strategy Development Consultants</Link>
              <Link href={"#"}>Outsourcing Consultants</Link>
            </div>
            <div>
              <Link href={"#"}>Management Experts</Link>
              <Link href={"#"}>Supply Chain Management Experts</Link>
            </div>
          </div>
        </div>
      </div>
      {/* end overview */}
    </section>
  );
}
