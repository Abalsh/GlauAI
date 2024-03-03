import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: String,
    ID: String,
    address: String,
    Room: String,
    department: String,
    password: String,
    userType: String
})

const doctorModel = mongoose.model("doctors", doctorSchema)

export default doctorModel;