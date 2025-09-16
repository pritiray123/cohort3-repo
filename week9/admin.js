const {Router}=require("express");

const adminrouter= Router();
const{adminmodel}=require("./db.js")
adminrouter.post("/signup",(req,res)=>{

})

adminrouter.post("/login",(req,res)=>{
    
})

adminrouter.post("/createcourses",(req,res)=>{
    
})

adminrouter.put("/addcoursecontent",(req,res)=>{
    
})

adminrouter.delete("/deletecourse",(req,res)=>{
    
})





module.exports={
    adminrouter:adminrouter
}