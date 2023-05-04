const express = require('express');

const Education =require("../models/EducationModal")
const router = express.Router();


// Create a new user info
router.post('/', async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).send(education);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all user infos
router.get('/', async (req, res) => {
  try {
    const education = await Education.find();
    res.send(education);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single user info
router.get('/:id', async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) {
      return res.status(404).send();
    }
    res.send(education);
  } catch (error) {
    res.status(500).send(error);
  }
});



router.patch('/:id', async (req, res) => {
    const { SchoolName, CollegeName, University, CourseName, Degree, start_year, end_year, grade, percentage, Remarks, currently_Enrolled } = req.body;
    const { id } = req.params;
  
    try {
      const education = await Education.findByIdAndUpdate(
        { _id: id },
        {
          SchoolName,
          CollegeName,
          University,
          CourseName,
          Degree,
          start_year,
          end_year,
          grade,
          percentage,
          Remarks,
          currently_Enrolled
        },
        { new: true }
      );
  
      res.send(education);
    } catch (error) {
      res.status(400).send(error);
    }
  });

// Delete a user info
router.delete('/:id', async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).send();
    }
    res.send(education);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;