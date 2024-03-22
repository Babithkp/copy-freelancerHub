import Image from "next/image";
import React from "react";

interface CardTransferMethodType {
  title: string;
  imageUrl: string;
  onClick?: (e: any) => void;
}

export default function CardTransferMethod({
  title,
  imageUrl,
  onClick,
}: CardTransferMethodType) {
  return (
    <>
      <div className="border p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={imageUrl}
            alt="method-echeck_vvmwhd.png"
            width={80}
            height={0}
            loading="lazy"
            className="border rounded"
          />
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <button
          onClick={onClick}
          className="px-3 md:px-5 py-1 md:py-1.5 rounded-3xl font-semibold border border-[#4FBFA3] bg-[#4FBFA3] text-white"
        >
          Add
        </button>
      </div>
    </>
  );
}
