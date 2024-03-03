import mongoose from "mongoose";

const patiantSchema = new mongoose.Schema({
    name: String,
    id: String,
    address: String,
    department: String,
    doctor: String,
    eyeImage: String
});

const patiantModel = mongoose.model("patiants", patiantSchema);

export default patiantModel;