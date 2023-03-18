const mongoose = require('mongoose');



const workSchema = new mongoose.Schema({
 
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
 
  
});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;