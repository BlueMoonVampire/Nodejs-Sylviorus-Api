const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {type:String, required:true, unique:true},
    userid: {type:String, required:true, unique:true},
    reason: {type:String, required:true, unique:true},
    permission: {type:Boolean, default:false}
    }, 
    {timestamps:true}
);

module.exports = mongoose.model("User", UserSchema);
