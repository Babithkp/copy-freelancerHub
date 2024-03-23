"use client"
import React, { useEffect, useState } from "react";import Button from "../button/Button";
import { getAllUserData } from "@/lib/http/controller/userController";
import { useRouter } from "next/navigation";

interface user{
    _id: string
    fullName: string
    email: string
    password: string
}

export default function AdminContainer() {
    const [user,setUser] = useState<user[]>()
    const router = useRouter()

    function buttonClickHandler(userId:string){
        router.push(`/admin/${userId}`)
    }

    useEffect(()=>{
        async function fetch(){
            const response = await getAllUserData()
            if(response){
                const filter = JSON.parse(response)
                setUser(filter)
                
            }
        }
        fetch()
    },[])
  return (
    <div className="flex justify-center my-10 max-sm:text-[.6rem]">
      <table className="border-collapse w-[80%] max-sm:w-full font-medium">
        <thead>
          <tr>
            <th className="p-2 max-sm:p-1 boder border-2">Name</th>
            <th className="p-2 max-sm:p-1  boder border-2">Email</th>
            <th className="p-2 max-sm:p-1  boder border-2">Password</th>
            <th className="p-2 max-sm:p-1  boder border-2">Data</th>
          </tr>
        </thead>
        <tbody>
            {user?.map(user=>(
                <tr key={user._id}>
                <td className="p-2 max-sm:p-1  boder border-2">{user.fullName}</td>
                <td className="p-2 max-sm:p-1  boder border-2">{user.email}</td>
                <td className="p-2 max-sm:p-1  boder border-2">{user.password}</td>
                <td className="p-2 max-sm:p-1  boder border-2 text-center">
                  <Button onClick={()=>buttonClickHandler(user._id)}>Open</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
