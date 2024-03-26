import AddPayment from '@/components/AddPayment'
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
      userid: data._id
    }))
  }
}

export default function page({params}:any) {
  return (
    <AddPayment params={params}/>
  )
}
