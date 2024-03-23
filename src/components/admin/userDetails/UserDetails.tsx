import Image from "next/image";
import React from "react";

export default function UserDetails() {
  return (
    <div className="flex w-[90%] flex-col ">
      <section className="flex items-center gap-16 py-8">
        <div className="relative h-[15rem] w-[20%]">
          <Image
            src={
              "/images/Linkedin Photo_636831174243587906_guruImgLarge_eead0e25-f58d-4e4f-9b7f-1855190e8554.avif"
            }
            alt="profile Image "
            className="h-full w-full rounded-lg object-cover drop-shadow-lg"
            width={300}
            height={300}
          />
        </div>
        <div className="flex w-[80%] flex-col gap-4 rounded-lg border border-blue-400 bg-white p-6 text-lg drop-shadow-lg">
          <div className="flex gap-2">
            <label className="font-medium">Name:</label>
            <p>Babith</p>
          </div>
          <div className="flex gap-2">
            <label className="font-medium">Address:</label>
            <p>Near gowda samaja, kushalnagar</p>
          </div>
          <div className="flex gap-2">
            <label className="font-medium">Address:</label>
            <p>Near gowda samaja, kushalnagar</p>
          </div>
          <div className="flex gap-2">
            <label className="font-medium">Address:</label>
            <p>Near gowda samaja, kushalnagar</p>
          </div>
          <div className="flex gap-2">
            <label className="font-medium">Address:</label>
            <p>Near gowda samaja, kushalnagar</p>
          </div>
          <div className="flex gap-2">
            <label className="font-medium">Address:</label>
            <p>Near gowda samaja, kushalnagar</p>
          </div>
          <div className="flex gap-2">
            <label className="font-medium">Address:</label>
            <p>Near gowda samaja, kushalnagar</p>
          </div>
          <div className="flex gap-2">
            <label className="font-medium">Address:</label>
            <p>Near gowda samaja, kushalnagar</p>
          </div>
        </div>
      </section>
    </div>
  );
}
