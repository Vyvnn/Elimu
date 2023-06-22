// models.js

const mongoose = require('mongoose');

// Parent schema
const parentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Child' }]
});

// Child schema
const childSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  grade: String,
  parents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Parent' }]
});

// Teacher schema
const teacherSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  subjectsTaught: [String],
  teachersremark:[String]
});

// Define the models
const Parent = mongoose.model('Parent', parentSchema);
const Child = mongoose.model('Child', childSchema);
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = { Parent, Child, Teacher };
