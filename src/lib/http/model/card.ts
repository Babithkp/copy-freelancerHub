import mongoose from "mongoose";

export interface card extends mongoose.Document{
    cardNumber: number;
    type: string;
    expeiry: Date;
    cvc: number;
    address: string;
}

export const UserSchema = new mongoose.Schema<card>({
    cardNumber: {
        type: Number,
        minlength:[16,"Full name cannot be less than 5 characters"]
    },
    type: {
        type: String,
        required: true
    },
    expeiry:{
        type: Date,
        required: true
    },
    cvc:{
        type: Number,
        minlength:[3,"Full cvc cannot be less than 3 characters"]
    },
    address:{
        type: String,
        required: true
    }
})

export default mongoose.models.Card || mongoose.model<card>("Card", UserSchema);