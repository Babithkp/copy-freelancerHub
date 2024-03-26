import CardFIndTopFreelance from "@/components/card/CardFIndTopFreelance";
import { findTopFreelanceCategory } from "@/lib/constant";

export default function SectionTopwithCategory({ title }: { title: string }) {

  return (
    <section className="container mx-auto lg:px-12 px-3 md:px-5 py-16">
      <h1 className="text-[35px] leading-[53px] font-[500] text-center">
        Find Top {title} Freelancers
      </h1>
      <div className="flex justify-center pt-2">
        <div className="w-20 h-0.5 bg-[#2777C6] text-center" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
        {findTopFreelanceCategory(title)?.map((data:any,i:number)=>(
        <CardFIndTopFreelance
          key={i}
          icon={data.icon}
          title={data.title}
          subTitle={data.subTitle}
          link={data.link}
        />
        ))}
      </div>
    </section>
  );
}
