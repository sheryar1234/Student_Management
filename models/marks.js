// course: "",
//     maxMarks: "",
//     minMarks: "",
//     avgMarks: "",


import mongoose from "mongoose";

const MarksSchema = new mongoose.Schema({
  course: { type: String, required: true },
  maxMarks: { type: String, required: true },
  minMarks: { type: String, required: true },
  avgMarks: { type: String, required: true },
});

const Marks = mongoose.model("Marks", MarksSchema);

export default Marks;
