const mongoose = require('mongoose');



const educationSchema = new mongoose.Schema({
 
  SchoolName: { type: String },
  CollegeName: { type: String },
  University: { type: String },
  CourseName: { type: String },
  Degree: { type: String },
  start_year:{type: String},
  end_year:{type: String},
  grade:{type: String},
  percentage:{type: String},
  current_enrolled:{type:String,require:true},
  Remarks: { type: String, required: true }
  
  

});

const Education = mongoose.model('Educt', educationSchema);

module.exports = Education;