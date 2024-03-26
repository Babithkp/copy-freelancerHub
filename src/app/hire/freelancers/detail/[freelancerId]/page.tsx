import HireFreelancesDetails from "@/components/hireFreelances/HireFreelancesDetails";import React from "react";

interface User {
  freelancerId: string;
}

export async function generateStaticParams() {
  const data = [
    { freelancerId: "1" },
    { freelancerId: "2" },
    { freelancerId: "3" },
    { freelancerId: "4" },
    { freelancerId: "5" },
    { freelancerId: "6" },
    { freelancerId: "7" },
    { freelancerId: "8" },
    { freelancerId: "9" },
    { freelancerId: "10" },
    { freelancerId: "11" },
    { freelancerId: "12" },
    { freelancerId: "13" },
    { freelancerId: "14" },
    { freelancerId: "15" },
  ];
  return data.map((data: User) => ({
    freelancerId: data.freelancerId,
  }));
}

export default function page({ params }: any) {
  return <HireFreelancesDetails params={params} />;
}
