import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaAward, FaMoneyBills } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";

export default function SectionHero() {
  return (
    <div className="bg-cover bg-[#094063]">
      <section className="flex container mx-auto text-white">
        <div className="flex-1 space-y-7 py-20 md:py-20 lg:py-32 px-3 md:px-12">
          <h1 className="text-5xl font-bold">Find & Hire Expert Freelancers</h1>
          <h3 className="font-semibold text-lg">
            Work with the best freelance talent from around the world on our
            secure, flexible and cost-effective platform.
          </h3>
          <div className="flex items-center gap-2 md:gap-4 flex-wrap flex-col md:flex-row">
            <input
              type="text"
              placeholder="What skill are you looking for?"
              className="focus:outline-none border border-transparent focus:border-blue-500 rounded-3xl px-3 py-2.5 flex-1 text-black text-sm md:text-base w-full"
            />
            <div>Or</div>
            <Link
              href={"/register"}
              className="bg-[#4FBFA3] px-5 py-2.5 text-white rounded-3xl text-sm md:text-base w-full md:w-fit text-center"
            >
              Sign Up
            </Link>
          </div>
          <div className="leading-[19px] flex gap-1 flex-wrap">
            <Link
              href={"#"}
              className="font-medium text-[13px] border rounded px-2 py-0.5 text-[#808894] border-[#808894] hover:border-white hover:text-white duration-200"
            >
              Data Entry
            </Link>
            <Link
              href={"#"}
              className="font-medium text-[13px] border rounded px-2 py-0.5 text-[#808894] border-[#808894] hover:border-white hover:text-white duration-200"
            >
              Graphic Design
            </Link>
            <Link
              href={"#"}
              className="font-medium text-[13px] border rounded px-2 py-0.5 text-[#808894] border-[#808894] hover:border-white hover:text-white duration-200"
            >
              Ethical Hacking
            </Link>
            <Link
              href={"#"}
              className="font-medium text-[13px] border rounded px-2 py-0.5 text-[#808894] border-[#808894] hover:border-white hover:text-white duration-200"
            >
              Logo Design
            </Link>
            <Link
              href={"#"}
              className="font-medium text-[13px] border rounded px-2 py-0.5 text-[#808894] border-[#808894] hover:border-white hover:text-white duration-200"
            >
              WordPress
            </Link>
          </div>
        </div>
        <div className="flex-none w-1/3 bg-[url('/images/bannerguy.avif')] bg-cover bg-left-bottom hidden lg:block"></div>
      </section>
      <div className="bg-[#F7F7F7]">
        <div className="container mx-auto lg:px-12 grid grid-cols-2 lg:grid-cols-4 md:px-5 px-3">
          <div className="flex items-start md:items-center gap-5 flex-col md:flex-row flex-1 px-5 py-5">
            <GrUserManager className="scale-[2] text-[#4FBFA3] ml-1" />
            <div>
              <h3 className="text-lg font-bold text-[#094063]">800,000</h3>
              <h4 className="text-nowrap text-xs md:text-base">
                Employers Worldwide
              </h4>
            </div>
          </div>
          <div className="flex items-start md:items-center gap-5 flex-col md:flex-row flex-1 px-5 py-5">
            <FaFileInvoiceDollar className="scale-[2] text-[#4FBFA3] ml-1" />
            <div>
              <h3 className="text-lg font-bold text-[#094063]">1 Million</h3>
              <h4 className="text-nowrap text-xs md:text-base">
                Paid Invoices
              </h4>
            </div>
          </div>
          <div className="flex items-start md:items-center gap-5 flex-col md:flex-row flex-1 px-5 py-5">
            <FaMoneyBills className="scale-[2] text-[#4FBFA3] ml-1" />
            <div>
              <h3 className="text-lg font-bold text-[#094063]">$25 Million</h3>
              <h4 className="text-nowrap text-xs md:text-base">
                Paid to Freelancers
              </h4>
            </div>
          </div>
          <div className="flex items-start md:items-center gap-5 flex-col md:flex-row flex-1 px-5 py-5 scale-110 lg:scale-125  bg-white drop-shadow-2xl rounded-md">
            <FaAward className="scale-[2] text-[#4FBFA3] ml-2.5" />
            <div>
              <h3 className="text-lg font-bold ml-1.5 md:ml-0 text-[#094063]">99%</h3>
              <h4 className="text-nowrap text-xs md:text-base ml-1.5 md:ml-0">
                Customer Satisfaction Rate
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
