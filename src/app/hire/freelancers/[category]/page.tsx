import Freelancer from "@/components/category/Freelancer";import React from "react";

interface Category {
  category: String
}

export async function generateStaticParams() {
  const data = [
    { category: "interior-design-architecture" },
    { category: "logistic-and-supply-chain" },
    { category: "human-resource" },
    { category: "sales-marketing" },
    { category: "adminisitrative-and-operation" },
  ];

   return data.map((data:Category) => ({
    category: data.category
  }));
}

export default function page({ params }: { params: { category: string } }) {
  return <Freelancer params={params} />;
}
