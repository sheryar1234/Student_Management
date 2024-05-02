import express from 'express';
import Marks from '../models/marks.js';

const router = express.Router();

// Route to fetch all marks
router.get('/', async (req, res) => {
  try {
    const marks = await Marks.find();
    res.json(marks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new mark
router.post('/upload', async (req, res) => {
  const mark = new Marks({
    course: req.body.course,
    maxMarks: req.body.maxMarks,
    minMarks: req.body.minMarks,
    avgMarks: req.body.avgMarks
  });

  try {
    const newMark = await mark.save();
    res.status(201).json(newMark);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


export default router;
