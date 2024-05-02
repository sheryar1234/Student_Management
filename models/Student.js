// import mongoose from "mongoose";
// import express from "express";
// import cors from "cors";

// const URL =
//   "mongodb://user1:user1@ac-ahudh1z-shard-00-00.lzkch3r.mongodb.net:27017,ac-ahudh1z-shard-00-01.lzkch3r.mongodb.net:27017,ac-ahudh1z-shard-00-02.lzkch3r.mongodb.net:27017/Student?replicaSet=atlas-1zh0dp-shard-0&ssl=true&authSource=admin";

// const PORT = 5000;
// const app = express();

// app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5173", 
//     credentials: true,
//   })
// );

// mongoose
//   .connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Database Connected");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const StudentSchema = new mongoose.Schema({
//   rollno: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true }, // Changed to String for password
//   grade: { type: String, required: true },
// });

// const Student = mongoose.model("Student", StudentSchema);

// app.get("/", async (req, res) => {
//   try {
//     const student = await Student.find();
//     res.send(student);
//   } catch (error) {
//     res.send(error);
//   }
// });

// app.post("/create", async (req, res) => {
//   try {
//     const student = new Student(req.body);
//     await student.save();
//     res.send(student);
//   } catch (error) {
//     res.send(error);
//   }
// });

// app.delete("/delete/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const student = await Student.findByIdAndDelete(id);
//     if (!student) {
//       return res.send("Student not found");
//     }
//     res.send(student);
//   } catch (error) {
//     res.send(error);
//   }
// });

// app.put("/update/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const student = await Student.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     if (!student) {
//       return res.send("Student not found");
//     }
//     res.send(student);
//   } catch (error) {
//     res.send(error);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  rollno: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  grade: { type: String, required: true },
});

const Student = mongoose.model("Student", StudentSchema);

export default Student;
