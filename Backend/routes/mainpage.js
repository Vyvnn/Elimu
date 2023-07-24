const express = require('express');
const router = express.Router();
const bcryptjs =require('bcryptjs');
const Parent=require('../models/parent');
const parentController = require('../controllers/parentController');
const studentController = require('../controllers/studentController');
const teacherController = require('../controllers/teacherController');

// Routes for the parent
// router.post('/parent/signin', function (req, res) {
//   parentController.parentSignIn
// });
router.get('/parent/details', function (req, res) { parentController.getParentDetails });

// routes/parentRoutes.js
// ... (above code)

router.post('/parent/signin', async (req, res) => {
  const { parentName, password } = req.body;
  console.log(parentName)
 
  

  try {
    // Find the parent by name in the database
    const parent = await Parent.findOne({ parentName });

    if (!parent) {
      return res.status(404).json({ message: 'Parent not found' });
    }

    // Compare the entered password with the hashed password in the database
    const passwordMatch = await bcryptjs.compare(password, parent.encry_password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Parent signin successful, you can generate a JWT token or use session management here
    res.status(200).json({ message: 'Parent signin successful' });
  } catch (error) {
    console.error('Error during parent signin:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// // routes/parentRoutes.js
// // ... (above code)

router.post('/parent/register', async (req, res) => {
  const { parentName, email, password,student_Id} = req.body;
 
 
  try {
    // Check if the parent with the provided email already exists
    const existingParent = await Parent.findOne({ email: email });
    console.log(existingParent)
    if (existingParent) {
      return res.status(400).json({ message: 'Parent with this email already exists' });
    }

    // Create a new Parent document
    const parent = new Parent( req.body);
    console.log(parent)
    // Save the parent to the database
    await parent.save();

    res.status(201).json({ message: 'Parent registration successful' });
  } catch (error) {
    console.error('Error during parent registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




// Routes for the student

router.post('/signin', function (req, res) {
  
  studentController.studentSignIn
});

router.get('/page', function (req, res) { studentController.getStudentPage });


router.post('/grade-remark', function (req, res) {
  studentController.getGradeAndRemark
});



// Routes for the teacher



router.post('/register', function (req, res) {
  teacherController.registerTeacher
});
router.get('/page', function (req, res) { teacherController.getTeacherPage });
router.get('/students', function (req, res) { teacherController.getAllStudents });
router.put('/students/:studentId', teacherController.updateGradeAndRemark);

module.exports = router;


