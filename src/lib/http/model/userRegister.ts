import mongoose, { Schema } from "mongoose";
import { user } from "./user";

export interface userRegistor extends mongoose.Document{
    profileUrl: string;
    ScreenName: string;
    address: string;
    country: string;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    neigborhood: string;
    user: user
}

export const UserRegistorSchema = new mongoose.Schema<userRegistor>({
    profileUrl: {
        type: String,
    },
    ScreenName: {
        type: String,
        minlength:[5,"Name cannot be less than 5 characters"]
    },
    address:{
        type: String,
        minlength:[5,"address cannot be less than 5 characters"]
    },
    country:{
        type: String,
        minlength:[5,"country cannot be less than 5 characters"]
    },
    street:{
        type: String,
        minlength:[5,"street cannot be less than 5 characters"]
    },
    city:{
        type: String,
        minlength:[5,"city cannot be less than 5 characters"]
    },
    postalCode:{
        type: Number,
        minlength:[5,"postalCode cannot be less than 5 characters"]
    },
    neigborhood:{
        type: String,
        minlength:[5,"neigborhood cannot be less than 5 characters"]
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
      },
})

export default mongoose.models.UserRegistor || mongoose.model<userRegistor>("UserRegistor", UserRegistorSchema);