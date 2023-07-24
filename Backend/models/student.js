const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  // studentID: {
  //   type: Number,
  //   required: true
  // },
 
 
  subject: {
    type: String,
    required: true
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher'
  },
  grade: {
    type: Number,
    default: null // Set the default value to null
  },
  remark: {
    type: String,
    default: '' // Set the default value to an empty string
  },
  // encry_password:{
  //   type:String,
  //   required:true
  //     },
      salt:String,
      
      
    },{timestamps:true});
    studentSchema.virtual("password")
    .set(function(password){
    _password=password
    salt= Math.random().toString(26).slice(2)
    this.encry_password = this.securePassword(password)
    
    
    })
    .get(function(){
      return this._password
    
    })
   studentSchema.methods={
      authenticate:function(plainpassword){
        return this.securePassword(plainpassword)===this.encry_password
      },
      securePassword: function(plainpassword){
        if(!plainpassword) return"";
        try{
          return crypto.createHmac("sha256",this.salt).update(plainpassword).digest('hex')
        }
       catch (err){
        return ""
      }
    },
    }


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
