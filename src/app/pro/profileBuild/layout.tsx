import NavProfileBuild from "@/components/nav/NavProfileBuild";
import NavSideProfileBuild from "@/components/nav/NavSideProfileBuild";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guru - Freelancer",
  description: "",
};

export default function ProfileBuildLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavProfileBuild />
      <div className="flex container mx-auto px-3 lg:px-12 mt-5 mb-10 gap-5 flex-col md:flex-row">
        <NavSideProfileBuild />
        {children}
      </div>
    </>
  );
}
