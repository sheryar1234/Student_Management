import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { admin } from "../models/Admin.js";
import express from "express";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existing = await admin.findOne({ email });
    if (existing) {
      return res.json({ success: false, message: "Email Already Exist" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const newadmin = new admin({
      username,
      email,
      password: hashedpassword,
    });
    await newadmin.save();
    return res.json({ success: true, message: "Registered" });
  } catch (err) {
    return res.json(err);
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const existingUser = await admin.findOne({ email });
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

export { router as adminRouter };
