import SectionBrowseFreelancer from "@/components/home/SectionBrowseFreelancer";
import SectionGetQuotes from "@/components/home/SectionGetQuotes";
import SectionHero from "@/components/home/SectionHero";
import SectionItsEasy from "@/components/home/SectionItsEasy";
import SectionTopFreelancer from "@/components/home/SectionTopFreelancer";
import SectionWhatClientSay from "@/components/home/SectionWhatClientSay";
import SectionWorkYouWay from "@/components/home/SectionWorkYouWay";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionTopFreelancer />
      <SectionItsEasy/>
      <SectionWorkYouWay/>
      <SectionWhatClientSay/>
      {/* <SectionGetQuotes/> */}
      {/* <SectionBrowseFreelancer/> */}
    </>
  );
}
