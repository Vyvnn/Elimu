const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name:{type: String, required:true, minlength:3,maxlength:30 },
  email: {type: String,required:true,minlength:3, maxlength:200,unique:true},
 
  subjectsTaught: [String],
  teachersRemark: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  isAdmin:{type:Boolean,default:false},
  encry_password:{
    type:String,
    required:true
      },
      salt:String,
      
      
    },{timestamps:true});
    teacherSchema.virtual("password")
    .set(function(password){
    _password=password
    salt= Math.random().toString(26).slice(2)
    this.encry_password = this.securePassword(password)
    
    
    })
    .get(function(){
      return this._password
    
    })
    teacherSchema.methods={
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


const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
module.exports = mongoose.model('Teacher', teacherSchema);
