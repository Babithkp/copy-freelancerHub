import CompleteYourProfile from '@/components/CompleteYourProfile'
import { getAllUserData } from '@/lib/api/fetch';
import React from 'react'

interface User{
  _id:string
  fullName: string;
  email: string;
  password: string;
  token: string;
}

export async function generateStaticParams(){
  const response = await getAllUserData()
  if(response){
    return response.map((data:User) => ({
      userId: data._id
    }))
  }
}

export default function page({params}:any) {
  return (
    <CompleteYourProfile params={params}/>
  )
}
