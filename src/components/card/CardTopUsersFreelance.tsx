

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import Link from "next/link";

interface CardTopUsersFreelanceType {
  imageUrl: string;
  name: string;
  address: string;
  pay: string;
  tag: string[];
  id:string;
}

export default function CardTopUsersFreelance({
  imageUrl,
  address,
  pay,
  tag,
  name,
  id,
}: CardTopUsersFreelanceType) {
  return (
    <div className="flex flex-col items-center justify-center shadow-2xl rounded-md space-y-3 px-5 pb-10 hover:scale-105 duration-200">
      <Image
        src={imageUrl}
        alt="example"
        width={90}
        height={90}
        loading="lazy"
        className="border rounded-md -mt-8"
      />
      <div className="text-center space-y-2">
        <h2 className="text-[#2777c6] font-[500] text-[18px]">{name}</h2>
        <div className="flex justify-center">
          <p className="text-[16px] leading-[24px] text-xs bg-gray-200 rounded-md w-fit px-2 font-semibold">
            MEMBER
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-[#707070] flex text-wrap items-start">
            <div className="mt-1">
              <FaLocationDot />
            </div>
            {address}
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          {pay && 
          <div className="text-[16px] font-[500] leading-[24px] text-[#333] flex items-center gap-1">
            <BiSolidDollarCircle />
            <div>
              <span className="font-semibold">{pay}/</span> <span>yr</span>
            </div>
          </div>
          }
          <div>·</div>
          <div className="w-fit flex items-center text-[#2777c6] gap-1 border border-[#2777c6] px-2 py-0.5 rounded-md text-sm">
            <BiSolidLike />
            <span>100%</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center pt-5">
          {tag?.map((data: string, i: number) => (
            <span
              className="text-[13px] leading-5 px-2 py-1 border rounded-md"
              key={i}
            >
              {data}
            </span>
          ))}
        </div>
        <div className="flex justify-center pt-5">
          <Link href={`/hire/freelancers/detail/${id}` } className="px-5 py-2.5 rounded  text-[#2777C6] border hover:text-white hover:bg-[#2777C6] border-[#2777C6] font-semibold w-fit hover:scale-105 duration-200 ">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
