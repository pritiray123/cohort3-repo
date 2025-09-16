const express = require('express');
const app = express();

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET= "billubadmosh"
app.use(express.json());
const {userrouter} = require("./user.js");
const { courserouter } = require("./course.js");
const {adminrouter} = require('./admin.js');


// const{usermodel}=require("./db.js")
// const{adminmodel}=require("./db.js")
// const{coursemodel}=require("./db.js")
// const{prcmodel}=require("./db.js")


app.use("/api/v1/user",userrouter);
app.use("/api/v1/course",courserouter);
app.use("/api/v1/course",adminrouter);


async function connect() {
   await  mongoose.connect("mongodb+srv://nede1:bUm2lSyZNIhKC0gj@cluster0.mssdpea.mongodb.net/courseapp")
    app.listen(3000);
    console.log("listening");
}

connect();