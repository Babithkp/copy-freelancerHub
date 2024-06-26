"use client";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegAddressBook } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MdPermIdentity } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form"

import { GoDotFill } from "react-icons/go";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "@/lib/firebase";
import { toast } from "react-toastify";
import { VscLoading } from "react-icons/vsc";
import { getUserIdentity, updateRegiterProfile } from "@/lib/api/fetch";

type Inputs = {
  screenName: string;
  tagline: string;
  bio: string;
  identityFileUrl: any[];
  addressFileUrl: any[];
  companyHistory: string;
  since: string;
  teamPicUrl: string;
};

export default function CompleteYourProfile({ params }: any) {
  const [iam, setIam] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  // const [selectedTeamImage, setSelectedTeamImage] = useState<any>(null);
  // const [selectedTeamImageFile, setSelectedTeamImageFile] = useState<any>(null);
  const [uploadDocument, setUploadDocument] = useState<string[] | []>([]);
  const [uploadDocumentFile, setUploadDocumentFile] = useState<any[] | []>([]);
  const [uploadDocument2, setUploadDocument2] = useState<string[] | []>([]);
  const [uploadDocument2File, setUploadDocument2File] = useState<any[] | []>(
    []
  );
  const [identityError, setIdentityError] = useState<boolean | string>(false);
  const [addressError, setAddressError] = useState<boolean | string>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadDocument((prev) => [...prev, file.name]);
      setUploadDocumentFile((prev) => [...prev, file]);
      setIdentityError(false);
    } else {
      setUploadDocument([]);
    }
  };

  const handleDeleteFile = (fileName: string) => {
    setUploadDocument((prev) => prev.filter((file) => file !== fileName));
  };

  const handleFileChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadDocument2((prev) => [...prev, file.name]);
      setUploadDocument2File((prev) => [...prev, file]);
      setAddressError(false);
    } else {
      setUploadDocument2([]);
    }
  };

  const handleDeleteFile2 = (fileName: string) => {
    setUploadDocument2((prev) => prev.filter((file) => file !== fileName));
  };

  async function changeProfileImageToStorage(file: any) {
    const storageRef = ref(storage, `userProfileImages/${file.name + v4()}`);
    const response = await uploadBytes(storageRef, file);
    const snapshot = response.ref;
    const getProfileURL = await getDownloadURL(snapshot);
    if (getProfileURL) {
      if (response) {
        return getProfileURL;
      }
    }
  }

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader() as any;
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      changeProfileImageToStorage(file);
    }
  };
  // const teamImageChange = (event: any) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader() as any;
  //     reader.onloadend = () => {
  //       setSelectedTeamImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //     setSelectedTeamImageFile(file);
  //   }
  // };

  // async function teamImageToStorage(file: any) {
  //   const storageRef = ref(storage, `teamsImages/${file.name + v4()}`);
  //   const response = await uploadBytes(storageRef, file);
  //   const snapshot = response.ref;
  //   const getProfileURL = await getDownloadURL(snapshot);
  //   if (getProfileURL) {
  //     if (response) {
  //       return getProfileURL;
  //     }
  //   }
  // }

  async function identityFileToStorage(file: any) {
    const storageRef = ref(storage, `userIdentityFile/${file.name + v4()}`);
    const response = await uploadBytes(storageRef, file);
    const snapshot = response.ref;
    const getProfileURL = await getDownloadURL(snapshot);
    if (getProfileURL) {
      if (response) {
        return getProfileURL;
      }
    }
  }

  async function addressFileToStorage(file: any) {
    const storageRef = ref(storage, `userAddressFile/${file.name + v4()}`);
    const response = await uploadBytes(storageRef, file);
    const snapshot = response.ref;
    const getProfileURL = await getDownloadURL(snapshot);
    if (getProfileURL) {
      if (response) {
        return getProfileURL;
      }
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let identityFileUrl;
    let addressFileUrl;
    setIsSubmitting(true);
    // teamPicUrl
    if (uploadDocument.length === 0) {
      setIdentityError("Please choose your Identity Document");
      setIsSubmitting(false);
      return;
    }
    if (uploadDocument2.length === 0) {
      setAddressError("Please choose your Address Document");
      setIsSubmitting(false);
      return;
    }
    // if (selectedTeamImage) {
    //   const teamUrl = await teamImageToStorage(selectedTeamImageFile);
    //   if (teamUrl) {
    //     data.teamPicUrl = teamUrl;
    //   }
    // }
    // identityFile
    if (uploadDocument) {
      const IdProofPromises = uploadDocumentFile.map((file) =>
        identityFileToStorage(file)
      );
      const IdProof = await Promise.all(IdProofPromises);
      if (IdProof) {
        identityFileUrl = IdProof;
      }
    }
    // addressFile
    if (uploadDocument2) {
      const IdProofPromises = uploadDocument2File.map((file) =>
        addressFileToStorage(file)
      );
      const IdProof = await Promise.all(IdProofPromises);
      if (IdProof) {
        addressFileUrl = IdProof;
      }
    }

    const Individual = {
      tagline: data.tagline,
      bio: data.bio,
    };

    const company = {
      tagline: data.tagline,
      companyHistory: data.companyHistory,
    };
    try {
      if (iam) {
        const response = await updateRegiterProfile(
          params.userId,
          Individual,
          false,
          selectedImage,
          identityFileUrl,
          addressFileUrl
        );
        if (response) {
          toast.success("Profile created successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsSubmitting(false);
          router.push(`/register/addService/${params.userId}`);
        } else {
          toast.error("Falied to create profile, try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsSubmitting(false);
        }
      } else {
        const response = await updateRegiterProfile(
          params.userId,
          false,
          company,
          selectedImage,
          identityFileUrl,
          addressFileUrl
        );
        if (response) {
          toast.success("Profile created successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsSubmitting(false);
          router.push(`/register/addService/${params.userId}`);
        } else {
          toast.error("Falied to create profile, try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsSubmitting(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetch() {
      if (params.userId) {
        const response = await getUserIdentity(params.userId);
        if (response) {
          setSelectedImage(response.profileUrl);
          setValue("screenName", response.ScreenName);
        }
      }
    }
    fetch();
  }, []);

  return (
    <div className="container mx-auto px-3 lg:px-64 min-h-[90vh] flex flex-col justify-center items-center gap-5 my-10 ">
      <section className="border rounded flex-1 flex-col">
        <div className="py-2 border-b bg-[#FAFAFA] rounded-t px-4">
          <h1 className="text-base font-semibold">Create your profile</h1>
        </div>
        {/* photo */}
        <div className="px-4">
          <div className="flex flex-col justify-center items-center py-5 mt-5">
            <div className="w-[10rem] h-[10rem]">
              <img
                src={selectedImage || "/images/def_fl_128.avif"}
                alt="default image"
                width={200}
                height={200}
                loading="lazy"
                className="border h-full w-full rounded-lg object-cover drop-shadow-lg p-2"
              />
            </div>
            <div className="pt-2">
              <label className="bg-[#4FBFA3] text-white px-3 py-1 rounded-md text-sm hover:scale-105 duration-200">
                <span className="cursor-pointer hover:scale-105 duration-200">
                  Change Photo
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>
        {/* end photo */}

        {/* public indentity */}
        <div className="mt-3 ">
          <h2 className="text-base border-b-2 mx-4 py-1">Public Indentity</h2>
          <form
            className="text-sm pt-3 px-5 space-y-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center ">
              <div className="sm:w-1/5 sm:text-right">
                Screen Name <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                {...register("screenName", { required: true, minLength: 5 })}
              />
              {errors.screenName && (
                <p className="text-sm text-red-500">
                  Please enter a valid Name
                </p>
              )}
            </label>
            <div className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center pt-2">
              <div className="sm:w-1/5 sm:text-right">
                I am... <span className="text-red-500">*</span>
              </div>
              <div className="flex-1 flex items-center gap-3">
                <label htmlFor="" className="flex items-center gap-1">
                  <input
                    checked={iam ? true : false}
                    type="radio"
                    name="iam"
                    onChange={() => setIam(true)}
                  />
                  <span>An Individual</span>
                </label>
                <label htmlFor="" className="flex items-center gap-1">
                  <input
                    checked={iam ? false : true}
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
                      id=""
                      cols={30}
                      rows={3}
                      className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                      {...register("tagline")}
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
                      id=""
                      cols={30}
                      rows={3}
                      placeholder="Tell your story! Include information about your work experience, values, personal anecdotes, hobbies, etc."
                      className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                      {...register("bio", { required: true, minLength: 10 })}
                    ></textarea>
                    {errors.bio && (
                      <p className="text-sm text-red-500">
                        Bio should be atleast 10 characters
                      </p>
                    )}
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
                      id=""
                      cols={30}
                      rows={3}
                      className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                      {...register("tagline")}
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
                      id=""
                      cols={30}
                      rows={3}
                      placeholder="Tell your company's story! Include information about the individuals that make up the company, as well as the company itself."
                      className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                      {...register("companyHistory", {
                        required: true,
                        minLength: 10,
                      })}
                    ></textarea>
                    {errors.companyHistory && (
                      <p className="text-sm text-red-500">
                        Company History should be atleast 10 characters
                      </p>
                    )}
                    <div className="text-[11px] text-gray-500">
                      3000 characters left
                    </div>
                  </div>
                </label>
                {/* <label className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center ">
                  <div className="sm:w-1/5 sm:text-right">Operating since</div>
                  <input
                    type="text"
                    className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
                    {...register("since")}
                  />
                </label> */}
                {/* <label className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center ">
                  <div className="sm:w-1/5 sm:text-right">
                    Featured Team Members
                  </div>

                  <div>
                    <div className="w-[10rem] h-[10rem]">
                      <Image
                        src={
                          selectedTeamImage ||
                          "https://placehold.co/400x400.png"
                        }
                        alt="default image"
                        width={200}
                        height={200}
                        loading="lazy"
                        className="border h-full w-full rounded-lg object-cover drop-shadow-lg p-2"
                      />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3] hidden"
                      onChange={teamImageChange}
                    />
                  </div>
                </label> */}
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
                      {uploadDocument.length === 0 && (
                        <CiCirclePlus className="absolute top-0 right-0 scale-75" />
                      )}
                      {uploadDocument.length > 0 && (
                        <GoDotFill
                          className="absolute -top-1 -right-1 scale-75 "
                          size={20}
                        />
                      )}
                    </div>
                    <div className="text-xs text-gray-400 pt-1">
                      <input
                        type="file"
                        name="uploadDocument"
                        id="uploadDocument"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      Upload ID: International passport, Driver’s license, or
                      National Identity Card.
                    </div>
                  </label>
                  {uploadDocument.map((fileName, i) => (
                    <div className="mt-3" key={i}>
                      <div className="text-xs flex items-center gap-1 bg-gray-300 rounded-md px-2 py-1 w-fit">
                        <div>{fileName}</div>
                        <div
                          onClick={() => handleDeleteFile(fileName)}
                          className="bg-red-600 text-white rounded-full w-fit p-0.5 hover:scale-105 duration-200 cursor-pointer"
                        >
                          <IoCloseSharp />
                        </div>
                      </div>
                    </div>
                  ))}
                  {identityError && (
                    <p className="text-red-400">{identityError}</p>
                  )}
                </div>
              </div>
            </label>

            <label className="font-[500] flex flex-col sm:flex-row sm:gap-3 sm:items-center pt-4">
              <div className="sm:w-1/5 sm:text-right">
                Verify Your Address <span className="text-red-500">*</span>
              </div>
              <div className="flex-1">
                <div className="pt-3 flex flex-col items-start">
                  <label
                    htmlFor="uploadDocument2"
                    className="flex flex-col items-start cursor-pointer"
                  >
                    <div className="text-[#4FBFA3] border rounded-full p-4 w-fit relative hover:scale-105 duration-200">
                      <FaRegAddressBook className="scale-150" />
                      {uploadDocument2.length === 0 && (
                        <CiCirclePlus className="absolute top-0 right-0 scale-75" />
                      )}
                      {uploadDocument2.length > 0 && (
                        <GoDotFill
                          className="absolute -top-1 -right-1 scale-75 "
                          size={20}
                        />
                      )}
                    </div>
                    <div className="text-xs text-gray-400 pt-1">
                      Upload proof of address: Utility bill.
                    </div>
                    <div>
                      <input
                        type="file"
                        name="uploadDocument2"
                        id="uploadDocument2"
                        className="hidden"
                        onChange={handleFileChange2}
                      />
                    </div>
                  </label>
                  {uploadDocument2.map((fileName, i) => (
                    <div className="mt-3" key={i}>
                      <div className="text-xs flex items-center gap-1 bg-gray-300 rounded-md px-2 py-1 w-fit">
                        <div>{fileName}</div>
                        <div
                          onClick={() => handleDeleteFile2(fileName)}
                          className="bg-red-600 text-white rounded-full w-fit p-0.5 hover:scale-105 duration-200 cursor-pointer"
                        >
                          <IoCloseSharp />
                        </div>
                      </div>
                    </div>
                  ))}
                  {addressError && (
                    <p className="text-red-400">{addressError}</p>
                  )}
                </div>
              </div>
            </label>

            <div className="font-[500] flex flex-col sm:flex-row gap-3 sm:items-center pb-10 pt-5">
              <div className="w-1/5" />
              <div className="flex-1">
                <Button disabled={isSubmitting ? true : false}>
                  {isSubmitting ? (
                    <div className="animate-spin">
                      <VscLoading size={25} />
                    </div>
                  ) : (
                    "Save"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
        {/* end public indentity */}
      </section>
    </div>
  );
}
