"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import { IoMdImages } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { VscLoading, VscTools } from "react-icons/vsc";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/button/Button";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "@/lib/firebase";
import { addNewService } from "@/lib/http/controller/userController";
import { toast } from "react-toastify";

const CustomEditor = dynamic(
  () => {
    return import("./Editor");
  },
  { ssr: false }
);

export default function AddServiceDedicatedResource() {
  const [thumbnail, setThumbnail] = useState<any>(null);
  const [thumbnailFile, setThumbnailFile] = useState<any>(null);
  const [editorValue, setEditorValue] = useState<any>("");
  // const [selectCategory, setSelectCategory] = useState<string | null>(null);
  const [title,setTitle] = useState('')
  const [rateHr,setRateHr] = useState('')
  const [rateWeek,setRateweek] = useState('')
  const [allchecked, setAllChecked] = useState<string[]>([]);
  const [enterredDesc,setEnteredDesc] = useState('')
  const [errorTitle,setErrorTitle] = useState<boolean | string>(false)
  const [errorDesc,setErrorDesc] = useState<boolean | string>(false)
  const [isSubmitting,setIsSubmitting] = useState(false)
 
  const router = useRouter();
  const getUrl = usePathname();
  const path = getUrl.split("/")[3];
  

  async function serviceThumbnailToStorage(file: any) {
    const storageRef = ref(storage, `serviceThumbnail/${file.name + v4()}`);
    const response = await uploadBytes(storageRef, file);
    const snapshot = response.ref;
    const getProfileURL = await getDownloadURL(snapshot);
    if (getProfileURL) {
      if (response) {
        return getProfileURL;
      }
    }
  }

   function handleChange(e:any) {
      if (e.target.checked) {
         setAllChecked([...allchecked, e.target.value]);
      } else {
         setAllChecked(allchecked.filter((item) => item !== e.target.value));
      }
   }


  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader() as any;
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
      setThumbnailFile(file)
    }
  };

  function getDescrption(desc:string){
    setEnteredDesc(desc);
    
  }
  
  const submitHander = async(event: any) =>{
    let thumbnailUrl 
    event.preventDefault();
    setIsSubmitting(true)

    if(!title){
      setErrorTitle("Please enter a Title");
      setIsSubmitting(false)
      return
    }
    if(!enterredDesc){
      setErrorDesc("Please enter some Description");
      setIsSubmitting(false)
      return
    }
    if(thumbnailFile){
      thumbnailUrl = await serviceThumbnailToStorage(thumbnailFile)
    }

    try{
      const response = await addNewService(path,title,enterredDesc,rateHr,rateWeek,thumbnailUrl)
      if(response){
        toast.success("New Service created successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsSubmitting(false)
        router.push(`/register/addPayment/${path}`)
      }
    }catch(error){
      setIsSubmitting(false)
      toast.error("Failed to add service,try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }


  return (
    <form className="container mx-auto py-10 px-3 md:px-20 lg:px-60" onSubmit={submitHander}>
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
              onChange={(e)=>setTitle(e.target.value)}
            />
            {errorTitle && <p className="text-red-400">{errorTitle}</p>}
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
              <CustomEditor initialData={editorValue} getValue={getDescrption}/>
              {errorDesc&&<p className="text-red-400">{errorDesc}</p>}
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
                      <input type="checkbox" onChange={handleChange} value={"Interior design/Architecture"}/>
                      <div>Interior designer/Architect</div>
                    </label>
                  )}
                  {selectCategory === "Logistics and Supply-chain" && (
                    <div className="space-y-2">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" onChange={handleChange} value={"Logistic consultant"}/>
                        <div>Logistic consultant</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" onChange={handleChange} value={"Supply Chain consultant"}/>
                        <div>Supply Chain consultant</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" onChange={handleChange} value={"Procurement consultant"}/>
                        <div>Procurement consultant</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" onChange={handleChange} value={"Freight forwarding agent"}/>
                        <div>Freight forwarding agent</div>
                      </label>
                    </div>
                  )}
                  {selectCategory === "Sales marketing" && (
                    <div className="space-y-2">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" onChange={handleChange} value={"Digital marketing"}/>
                        <div>Digital marketing</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" onChange={handleChange} value={"Lead generation"}/>
                        <div>Lead generation</div>
                      </label>
                    </div>
                  )}
                  {selectCategory === "Human Resources" && (
                    <div className="space-y-2">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" onChange={handleChange} value={"Recruiter"}/>
                        <div>Recruiter</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" onChange={handleChange} value={"HR consultant"}/>
                        <div>HR consultant</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" onChange={handleChange} value={"Payroll administrator"}/>
                        <div>Payroll administrator</div>
                      </label>
                    </div>
                  )}
                  {selectCategory === "Administrative & Operations" && (
                    <div className="space-y-2">
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" onChange={handleChange} value={"Virtual Assistant"}/>
                        <div>Virtual Assistant</div>
                      </label>
                      <label className="flex items-center gap-1 text-gray-500">
                        <input type="checkbox" onChange={handleChange} value={"Business consultant"}/>
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
                  onChange={(e)=>setRateHr(e.target.value)}
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
                  onChange={(e)=>setRateweek(e.target.value)}
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
                onChange={handleImageChange}
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
    </form>
  );
}
