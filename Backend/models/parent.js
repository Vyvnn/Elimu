const mongoose = require('mongoose');
const crypto = require("crypto");

// Parent schema
const parentSchema = new mongoose.Schema({
  parentName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
    unique: true
  },
  encry_password: {
    type: String,
    required: true
  },
  
  student_Id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
}, { timestamps: true });

parentSchema.virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = Math.random().toString(26).slice(2);
    this.encry_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });

parentSchema.methods = {
  authenticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },
  securePassword: function(plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto.createHmac("sha256", this.salt).update(plainpassword).digest('hex');
    } catch (err) {
      return "";
    }
  }
};

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;
