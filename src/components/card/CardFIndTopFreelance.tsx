import Image from "next/image";
import Link from "next/link";

interface CardFIndTopFreelanceType {
  title: string;
  subTitle: string;
  icon: any;
  link: string;
}

export default function CardFIndTopFreelance({
  title,
  subTitle,
  icon,
  link,
}: CardFIndTopFreelanceType) {
  return (
    <Link
      href={link}
      className="shadow-lg flex flex-col justify-center items-center gap-3 py-5 hover:scale-105 duration-200"
    >
      {icon &&
      <Image
        src={icon}
        alt="programming"
        width={50}
        height={50}
        loading="lazy"
      />
      }
      <div className="space-y-1 text-center">
        <h4 className="text-[16px] leading-[23px] font-semibold">{title}</h4>
        {subTitle &&
        <p className="text-[14px] leading-[21px]">{subTitle} Freelancers</p>
        }
      </div>
    </Link>
  );
}
