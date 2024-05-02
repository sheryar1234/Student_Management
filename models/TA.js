import mongoose from "mongoose";

const TASchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  course: { type: String },
});
const TAModel = mongoose.model("TA", TASchema);
export { TAModel as TA };
