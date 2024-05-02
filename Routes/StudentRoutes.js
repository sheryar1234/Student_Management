import express from "express";
import Student from "../models/Student.js";


const router = express.Router();

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create a new student
router.post("/create", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a student by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a student by ID
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

export  { router as StudentRoutes };