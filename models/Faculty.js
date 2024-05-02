import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});
const facultyModel = mongoose.model("Faculty", FacultySchema);
export { facultyModel as faculty };
