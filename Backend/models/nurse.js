import mongoose from "mongoose";

const nurseSchema = new mongoose.Schema({
    name: String,
    ID: String,
    address: String,
    department: String,
    doctor: String,
    password: String,
    userType: String
})

const nurseModel = mongoose.model("nurses", nurseSchema)

export default nurseModel;