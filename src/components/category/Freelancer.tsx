"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SectionTopUserFrelance from "./SectionTopUserFrelance";
import SectionTopwithCategory from "./SectionTopwithCategory";

export default function Freelancer({
  params,
}: {
  params: { category: string };
}) {
  const [titleHero, setTitleHero] = useState<string>("");
  useEffect(() => {
    if (params.category == "interior-design-architecture") {
      setTitleHero("Interior design/Architecture");
    }
    if (params.category == "logistic-and-supply-chain") {
      setTitleHero("Logistics and Supply-chain");
    }
    if (params.category == "human-resource") {
      setTitleHero("Human Resources");
    }
    if (params.category == "sales-marketing") {
      setTitleHero("Sales marketing");
    }
    if (params.category == "adminisitrative-and-operation") {
      setTitleHero("Administrative & Operations");
    }
  }, [params]);
  return (
    <>
      <div className="bg-cover bg-[#094063]">
        <section className="flex container mx-auto text-white">
          <div className="flex-1 space-y-5 md:space-y-7 py-20 md:py-20 lg:py-32 px-3 md:px-12">
            <h1 className="text-3xl md:text-5xl font-bold text-wrap text-center lg:text-left">
              Find and Hire {titleHero}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-wrap text-center lg:text-left">
              Browse {titleHero} Experts Free
            </h2>
            <h3 className="font-semibold text-lg text-wrap text-center lg:text-left">
              Freelancer hub makes it easy for quality employers and freelancers
              to connect, collaborate, and get work done flexibly and securely.
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
      </div>
      {/* <SectionTopwithCategory title={titleHero} /> */}
      <SectionTopUserFrelance title={titleHero} />
    </>
  );
}
