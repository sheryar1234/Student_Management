import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});
const adminModel = mongoose.model("Admin", AdminSchema);
export { adminModel as admin };
