const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },

  grade: {
    type: Number,
    default: null, // Set the default value to null
  },

    password: {
    type: String,
    required: true,
  },

  studentNo: {
    type: Number,
    required: true,
  },
  // salt:String,

  //   },{timestamps:true});
  //   studentSchema.virtual("password")
  //   .set(function(epassword){
  //   _password=password
  //   salt= Math.random().toString(26).slice(2)
  //   this.encry_password = this.securePassword(epassword)

  //   })
  //   .get(function(){
  //     return this._epassword

  //   })
  //  studentSchema.methods={
  //     authenticate:function(plainpassword){
  //       return this.securePassword(plainpassword)===this.encry_password
  //     },
  //     securePassword: function(plainpassword){
  //       if(!plainpassword) return"";
  //       try{
  //         return crypto.createHmac("sha256",this.salt).update(plainpassword).digest('hex')
  //       }
  //      catch (err){
  //       return ""
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
