"use server";
import bcrypt from "bcrypt";
import { connectDB } from "../connectDB";
import User,{ user } from "../model/user";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';


export const addNewUser = async (
  name:string, email:string, password:string
  ) => {
    try {
      await connectDB();
      mongoose.model("User", User.schema);
      // Client required he needs to se the passwords of users 

      // const hashedPassword = await bcrypt.hash(password, 12);
      // password = hashedPassword;
      const isFound = await User.findOne({ email: email})
      if (isFound) {
        return false;
      }
      const newUser = new User({
        fullName:name,
        email:email,
        password:password
      });
      const result = await newUser.save();
      if(result){
        return true;
      }else{
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

export const userLogin = async (email:string,password:string)=>{
try{
  await connectDB();
      const userInfo = await User.findOne({ email: email})
      if (userInfo) {
        if(userInfo.password === password){
          const token = jwt.sign({userInfo},"secret",{expiresIn: "2h"});
          localStorage.setItem("token", token);
          localStorage.setItem("userID", userInfo._id);
          return true
        }
      }else{
        return false
      }
}catch (error) {
  console.log(error);
  
}
}