import mongoose, { Schema } from "mongoose";
import {userRegistor} from "./userRegister";

export interface service extends mongoose.Document{
    Title: string;
    description: string;
    rateHr: string;
    rateWeek: string;
    thumbnailUrl: string;
    user: userRegistor;
}

export const UserSchema = new mongoose.Schema<service>({
    Title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    rateHr:{
        type: String,
        default:null
    },
    rateWeek:{
        type: String,
        default:null
    },
    thumbnailUrl:{
        type: String,
        default:null
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "UserRegistor",
      },
})

export default mongoose.models.Services || mongoose.model<service>("Services", UserSchema);