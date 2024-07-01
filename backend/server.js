const express = require("express");
const routes=require("./Routes/router")
const app = express();

app.use(routes)

app.listen("8081",(req,res)=>{
    console.log("listening")
})