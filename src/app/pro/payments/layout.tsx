import NavPayments from "@/components/nav/NavPayments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guru - Freelancer",
  description: "",
};

export default function PaymentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavPayments/>
      {children}
    </>
  );
}
