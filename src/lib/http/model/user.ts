import mongoose from "mongoose";

export interface user extends mongoose.Document{
    fullName: string;
    email: string;
    password: string;
    token: string;
}

export const UserSchema = new mongoose.Schema<user>({
    fullName: {
        type: String,
        minlength:[5,"Full name cannot be less than 5 characters"]
    },
    email: {
        type: String,
        minlength:[5,"email cannot be less than 5 characters"]
    },
    password:{
        type: String,
        minlength:[5,"password cannot be less than 5 characters"]
    },
    token:{
        type: String,
        default: null,
    }
})

export default mongoose.models.User || mongoose.model<user>("User", UserSchema);