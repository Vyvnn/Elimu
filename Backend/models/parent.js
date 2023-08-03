const mongoose = require("mongoose");
const crypto = require("crypto");


// Parent schema
const parentSchema = new mongoose.Schema(
  {
    parentName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    student_Id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  },
  { timestamps: true }
);







// const saltRounds = 10;

// parentSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     try {
//       const hash = await bcrypt.hash(this.password, saltRounds);
//       this.password = hash;
//     } catch (error) {
//       return next(error);
//     }
//   }
//   next();
// });

// parentSchema.methods.authenticate = async function (plainpassword) {
//   try {
//     return await bcrypt.compare(plainpassword, this.password);
//   } catch (error) {
//     return false;
//   }
// };

// parentSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     try {
//       const hash = await bcrypt.hash(this.password, saltRounds);
//       this.password = hash;
//     } catch (error) {
//       return next(error);
//     }
//   }
//   next();
// });

// parentSchema.methods.authenticate = async function (plainpassword) {
//   try {
//     return await bcrypt.compare(plainpassword, this.password);
//   } catch (error) {
//     return false;
//   }
// };


const Parent = mongoose.model("Parent", parentSchema);

module.exports = Parent;
