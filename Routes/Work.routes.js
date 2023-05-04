const express = require('express');

const Work = require('../models/WorkModel');
const router = express.Router();


// Create a new user info
router.post('/', async (req, res) => {
  try {
    const work = new Work(req.body);
    await work.save();
    res.status(201).send(work);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all user infos
router.get('/', async (req, res) => {
  try {
    const work = await Work.find();
    res.send(work);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single user info
router.get('/:id', async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).send();
    }
    res.send(work);
  } catch (error) {
    res.status(500).send(error);
  }
});



router.patch('/:id', async (req, res) => {
  const { first_name, last_name,company_name, city,state,country,start_month,end_month,job_summary,skills,currently_working} =req.body
  const {id}=req.params;

  try {
    const work = await Work.findByIdAndUpdate(


      {_id:id},
      {
         first_name:first_name,
          last_name:last_name, 
          title: title,
    company_name:company_name ,
    city:city,
     state: state,
     country:country,
     start_month:start_month,
    end_month:end_month,
    end_year:end_year,
    job_summary:job_summary,
    skills:skills,
   currently_working:currently_working

          },
             {new:true}

      );
    
    res.send(work);
    
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a user info
router.delete('/:id', async (req, res) => {
  try {
    const work = await Work.findByIdAndDelete(req.params.id);
    if (!work) {
      return res.status(404).send();
    }
    res.send(work);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;