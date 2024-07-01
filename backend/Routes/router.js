const {Router} = require("express")
const mongoose = require("mongoose");
const router = Router()


mongoose.connect("mongodb://localhost:27017/Todo")

const UserSchema = new mongoose.Schema({
    name: String,
    email:String,
    age:Number
})

const UserModel = mongoose.model("users",UserSchema)

router.get("/users", async(req,res)=>{
    try{
        const users = await UserModel.find();
        res.json(users)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
})
  

module.exports =router