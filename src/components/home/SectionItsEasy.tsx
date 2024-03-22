import CardFIndTopFreelance from "@/components/card/CardFIndTopFreelance";
import CardItsEasy from "@/components/card/CardItsEasy";
import React from "react";

export default function SectionItsEasy() {
  return (
    <section className="container mx-auto lg:px-12 px-3 md:px-5 py-16">
      <h1 className="text-[35px] leading-[53px] font-[500] text-center text-[#094063]">
        It{"'"}s Easy to Get Work Done on Freelancer Hub
      </h1>
      <div className="flex justify-center pt-2">
        <div className="w-20 h-0.5 bg-[#4FBFA3] text-center" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
        <CardItsEasy
          icon={"/svg/programing-svgrepo-com.svg"}
          title="Post a Job"
          subTitle="Create your free job posting and start receiving Quotes within hours."
        />
        <CardItsEasy
          icon={"/svg/programing-svgrepo-com.svg"}
          title="Hire Freelancers"
          subTitle="Compare the Quotes you receive and hire the best freelance professionals for the job."
        />
        <CardItsEasy
          icon={"/svg/programing-svgrepo-com.svg"}
          title="Get Work Done"
          subTitle="Decide on how and when payments will be made and use WorkRooms to collaborate, communicate and track work."
        />
        <CardItsEasy
          icon={"/svg/programing-svgrepo-com.svg"}
          title="Make Secure Payments"
          subTitle="Choose from multiple payment methods with SafePay payment protection."
        />
      </div>
    </section>
  );
}
