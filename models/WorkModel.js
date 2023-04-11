const mongoose = require('mongoose');



const workSchema = new mongoose.Schema({
 
  title: { type: String, required: true },
  company_name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  start_month:{type: String, required: true},
  end_month:{type: String, required: true},
  end_year:{type: String, required: true},
  job_summary:{type: String, required: true},
  skills: { type: [String], required: true },
  currently_working: { type: Boolean, required: true }

});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;