"use client"
import React, { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "@/lib/firebase";
import { usePathname, useRouter } from "next/navigation";
import { addDocToVerify } from "@/lib/http/controller/userController";
import { toast } from "react-toastify";

export default function VerifyCard() {
  const [toVerifyDoc, setToVerifyDoc] = useState<any>(null);
  const [toVerifyDocFile, setToVerifyDocFile] = useState<any>(null);
  const [toVerifyDocFileError, setToVerifyDocFileError] = useState<any>(null);
  const [codeMatch, setCodeMatch] = useState('');
  const [codeMatchError, setCodeMatchError] = useState(false);
  const[isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const getUrl = usePathname();
  const path = getUrl.split("/")[3];



  async function documentToVerityToStorage(file: any) {
    const storageRef = ref(storage, `DocumentToVerify/${file.name + v4()}`);
    const response = await uploadBytes(storageRef, file);
    const snapshot = response.ref;
    const getProfileURL = await getDownloadURL(snapshot);
    if (getProfileURL) {
      if (response) {
        return getProfileURL;
      }
    }
  }

  const handleFileChange2 = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      setToVerifyDoc(file.name);
      setToVerifyDocFile(file);
    } else {
      setToVerifyDoc("");
    }
  };

  async function submitHandler(event:any){
    event.preventDefault();
    setIsSubmitting(true)
    if(!codeMatch){
      setCodeMatchError(true)
      setIsSubmitting(false)
      return
    }
    if(!toVerifyDoc){
      setToVerifyDocFileError(true)
      setIsSubmitting(false)
      return
    }
    if(codeMatch){
      setCodeMatchError(false)
      if(toVerifyDoc){
        const docUrl = await documentToVerityToStorage(toVerifyDocFile)
        if(docUrl){
          const docInfo={
            code: codeMatch,
            docUrl: docUrl
          }
          try{
            const response = await addDocToVerify(path,docInfo)
            if(response){
              toast.success("Document has been sent for verifications", {
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
              router.push(`/pro/dashboard/${path}`)
            }
          }catch(e){
            setIsSubmitting(false)
            toast.error("Somthing went wrong try again", {
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
      }
    }

  }

  return (
    <section className="container mx-auto px-3 lg:w-1/3 md:w-1/2 lg:py-10 py-5">
      <div className="text-sm pt-2">
        We will charge $1.95 to your card. Enter the 4-digit code that appears next to the charged amount and upload your bank statement to verify your card.
      </div>
      <div className="border border-dashed mt-3">
        <div className="text-xs text-center border-separate py-1">
          Sample card statement
        </div>
        <div className="flex justify-between px-3 border-y text-xs py-1 border-dashed mx-2 mb-3">
          <span>PP*1234 CODE</span>
          <span>-$x,xx</span>
        </div>
      </div>
      <form className="mt-3" onSubmit={submitHandler}>
        <input
          type="text"
          className="border focus:outline-none px-3 py-1.5 w-full rounded-md focus:border-[#4FBFA3]"
          maxLength={4}
          onChange={(e)=>setCodeMatch(e.target.value)}
        />
        {codeMatchError&& <p className="text-red-400 text-sm">Please enter the 4 digit code</p>}
        <div className="pt-3 text-sm">
          <label htmlFor="selectDocumentCard">
            <div className="px-3 py-1.5 border rounded-md ">
            {toVerifyDoc ? (
                    <div className="">
                      <div className="text-xs flex items-center gap-1 bg-gray-300 rounded-md px-2 py-1 w-fit">
                        <div>{toVerifyDoc}</div>
                      </div>
                    </div>
                  ):"Upload documents"}
            </div>
            <input
              type="file"
              className="hidden"
              name="selectDocumentCard"
              id="selectDocumentCard"
              onChange={handleFileChange2}
            />
            {toVerifyDocFileError && <p className="text-red-400 text-sm">Upload documents</p>}
          </label>

        </div>
        <div className="mt-3">
          <button className="bg-[#4FBFA3] text-white cursor-pointer px-4 py-1.5 rounded-3xl w-full" disabled={isSubmitting ? true : false}>
            {isSubmitting ? "Loading...":"Confirm"}
          </button>
        </div>
      </form>
    </section>
  );
}
