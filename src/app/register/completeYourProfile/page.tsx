"use client";

import Button from "@/components/button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegAddressBook } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MdPermIdentity } from "react-icons/md";

export default function CompleteYourProfile() {
  const [iam, setIam] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [uploadDocument, setUploadDocument] = useState<string | null>("");
  const [uploadDocument2, setUploadDocument2] = useState<string | null>("");
  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadDocument(file.name);
    } else {
      setUploadDocument("");
    }
  };

  const handleDeleteFile = () => {
    setUploadDocument(null);
  };

  const handleFileChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadDocument2(file.name);
    } else {
      setUploadDocument2("");
    }
  };

  const handleDeleteFile2 = () => {
    setUploadDocument2(null);
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader() as any;
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-3 lg:px-64 min-h-[90vh] flex flex-col justify-center items-center gap-5 my-10 ">
      <section className="border rounded flex-1 flex-col">
        <div className="py-2 border-b bg-[#FAFAFA] rounded-t px-4">
          <h1 className="text-base font-semibold">Create Your Profile</h1>
        </div>
        {/* photo */}
        <div className="px-4">
          <div className="bg-[url('https://res.cloudinary.com/gurucom/image/upload/f_auto,q_auto,dpr_2/pimg/CoverImages/default_cover_image.jpeg')] flex flex-col justify-center items-center py-5 mt-5">
            <Image
              src={selectedImage || "/images/def_fl_128.avif"}
              alt="default"
              width={150}
              height={150}
              loading="lazy"
            />
            <div className="pt-2">
              <label className="bg-[#4FBFA3] text-white px-3 py-1 rounded-md text-sm hover:scale-105 duration-200">
                <span className="cursor-pointer hover:scale-105 duration-200">
                  Change Photo
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onClick={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>
        {/* end photo */}

        {/* public indentity */}
        <div className="mt-3 ">
          <h2 className="text-base border-b-2 mx-4 py-1">Public Indentity</h2>
          <div className="text-sm pt-3 px-5 space-y-2">
            <label className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center ">
              <div className="sm:w-1/5 sm:text-right">
                Screen Name <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
              />
            </label>
            <div className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center pt-2">
              <div className="sm:w-1/5 sm:text-right">
                I am... <span className="text-red-500">*</span>
              </div>
              <div className="flex-1 flex items-center gap-3">
                <label htmlFor="" className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="iam"
                    onChange={() => setIam(true)}
                  />
                  <span>An Individual</span>
                </label>
                <label htmlFor="" className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="iam"
                    onChange={() => setIam(false)}
                  />
                  <span>A Company</span>
                </label>
              </div>
            </div>
            {iam ? (
              <div className="space-y-5 pt-4">
                <label className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center ">
                  <div className="sm:w-1/5 sm:text-right">Tagline</div>
                  <div className="flex-1">
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={3}
                      className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                    ></textarea>
                    <div className="text-[11px] text-gray-500">
                      190 characters left
                    </div>
                  </div>
                </label>
                <label className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center ">
                  <div className="sm:w-1/5 sm:text-right">
                    Bio <span className="text-red-500">*</span>
                  </div>
                  <div className="flex-1">
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={3}
                      placeholder="Tell your story! Include information about your work experience, values, personal anecdotes, hobbies, etc."
                      className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                    ></textarea>
                    <div className="text-[11px] text-gray-500">
                      3000 characters left
                    </div>
                  </div>
                </label>
              </div>
            ) : (
              <div className="space-y-5 pt-4">
                <label className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center ">
                  <div className="sm:w-1/5 sm:text-right">Tagline</div>
                  <div className="flex-1">
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={3}
                      className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                    ></textarea>
                    <div className="text-[11px] text-gray-500">
                      190 characters left
                    </div>
                  </div>
                </label>
                <label className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center ">
                  <div className="sm:w-1/5 sm:text-right">
                    Company History <span className="text-red-500">*</span>
                  </div>
                  <div className="flex-1">
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={3}
                      placeholder="Tell your company's story! Include information about the individuals that make up the company, as well as the company itself."
                      className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                    ></textarea>
                    <div className="text-[11px] text-gray-500">
                      3000 characters left
                    </div>
                  </div>
                </label>
                <label className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center ">
                  <div className="sm:w-1/5 sm:text-right">Operating since</div>
                  <input
                    type="text"
                    className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                  />
                </label>
                <label className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center ">
                  <div className="sm:w-1/5 sm:text-right">
                    Featured Team Members
                  </div>
                  <div>
                    <Image
                      src={"https://placehold.co/400x400.png"}
                      alt="default"
                      width={180}
                      height={180}
                      loading="lazy"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3] hidden"
                    />
                  </div>
                </label>
              </div>
            )}
            <label className="font-[500] flex flex-col sm:flex-row sm:gap-3 sm:items-center pt-4">
              <div className="sm:w-1/5 sm:text-right">
                Verify Your Identity <span className="text-red-500">*</span>
              </div>
              <div className="flex-1">
                <div className="pt-3 flex flex-col items-start">
                  <label
                    htmlFor="uploadDocument"
                    className="flex flex-col items-left cursor-pointer"
                  >
                    <div className="text-[#4FBFA3] border rounded-full p-4 w-fit relative hover:scale-105 duration-200">
                      <MdPermIdentity className="scale-150" />
                      <CiCirclePlus className="absolute top-0 right-0 scale-75" />
                    </div>
                    <div className="text-xs text-gray-400 pt-1">
                      Upload ID: International passport, Driver’s license, or
                      National Identity Card.
                    </div>
                    <input
                      type="file"
                      name="uploadDocument"
                      id="uploadDocument"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                  {uploadDocument && (
                    <div className="mt-3">
                      <div className="text-xs flex items-center gap-1 bg-gray-300 rounded-md px-2 py-1 w-fit">
                        <div>{uploadDocument}</div>
                        <div
                          onClick={handleDeleteFile}
                          className="bg-red-600 text-white rounded-full w-fit p-0.5 hover:scale-105 duration-200 cursor-pointer"
                        >
                          <IoCloseSharp />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </label>

            <label className="font-[500] flex flex-col sm:flex-row sm:gap-3 sm:items-center pt-4">
              <div className="sm:w-1/5 sm:text-right">Verify Your Address <span className="text-red-500">*</span></div>
              <div className="flex-1">
                <div className="pt-3 flex flex-col items-start">
                  <label
                    htmlFor="uploadDocument2"
                    className="flex flex-col items-start cursor-pointer"
                  >
                    <div className="text-[#4FBFA3] border rounded-full p-4 w-fit relative hover:scale-105 duration-200">
                      <FaRegAddressBook className="scale-150" />
                      <CiCirclePlus className="absolute top-0 right-0 scale-75" />
                    </div>
                    <div className="text-xs text-gray-400 pt-1">
                      Upload proof of address: Utility bill.
                    </div>
                    <input
                      type="file"
                      name="uploadDocument2"
                      id="uploadDocument2"
                      className="hidden"
                      onChange={handleFileChange2}
                    />
                  </label>
                  {uploadDocument2 && (
                    <div className="mt-3">
                      <div className="text-xs flex items-center gap-1 bg-gray-300 rounded-md px-2 py-1 w-fit">
                        <div>{uploadDocument2}</div>
                        <div
                          onClick={handleDeleteFile2}
                          className="bg-red-600 text-white rounded-full w-fit p-0.5 hover:scale-105 duration-200 cursor-pointer"
                        >
                          <IoCloseSharp />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </label>

            <div className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center pb-10 pt-5">
              <div className="w-1/5" />
              <div className="flex-1">
                <Button onClick={() => router.push("/register/addService")}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* end public indentity */}
      </section>
    </div>
  );
}
