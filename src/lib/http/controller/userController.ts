"use server";
import bcrypt from "bcrypt";
import { connectDB } from "../connectDB";
import User, { user } from "../model/user";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import UserRegistor from "../model/userRegister";
import Services from "../model/services";

type userRegistor = {
  profileUrl: string;
  ScreenName: string;
  address: string;
  country: string;
  street: string;
  city: string;
  state: string;
  postalCode: number;
  neigborhood: string;
  user: string;
};

export const addNewUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    await connectDB();
    mongoose.model("User", User.schema);
    // Client required he needs to se the passwords of users

    // const hashedPassword = await bcrypt.hash(password, 12);
    // password = hashedPassword;
    const isFound = await User.findOne({ email: email });
    if (isFound) {
      return false;
    }
    const newUser = new User({
      fullName: name,
      email: email,
      password: password,
    });
    const result = await newUser.save();
    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (email: string, password: string) => {
  try {
    await connectDB();
    const userInfo = await User.findOne({ email: email });
    if (userInfo) {
      if (userInfo.password === password) {
        const token = jwt.sign({ userId: userInfo._id }, "secret", {
          expiresIn: "2h",
        });
        const filter = JSON.stringify(userInfo._id);
        const req = {
          id: filter,
          token: token,
        };
        return req;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const addUserIdentity = async (userInfo: userRegistor) => {
  try {
    await connectDB();
    const registerUserInfo = new UserRegistor(userInfo);
    await registerUserInfo.save();
    if (registerUserInfo) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserIdentity = async (id: string) => {
  try {
    await connectDB();
    const userInfo = await UserRegistor.findOne({ user: id });
    if (userInfo) {
      const filter = JSON.stringify(userInfo);
      return filter;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateRegiterProfile = async (
  id: string,
  individual: object | boolean,
  company: object | boolean,
  profileUrl: string
) => {
  try {
    await connectDB();
    mongoose.model("UserRegistor", UserRegistor.schema);
    if (individual) {
      const userInfo = await UserRegistor.findOneAndUpdate(
        { user: id },
        {
          profileUrl: profileUrl,
          individual: individual,
        }
      );
      if (userInfo) {
        return true;
      }
    }
    if (company) {
      const userInfo = await UserRegistor.findOneAndUpdate(
        { user: id },
        {
          profileUrl: profileUrl,
          company: company,
        }
      );
      if (userInfo) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const addNewService = async (
  userId: string,
  Title: string,
  description: string,
  rateHr: string,
  rateWeek: string,
  thumbnailUrl: string | undefined,
) => {
  try {
    await connectDB();

    const user = await UserRegistor.findOne({ user: userId });
    if (user) {
      const newService = new Services({
        Title,
        description,
        rateHr,
        rateWeek,
        thumbnailUrl,
        user: user._id,
      });
      await newService.save()
      if (newService) {
        const userInfo = await UserRegistor.findOneAndUpdate(
          { user: userId },
          {
            $push: { services: newService._id },
          }
        );

        if (userInfo) {
          console.log("new service added to register");
          return true
        }
      }
    }else{
      return false
    }
  } catch (error) {
    console.log(error);
  }
};
