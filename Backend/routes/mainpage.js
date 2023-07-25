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
// ... (above code)

router.post("/parent/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  try {
    // Find the parent by email in the database
    const parent = await Parent.findOne({ email: email });

    if (!parent) {
      return res.status(404).json({ message: "Parent not found" });
    }

    // Compare the entered password with the hashed password in the database
    // const passwordMatch = await bcryptjs.compare(password, parent.password);

    if (!password === parent.password) {
      return res.status(401).json({ message: "Invalid password" });
    } else if (password === parent.password) {
      // Parent signin successful, you can generate a JWT token or use session management here 
     const token = generateToken(parent._id)

      res.status(200).json({ message: "Parent signin successful", token });
      console.log(token)
    }
  

  } catch (error) {
    console.error("Error during parent signin:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// // routes/parentRoutes.js
// // ... (above code)

router.post("/parent/register", async (req, res) => {
  const { parentName, email, password, student_Id } = req.body;

  try {
    // Check if the parent with the provided email already exists
    const existingParent = await Parent.findOne({ email: email });
    console.log(existingParent);
    if (existingParent) {
      return res
        .status(400)
        .json({ message: "Parent with this email already exists" });
    }
    // const salt = await bcryptjs.genSalt(10);
    // const hashPass=await bcryptjs.hash(password,salt);

    // Create a new Parent document
    const parent = new Parent({
      password: password,
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

    // Check if the student exists and the password matches
    if (!existingStudent || existingStudent.password !== password) {
     throw Error ("Invalid login credentials");
    }

    // Student authentication successful
    // You can set the student as authenticated here if needed
    const token = generateToken(existingStudent._id)

    res.status(200).json({ message: "Student signin successful", token });
    console.log(token)

  } catch(error){
    res.status(400).json({error: error.message})

  }
});

router.get("/page", function (req, res) {
  studentController.getStudentPage;
});

router.post("/grade-remark", function (req, res) {
  studentController.getGradeAndRemark;
});

router.post("/student/register", async (req, res) => {
  const { studentName, grade, password, studentNo } = req.body;

  try {
    // Check if the student with the provided email already exists
    const existingStudent = await Student.findOne({ studentNo: studentNo });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    // Create a new Student document
    const student = new Student({
      studentName,
      grade,
      password,
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

  try {
    // Check if the teacher with the provided email already exists
    const existingTeacher = await Teacher.findOne({ TSc_No });
    if (existingTeacher) {
      return res.status(400).json({ message: "Teacher already exists" });
    }

    // Create a new Student document
    const teacher = new Teacher({
      name,
      email,
      subjectsTaught,
      TSc_No,
      password,
    });

    console.log(teacher);
    // Save the student to the database
    await teacher.save();

    res.status(201).json({ message: "Teacher registration successful" });
  } catch (error) {
    console.error("Error during teacher registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/teacher/signin", async (req, res) => {
  const { Tsc_No, password } = req.body;

  try {
    // Find the teacher with the provided Tsc No
    const existingTeacher = await Teacher.findOne({ Tsc_No: Tsc_No });

    // Check if the teacher exists and the password matches
    if (!existingTeacher || existingTeacher.password !== password) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }

    // Teacher authentication successful
    // You can set the teacher as authenticated here if needed
    const token = generateToken(student._id)

    res.status(200).json({ message: "Teacher signin successful", token });
    console.log(token)

   
  } catch (error) {
    console.error("Error during teacher  signin:", error);
    res.status(500).json({ message: "Internal Server Error" });
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
