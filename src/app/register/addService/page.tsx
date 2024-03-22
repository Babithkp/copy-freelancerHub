"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import { IoMdImages } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";

const CustomEditor = dynamic(
  () => {
    return import("./Editor");
  },
  { ssr: false }
);

export default function AddServiceDedicatedResource() {
  const [thumbnail, setThumbnail] = useState<any>(null);
  const [editorValue, setEditorValue] = useState<any>("");
  const [selectCategory, setSelectCategory] = useState<string | null>(null);
  const router = useRouter();

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader() as any;
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className="container mx-auto py-10 px-3 md:px-20 lg:px-60">
      <div className="border rounded flex-col">
        <div className="py-2 border-b bg-[#FAFAFA] rounded-t px-4">
          <h1 className="text-xl font-[400]">Add a Service</h1>
        </div>
        <div className="px-4 mt-5">
          {/* service title */}
          <h2 className="flex items-center gap-2 text-lg">
            <IoSettingsOutline className="text-[#4FBFA3]" />
            <span className="font-semibold">Service Title</span>
          </h2>
          <div className="text-[14px] mt-2">
            <h3 className="text-gray-600">
              Mention the exact service that you offer.
            </h3>
            <input
              type="text"
              className="w-full px-3 py-2 rounded border focus:outline-none focus:border-[#4FBFA3] mt-2"
              placeholder="E.g. Android App Development"
            />
          </div>
          <div tabIndex={0} className="collapse w-fit text-xs -ml-3">
            <input type="checkbox" />
            <div className="collapse-title text-[#4FBFA3]">Examples</div>
            <div className="collapse-content -mt-5">
              <div className="flex items-center gap-2">
                <div className="bg-[#4FBFA3] w-1 h-1 rounded-full" />
                <div>Mobile and Web Application Development</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#4FBFA3] w-1 h-1 rounded-full" />
                <div>Full Stack Web Development</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#4FBFA3] w-1 h-1 rounded-full" />
                <div>Creative, Content and Technical Writing</div>
              </div>
            </div>
          </div>
          <div className="border-b" />
          {/* end service title */}

          {/* service description */}
          <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
            <MdOutlineDescription className="text-[#4FBFA3]" />
            <span className="font-semibold">Service Description</span>
          </h2>
          <div className="text-[14px] mt-2">
            <h3 className="text-gray-600">
              Describe service in detail and help Employers understand your
              capabilities.
            </h3>
            <div className="mt-3">
              <CustomEditor initialData={editorValue} />
            </div>
          </div>
          <div className="border-b" />
          {/* end service description */}

          {/* Service Category and skills */}
          {/* <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
            <VscTools className="text-[#4FBFA3]" />
            <span className="font-semibold">Service Category and Skills</span>
          </h2>
          {!selectCategory && (
            <div className="text-[14px] mt-2 flex flex-wrap gap-3 justify-between pb-4">
              <div
                onClick={() =>
                  setSelectCategory("Interior design/Architecture")
                }
                className="border px-5 cursor-pointer font-semibold py-2 text-center flex-1 text-nowrap hover:bg-gray-300 rounded duration-200"
              >
                Interior design/Architecture
              </div>
              <div
                onClick={() => setSelectCategory("Logistics and Supply-chain")}
                className="border px-5 cursor-pointer font-semibold py-2 text-center flex-1 text-nowrap hover:bg-gray-300 rounded duration-200"
              >
                Logistics and Supply-chain
              </div>
              <div
                onClick={() => setSelectCategory("Human Resources")}
                className="border px-5 cursor-pointer font-semibold py-2 text-center flex-1 text-nowrap hover:bg-gray-300 rounded duration-200"
              >
                Human Resources
              </div>
              <div
                onClick={() => setSelectCategory("Sales marketing")}
                className="border px-5 cursor-pointer font-semibold py-2 text-center flex-1 text-nowrap hover:bg-gray-300 rounded duration-200"
              >
                Sales marketing
              </div>
              <div
                onClick={() => setSelectCategory("Administrative & Operations")}
                className="border px-5 cursor-pointer font-semibold py-2 text-center flex-1 text-nowrap hover:bg-gray-300 rounded duration-200"
              >
                Administrative & Operations
              </div>
            </div>
          )}
          {selectCategory && (
            <div className="border mb-4">
              <div className="space-y-1 bg-[#FAFAFA] p-3 flex justify-between items-center">
                <div>
                  <div className="text-xs font-[400]">Category</div>
                  <div className="text-sm font-semibold">{selectCategory}</div>
                </div>
                <div
                  onClick={() => setSelectCategory(null)}
                  className="w-fit text-sm text-[#4FBFA3] hover:underline cursor-pointer"
                >
                  Clear
                </div>
              </div>
              <div className="p-3 space-y-2">
                <div className="text-sm font-semibold">Select Sub Category</div>
                <div>
                  {selectCategory === "Interior design/Architecture" && (
                    <label className="flex items-center gap-1 text-gray-500">
                      <input type="checkbox" />
                      <div>Interior designer/Architect</div>
                    </label>
                  )}
                  {selectCategory === "Logistics and Supply-chain" && (
                    <div className="space-y-2">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" />
                        <div>Logistic consultant</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" />
                        <div>Supply Chain consultant</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" />
                        <div>Procurement consultant</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" />
                        <div>Freight forwarding agent</div>
                      </label>
                    </div>
                  )}
                  {selectCategory === "Sales marketing" && (
                    <div className="space-y-2">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" />
                        <div>Digital marketing</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" />
                        <div>Lead generation</div>
                      </label>
                    </div>
                  )}
                  {selectCategory === "Human Resources" && (
                    <div className="space-y-2">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" />
                        <div>Recruiter</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" />
                        <div>HR consultant</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" />
                        <div>Payroll administrator</div>
                      </label>
                    </div>
                  )}
                  {selectCategory === "Administrative & Operations" && (
                    <div className="space-y-2">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" />
                        <div>Virtual Assistant</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" />
                        <div>Business consultant</div>
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="border-b" /> */}
          {/* end Service Category and skills */}

          {/* Service Cost */}
          <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
            <GrMoney className="text-[#4FBFA3]" />
            <span className="font-semibold">Service Cost</span>
          </h2>
          <h3 className="text-gray-600 text-sm">
          Enter the minimum amount that you charge for your services.
            </h3>
          <div className="text-[14px] mt-2 flex lg:gap-28 md:gap-16 gap-7 mb-5">
            <label htmlFor="">
              <div className="font-[500] text-gray-700 text-xs">Rate/Hour</div>
              <div className="w-fit relative pt-1">
                <input
                  type="number"
                  className="border focus:outline-none rounded focus:border-[#4FBFA3] pl-4 pr-2 py-2 w-24 md:w-36"
                />
                <div className="text-gray-400 absolute top-[17px] left-1">
                  <BiDollar />
                </div>
              </div>
            </label>
            <label htmlFor="">
              <div className="font-[500] text-gray-700 text-xs text-nowrap">
                Rate/Week
              </div>
              <div className="w-fit relative pt-1">
                <input
                  type="number"
                  className="border focus:outline-none rounded focus:border-[#4FBFA3] pl-4 pr-2 py-2 w-24 md:w-36"
                />
                <div className="text-gray-400 absolute top-[17px] left-1">
                  <BiDollar />
                </div>
              </div>
            </label>
          </div>
          <div className="border-b" />
          {/* end Service Cost */}

          {/* Service Thumbnail */}
          <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
            <CiImageOn className="text-[#4FBFA3]" />
            <span className="font-semibold">Service Thumbnail</span>
          </h2>
          <div className="text-[14px] mt-2">
            <h3 className="text-gray-600">Select a photo for your service.</h3>
            <label>
              <div
                className={`w-[120px] h-[80px] border text-gray-500 items-center justify-center cursor-pointer ${
                  thumbnail ? "hidden" : "flex"
                }`}
              >
                <IoMdImages className="scale-150" />
              </div>
              {thumbnail && (
                <Image
                  src={thumbnail}
                  alt="image"
                  width={120}
                  height={80}
                  className="border"
                />
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onClick={handleImageChange}
              />
            </label>
            <h3 className="text-gray-600 pb-3">
              For best results, upload image in size 300 x 200 (under 5 MB).
            </h3>
          </div>
          {/* end Service Thumbnail */}
        </div>
      </div>
      <div className="mt-10 space-x-4 mb-10 sm:">
        <Button onClick={() => router.push("/register/addPayment")}>Save</Button>
      </div>
    </section>
  );
}
