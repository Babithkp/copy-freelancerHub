import NavDashboard from "@/components/nav/NavDashboard";
import NavJobs from "@/components/nav/NavJobs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guru - Freelancer",
  description: "",
};

export default function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavJobs/>
      {children}
    </>
  );
}
