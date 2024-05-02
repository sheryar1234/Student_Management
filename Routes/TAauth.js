import bcrypt from "bcrypt";
import mongoose from "mongoose";
// import { admin } from "../models/Admin.js";
import express from "express";
import { TA } from "../models/TA.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existing = await TA.findOne({ email });
    if (existing) {
      return res.json({ success: false, message: "Email Already Exist" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const newTA = new TA({
      username,
      email,
      password: hashedpassword,
    });
    await newTA.save();
    return res.json({ success: true, message: "Registered" });
  } catch (err) {
    return res.json(err);
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const existingUser = await TA.findOne({ email });
    if (!existingUser) {
      return res.json({ success: false, message: "User does not exist" });
    }

    // Check if the provided password matches the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    // If email and password are correct, return success and any additional user data needed for the frontend
    return res.json({ success: true, message: "Login successful", user: existingUser });
  } catch (err) {
    // Handle any errors
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});


router.post("/create", async (req, res) => {
    try {
      const student = new TA(req.body);
      await student.save();
      res.send(student);
    } catch (error) {
      res.status(400).send(error);
    }
  });


router.put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { username, email, password } = req.body;
      // Update the TA
      await TA.findByIdAndUpdate(id, { username, email, password });
      return res.json({ success: true, message: "TA updated successfully" });
    } catch (err) {
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  });
  
  // Delete a TA
  router.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      // Delete the TA
      await TA.findByIdAndDelete(id);
      return res.json({ success: true, message: "TA deleted successfully" });
    } catch (err) {
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

export { router as TArouter };
