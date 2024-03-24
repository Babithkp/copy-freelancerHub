import mongoose, { Schema } from "mongoose";import { user } from "./user";
import {service} from "./services";
import {card} from "./card";

export interface userRegistor extends mongoose.Document {
  profileUrl: string;
  ScreenName: string;
  address: string;
  country: string;
  street: string;
  city: string;
  state: string;
  postalCode: number;
  neigborhood: string;
  user: user;
  individual: object;
  company: object;
  identityFileUrl:string[]
  addressFileUrl:string[]
  services:service
  card:card
  verifyDoc: object
}

export const UserRegistorSchema = new mongoose.Schema<userRegistor>({
  profileUrl: {
    type: String,
  },
  ScreenName: {
    type: String,
    minlength: [5, "Name cannot be less than 5 characters"],
  },
  address: {
    type: String,
    minlength: [5, "address cannot be less than 5 characters"],
  },
  country: {
    type: String,
    minlength: [5, "country cannot be less than 5 characters"],
  },
  street: {
    type: String,
    minlength: [5, "street cannot be less than 5 characters"],
  },
  city: {
    type: String,
    minlength: [5, "city cannot be less than 5 characters"],
  },
  neigborhood: {
    postalCode: {
      type: Number,
      required: true,
    },
    type: String,
    minlength: [5, "neigborhood cannot be less than 5 characters"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  individual: {
    type: Object,
  },
  company: {
    type: Object,
  },
  verifyDoc: [{
    type: Object,
  }],
  identityFileUrl: [{
    type: String,
  }],
  addressFileUrl: [{
    type: String,
  }],
  services: [{
    type: Schema.Types.ObjectId,
    ref: "Services",
  }],
  card: {
    type: Schema.Types.ObjectId,
    ref: "Card",
  },
});

export default mongoose.models.UserRegistor ||
  mongoose.model<userRegistor>("UserRegistor", UserRegistorSchema);
