const express = require('express');
const router = express.Router();

const parentController = require('../controllers/parentController');
const studentController = require('../controllers/studentController');
const teacherController = require('../controllers/teacherController');

// Routes for the parent
router.post('/parent/signin', function(req, res){
    parentController.parentSignIn
  });
router.get('/parent/details', function(req,res){parentController.getParentDetails});



// Routes for the student

router.post('/signin', function(req, res){
    studentController.studentSignIn
  });
router.get('/page',function(req,res) {studentController.getStudentPage});


router.post('/grade-remark', function(req, res){
    studentController.getGradeAndRemark
  });



// Routes for the teacher



router.post('/register', function(req, res){
    teacherController.registerTeacher
  });
router.get('/page', function(req,res){teacherController.getTeacherPage});
router.get('/students',function(req,res){ teacherController.getAllStudents});
router.put('/students/:studentId', teacherController.updateGradeAndRemark);

module.exports = router;


