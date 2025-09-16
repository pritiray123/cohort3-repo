const mongoose = require("mongoose");
const Schema= mongoose.Schema;
const ObjectId= mongoose.Types.ObjectId;

const user = new Schema({
    email:{type:String , unique : true},
    name:String,
    password:String
})

const admin = new Schema({
    email:{type:String , unique : true},
    name:String,
    password:String
})

const course = new Schema({
    title:String,
    description:String,
    price:Number,
    img:String,
    creatorid:ObjectId
})

const purchases = new Schema({
    courseid:ObjectId,
    userid:ObjectId
})

const usermodel =mongoose.model("user",user);
const adminmodel =mongoose.model("admin",admin);
const coursemodel =mongoose.model("course",course);
const prcmodel =mongoose.model("purchases",purchases);

module.exports={
    usermodel,
    adminmodel,
    coursemodel,
    prcmodel
}