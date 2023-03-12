const express = require('express');
const router = express.Router();
const UserInfo = require('../models/PersonalModel');

// Create a new user info
router.post('/', async (req, res) => {
  try {
    const userInfo = new UserInfo(req.body);
    await userInfo.save();
    res.status(201).send(userInfo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all user infos
router.get('/', async (req, res) => {
  try {
    const userInfos = await UserInfo.find();
    res.send(userInfos);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single user info
router.get('/:id', async (req, res) => {
  try {
    const userInfo = await UserInfo.findById(req.params.id);
    if (!userInfo) {
      return res.status(404).send();
    }
    res.send(userInfo);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a user info
// router.patch('/:id', async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ['account_id', 'first_name', 'last_name', 'email', 'cell_phone', 'home_phone', 'photo', 'address'];
//   const isValidOperation = updates.every(update => allowedUpdates.includes(update));
//   if (!isValidOperation) {
//     return res.status(400).send({ error: 'Invalid updates!' });
//   }
//   try {
//     const userInfo = await UserInfo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!userInfo) {
//       return res.status(404).send();
//     }
//     res.send(userInfo);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

router.patch('/:id', async (req, res) => {
  const {account_id, first_name, last_name, email, cell_phone, home_phone, photo, address} =req.body
  const {id}=req.params;

  try {
    const userInfo = await UserInfo.findByIdAndUpdate(


      {_id:id},
      {account_id:account_id,
         first_name:first_name,
          last_name:last_name, 
          email:email, 
          cell_phone:cell_phone,
           home_phone:home_phone,
            photo:photo,
             address:address},
             {new:true}

      );
    
    res.send(userInfo);
    
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a user info
router.delete('/:id', async (req, res) => {
  try {
    const userInfo = await UserInfo.findByIdAndDelete(req.params.id);
    if (!userInfo) {
      return res.status(404).send();
    }
    res.send(userInfo);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;