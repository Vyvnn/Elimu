const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const Parent = require("../models/parent");
const Student = require("../models/student");
const Teacher = require("../models/teacher");
const subject = require("../models/student");
const parentController = require("../controllers/parentController");
const studentController = require("../controllers/studentController");
const teacherController = require("../controllers/teacherController");

const generateToken = (_id) => {
  return jwt.sign({ _id }, "processenvJWTPRIVATEKEY", { expiresIn: "3d" });
};

// Routes for the parent
// router.post('/parent/signin', function (req, res) {
//   parentController.parentSignIn
// });


router.get("/parent/details", function (req, res) {
  parentController.getParentDetails;
});

// routes/parentRoutes.js


router.post("/parent/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  console.log("Request body:", req.body);
  try {

    if (!email || !password){
      throw Error("All fields must be filled")
    } 
    // Find the parent by email in the database

    const existingParent = await Parent.findOne({ email: email });
    console.log('existingParent'+ existingParent);

    const passMatch= await bcryptjs.compare(password, existingParent.password)

    // Check if the student exists and the password matches
    if (!existingParent || !passMatch) {
      throw Error("Invalid login credentials");
    }
    // Parent signin successful, you can generate a JWT token or use session management here
    const responseObj = {
      message: "Parent signin successful",
      token: generateToken(existingParent._id),
     // Add the student's name to the response
    };
    console.log("Response Object:", responseObj);
    res.status(200).json({responseObj,existingParent}); // Send the response object as JSON
   
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// // routes/parentRoutes.js


router.post("/parent/register", async (req, res) => {
  const { parentName, email, password, student_Id } = req.body;

  try {
    //fill all fields
    if (!parentName || !password || !email || !student_Id){
      throw Error("All fields must be filled")
    } 
   
    // Check if the parent with the provided email already exists
    const existingParent = await Parent.findOne({ email: email });
    console.log(existingParent);
    if (existingParent) {
      return res
        .status(400)
        .json({ message: "Parent with this email already exists" });
    }
    // if (!validator.isStrongPassword(password)){
    //   throw Error("That password is too weak")
    //   }
    const salt = await bcryptjs.genSalt(10);
    const hashPass=await bcryptjs.hash(password,salt);

    // Create a new Parent document
    const parent = new Parent({
      password: hashPass,
      parentName: parentName,
      email: email,
      student_Id: student_Id,
    });
    console.log(parent);
    // Save the parent to the database
    await parent.save();

    res.status(201).json({ message: "Parent registration successful" });
  } catch (error) {
    console.error("Error during parent registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Routes for the student

router.post("/student/signin", async (req, res) => {
  const { studentNo, password } = req.body;

  try {

    // Find the student with the provided studentName
    const existingStudent = await Student.findOne({ studentNo: studentNo });

const passMatch= await bcryptjs.compare(password, existingStudent.password)
    // Check if the student exists and the password matches
    if (!passMatch) {
      throw Error("Invalid login credentials");
    }

    // Student authentication successful

    const responseObj = {
      message: "Student signin successful",
      token: generateToken(existingStudent._id),
      existingStudent
     // Add the student's name to the response
    };
    console.log("Response Object:", responseObj);
    res.status(200).json({responseObj,existingStudent}); // Send the response object as JSON
   
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Fetch teacher data route
router.post("/fetch-teacher-data", async (req, res) => {
  const { studentName, studentId } = req.body;

  try {
    // Assuming you have a Teacher model with fields like remark, grade, and subject
    const teacherData = await Teacher.findOne({ studentName, studentId });

    if (!teacherData) {
      throw Error("Teacher data not found");
    }

    // Send the teacher data in the response
    res.status(200).json(teacherData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.post("/student/register", async (req, res) => {
  const { studentName, grade, password, studentNo } = req.body;

  try {
    if (!studentName || !password || !studentNo || !grade){
      throw Error("All fields are required")
    } 

    // Check if the student with the provided email already exists
    const existingStudent = await Student.findOne({ studentNo: studentNo });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashPass=await bcryptjs.hash(password,salt);
    // Create a new Student document
    const student = new Student({
      studentName,
      grade,
      password:hashPass,
      studentNo,
    });
    console.log(student);
    // Save the student to the database
    await student.save();

    res.status(201).json({ message: "Student registration successful" });
  } catch (error) {
    console.error("Error during student registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Routes for the teacher


  
router.post("/teacher/register", async (req, res) => {
  const { name, email, subjectsTaught, TSc_No, password } = req.body;
  console.log("Received request body:", req.body);
if (!name || !email || !subjectsTaught || !TSc_No || !password) {
  return res.status(400).json({ message: "All fields are required" });
}
try {
  // Check if the teacher with the provided email already exists
  const existingTeacher = await Teacher.findOne({ TSc_No });
  if (existingTeacher) {
    return res.status(400).json({ message: "Teacher already exists" });
  }

  // Create a new teacher document
  const teacher = new Teacher({
    name,
    email,
    subjectsTaught,
    TSc_No,
    password,
  });

  console.log(teacher);
  
      // Check if any teachers exist in the database
  const teachersCount = await Teacher.countDocuments();
  if (teachersCount === 0) {
    // If no teachers exist, set the first teacher as admin
    teacher.isAdmin = true;
  }

  // Save the teacher to the database
  await teacher.save();

  res.status(201).json({ message: "Teacher registration successful" });
} catch (error) {
  console.error("Error during teacher registration:", error);
  res.status(500).json({ message: "Internal Server Error" });
}
});
router.post("/teacher/signin", async (req, res) => {
  const { TSc_No, password } = req.body;

  try {
    // Find the teacher with the provided Tsc No
    const existingTeacher = await Teacher.findOne({ TSc_No: TSc_No });

    // Check if the teacher exists and the password matches
    if (!existingTeacher || existingTeacher.password !== password) {
      throw Error("Invalid login credentials");
    }

    // Teacher authentication successful
    // You can set the teacher as authenticated here if needed
    const token = generateToken(existingTeacher._id);

    res.status(200).json({ message: "Teacher  signin successful", token });
    console.log(token);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/page", function (req, res) {
  teacherController.getTeacherPage;
});
router.get("/students", function (req, res) {
  teacherController.getAllStudents;
});
router.put("/students/:studentId", teacherController.updateGradeAndRemark);

module.exports = router;
