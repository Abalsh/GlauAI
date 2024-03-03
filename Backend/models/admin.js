import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    ID: String,
    password: String,
    userType: String
})

const adminModel = mongoose.model("admins", adminSchema);

export default adminModel;