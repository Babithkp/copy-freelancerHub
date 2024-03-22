import Image from "next/image";
import React from "react";

export default function SectionWhatClientSay() {
  return (
    <section className="container mx-auto lg:px-12 px-3 md:px-5 py-16">
      <h1 className="text-[35px] leading-[53px] font-[500] text-center text-[#094063]">
        What Clients Say
      </h1>
      <div className="flex justify-center pt-2">
        <div className="w-20 h-0.5 bg-[#4FBFA3] text-center" />
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className=" w-full pt-10 lg:px-20 px-10 flex flex-col justify-center">
            <div className="text-[#707070] text-center">
              Freelancer hub services have allowed me to find more freelancing work
              as a writer than any other website. It is easy to communicate with
              clients through their message system and their SafePay feature
              ensures that all funds are secured prior to any work being done. I
              would recommend Freelancer hub to any freelancer who is looking to find new
              clients online.
            </div>
            <div className="justify-center pt-5 flex items-center gap-3">
              <Image
                src={"/images/photo-russell-lee.avif"}
                alt="example"
                width={70}
                height={70}
                className="rounded-full h-fit"
              />
              <div className="space-y-1">
                <p className="font-semibold">ED Bagley</p>
                <p className="text-[#707070]">
                  Director of Product Marketing, O.C. Tanner Company
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="scale-150 hover:scale-[1.8] duration-200"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="scale-150 hover:scale-[1.8] duration-200"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className=" w-full pt-10 lg:px-20 px-10 flex flex-col justify-center">
            <div className="text-[#707070] text-center">
              Freelancer hub is my favorite freelance platform. I love the
              functionality, the support and the strong workflow element,
              particularly the SafePay feature which makes the transfer of funds
              so easy. I love the integration with PayPal and the ability to
              amend agreements, with all steps communicated to and actioned by
              both sides. Of all the freelance platforms I have used, Freelancer hub is by
              far my favorite.
            </div>
            <div className="justify-center pt-5 flex items-center gap-3">
              <Image
                src={"/images/photo-scopic-software.avif"}
                alt="example"
                width={70}
                height={70}
                className="rounded-full h-fit"
              />
              <div className="space-y-1">
                <p className="font-semibold">Russell Lee</p>
                <p className="text-[#707070]">Writer</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="scale-150 hover:scale-[1.8] duration-200"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="scale-150 hover:scale-[1.8] duration-200"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
