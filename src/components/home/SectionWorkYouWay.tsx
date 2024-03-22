import CardItsEasy from "@/components/card/CardItsEasy";
import Image from "next/image";
import React from "react";

export default function SectionWorkYouWay() {
  // bg-[#F7F7F7]
  return (
    <div className="bg-cover bg-[#F7F7F7]">
      <section className="container mx-auto lg:px-12 px-3 md:px-5 py-16">
        <h1 className="text-[35px] leading-[53px] font-[500] text-center text-[#094063]">
          Work Your Way
        </h1>
        <div className="flex justify-center pt-2">
          <div className="w-20 h-0.5 bg-[#4FBFA3] text-center" />
        </div>
        <div className="flex pt-10 flex-col md:flex-row">
          <div className="flex-1 flex justify-center md:block">
            <Image
              src={"/images/workyourway.avif"}
              alt="workyourway"
              width={500}
              height={0}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-[20px] leading-[23px] font-semibold text-[#094063]">
              Choose from four Payment terms and create Agreements.
            </h2>
            <div className="pt-5">
              <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-[16px] leading-[23px] font-semibold">
                  Fixed Price
                </div>
                <div className="collapse-content text-[#707070]">
                  <p>
                    Set a total fixed cost for your job and create milestones to
                    ensure you{"'"}re satisfied every step of the way. Set a due
                    date and the amount to be paid for each milestone.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow px-0">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-[16px] leading-[23px] font-semibold">
                  Hourly
                </div>
                <div className="collapse-content text-[#707070]">
                  <p>
                    Track progress with ease and pay Freelancers by the hour
                    using our Time Tracker software. If you hire multiple
                    Freelancers for your job, you{"'"}ll receive a breakdown of
                    each Freelancer{"'"}s hourly rate and time tracked.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-[16px] leading-[23px] font-semibold">
                  Task-Based
                </div>
                <div className="collapse-content text-[#707070]">
                  <p>
                    Pay for a single completed online freelance task, however
                    big or small. Create and assign tasks as needed and generate
                    invoice for each task once it is completed.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-[16px] leading-[23px] font-semibold">
                  Recurring Payment
                </div>
                <div className="collapse-content text-[#707070]">
                  <p>
                    Easily pay your go-to Freelancers on an ongoing basis. Set
                    up to four recurring payment rules for any given job - pay
                    every week, every other week, every month, or every quarter.
                    Stop or resume payments at any point with just a click of a
                    button.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
