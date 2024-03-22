import Image from "next/image";
import React from "react";

interface CardItsEasyType {
  title: string;
  subTitle: string;
  icon: any;
}

export default function CardItsEasy({
  title,
  subTitle,
  icon,
}: CardItsEasyType) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-5 hover:scale-105 duration-200 ">
      <div className="w-fit p-5 shadow-xl rounded-full">
        <Image
          src={icon}
          alt="programming"
          width={50}
          height={50}
          loading="lazy"
        />
      </div>
      <div className="space-y-1 text-center">
        <h4 className="text-[16px] leading-[23px] font-semibold">{title}</h4>
        <p className="text-[14px] leading-[21px]">{subTitle}</p>
      </div>
    </div>
  );
}
