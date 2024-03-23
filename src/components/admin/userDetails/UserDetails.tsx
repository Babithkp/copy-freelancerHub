"use client";import { getUserAllInfo } from "@/lib/http/controller/userController";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface user {
  profileUrl: string;
  ScreenName: string;
  address: string;
  country: string;
  street: string;
  city: string;
  state: string;
  postalCode: number;
  neigborhood: string;
  individual: {
    addressFileUrl: string;
    bio: string;
    identityFileUrl: string;
    tagline: string;
  };
  company: {
    tagline: string;
    companyHistory: string;
    since: string;
    teamPicUrl: string;
  };
  card: {
    cardNumber: number;
    type: string;
    expeiry: string;
    cvc: number;
    address: string;
  };
  verifyDoc: {
    code: String;
    docUrl: any;
  }[];
  services: {
    _id: String;
    Title: String;
    description: String;
    rateHr: String;
    rateWeek: String;
    thumbnailUrl: any;
  }[];
}
[];

export default function UserDetails() {
  const [userInfo, setUserInfo] = useState<user>();
  const getUrl = usePathname();
  const path = getUrl.split("/")[2];

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getUserAllInfo(path);
        if (response) {
          const filter = JSON.parse(response);
          setUserInfo(filter);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetch();
  }, []);
  return (
    <div className="flex w-[90%] flex-col">
      <section className="flex  gap-16 py-8 max-sm:flex-col max-sm:items-center">
        <div className="relative h-[15rem] w-[20%] max-sm:w-[100%]">
          <Image
            src={userInfo?.profileUrl || "https://placehold.co/400x400/png"}
            alt="profile Image "
            className="h-full w-full rounded-lg object-cover drop-shadow-lg"
            width={300}
            height={300}
          />
        </div>
        <div className="grid grid-cols-2 w-[80%]  gap-4 rounded-lg border border-blue-400 bg-white p-6 text-lg drop-shadow-lg  max-sm:w-[100%] max-sm:flex max-sm:flex-col  max-sm:gap-0">
          <div>
            <div className="flex gap-2">
              <label className="font-medium">Name:</label>
              <p>{userInfo?.ScreenName || "Name"}</p>
            </div>
            <div className="flex gap-2">
              <label className="font-medium">Address:</label>
              <p className="w-[20rem]">{userInfo?.address || "address"}</p>
            </div>
            <div className="flex gap-2">
              <label className="font-medium">Country:</label>
              <p>{userInfo?.country || "Country"}</p>
            </div>
            <div className="flex gap-2">
              <label className="font-medium">Street:</label>
              <p>{userInfo?.street || "Street"}</p>
            </div>
            <div className="flex gap-2">
              <label className="font-medium">City:</label>
              <p>{userInfo?.city || "City"}</p>
            </div>
            <div className="flex gap-2">
              <label className="font-medium">State:</label>
              <p>{userInfo?.state || "State"}</p>
            </div>
            <div className="flex gap-2">
              <label className="font-medium">Postal Code:</label>
              <p>{userInfo?.postalCode || "Code"}</p>
            </div>
            <div className="flex gap-2">
              <label className="font-medium">Neighborhood:</label>
              <p className="w-[20rem]">
                {userInfo?.neigborhood || "Neighborhood"}
              </p>
            </div>
          </div>
          <div>
            {/* ------------- */}
            {userInfo?.individual && (
              <>
                <div className="flex gap-2">
                  <label className="font-medium">Tagline:</label>
                  <p className="w-[20rem]">
                    {userInfo?.individual.tagline || "Not added"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <label className="font-medium">Bio:</label>
                  <p className="w-[20rem]">
                    {userInfo?.individual.tagline || "Not added"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <label className="font-medium">Identity:</label>
                  {userInfo?.individual.identityFileUrl ? (
                    <Link
                      href={userInfo?.individual.identityFileUrl}
                      target="_blank"
                      className=" text-blue-500"
                    >
                      Click to view
                    </Link>
                  ) : (
                    "Not added"
                  )}
                </div>
                <div className="flex gap-2">
                  <label className="font-medium">Address:</label>
                  {userInfo?.individual ? (
                    <Link
                      href={userInfo?.individual.addressFileUrl}
                      target="_blank"
                      className=" text-blue-500"
                    >
                      Click to view
                    </Link>
                  ) : (
                    "Not added"
                  )}
                </div>
              </>
            )}
            {/* ----------------- */}
            {userInfo?.company && (
              <>
                <div className="flex gap-2">
                  <label className="font-medium">Tagline:</label>
                  <p className="w-[20rem]">
                    {userInfo?.company.tagline || "Not added"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <label className="font-medium ">Company History:</label>
                  <p className="w-[15rem]">
                    {userInfo?.company.companyHistory || "Not added"}{" "}
                  </p>
                </div>
                <div className="flex gap-2">
                  <label className="font-medium ">Operating Since:</label>
                  <p>{userInfo?.company.since || "Not added"}</p>
                </div>
                {userInfo?.company.teamPicUrl ? (
                  <div className="flex gap-2 flex-col items-center ">
                    <div className="w-[7rem] h-[7rem]">
                      <Image
                        src={
                          userInfo?.company.teamPicUrl ||
                          "https://placehold.co/400x400/png "
                        }
                        alt="default image"
                        width={200}
                        height={200}
                        loading="lazy"
                        className="border h-full w-full rounded-lg object-cover drop-shadow-lg p-2"
                      />
                    </div>
                    <label className="font-medium">Team</label>
                  </div>
                ) : (
                  ""
                )}
                {/* ------------- */}
              </>
            )}
          </div>

          <div className="col-span-2">
            <h4 className="font-medium text-green-700 text-xl my-2">Service</h4>
            <div className="grid grid-cols-2 items-center max-sm:grid-cols-1">
              {userInfo?.services?.map((service, i) => (
                <div key={i}>
                  <div className="flex gap-2 flex-col">
                    {service.thumbnailUrl && (
                      <div className="w-[7rem] h-[7rem]">
                        <Image
                          src={service.thumbnailUrl}
                          alt="default image"
                          width={200}
                          height={200}
                          loading="lazy"
                          className="border h-full w-full rounded-lg object-cover drop-shadow-lg p-2"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <label className="font-medium ">Title:</label>
                    <p>{service.Title || "Title"}</p>
                  </div>
                  <div className=" gap-2">
                    <label className="font-medium ">Description:</label>
                    <p className="w-[20rem]">
                      {service.description || "Description"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <label className="font-medium ">Rate/day:</label>
                    <p className="w-[20rem]">
                      {service.rateHr ? service.rateHr + " $" : "Not added"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <label className="font-medium ">Rate/week:</label>
                    <p className="w-[20rem]">
                      {service.rateWeek ? service.rateWeek + " $" : "Not added"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="font-medium text-green-700 text-xl my-2">Card</h4>
              {userInfo?.card && (
                <>
                  <div className="flex gap-2">
                    <label className="font-medium">Card number:</label>
                    <p>{userInfo?.card.cardNumber}</p>
                  </div>
                  <div className="flex gap-2">
                    <label className="font-medium">Card Type:</label>
                    <p>{userInfo?.card.type}</p>
                  </div>
                  <div className="flex gap-2">
                    <label className="font-medium">Expire Date:</label>
                    <p>{userInfo?.card.expeiry}</p>
                  </div>
                  <div className="flex gap-2">
                    <label className="font-medium">CVC:</label>
                    <p>{userInfo?.card.cvc}</p>
                  </div>
                  <div className="flex gap-2">
                    <label className="font-medium">Billing address:</label>
                    <p className="w-[20rem]">{userInfo?.card.address}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {userInfo?.verifyDoc?.map((doc, i) => (
            <div className="col-span-2" key={i}>
              <h4 className="font-medium text-green-700 text-xl my-2">
                Document to verify
              </h4>
              <div className="flex gap-4">
                <label>{doc.code}</label>

                <Link
                  href={doc.docUrl}
                  target="_blank"
                  className=" text-blue-500"
                >
                  Click to view
                </Link>

                <p className=" text-blue-500">Click to view File</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
