import NavDashboard from "@/components/nav/NavDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guru - Freelancer",
  description: "",
};

export default function ProLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavDashboard />
      {children}
    </>
  );
}
