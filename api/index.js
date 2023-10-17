const express= require('express');
const app=express();
const dotenv= require("dotenv");
const mongoose = require("mongoose");
const multer= require("multer");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catogoryRoute = require("./routes/catogories");
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  }).then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log("Error connecting to MongoDB"));

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },
    filename:(req,file,cb)=>{
        cb(null,"hello.jpg")
    } 
});



const upload= multer({storage:storage});

app.post("/api/upload", upload.single("file"),(req,res)=>{
res.status(200).json("File has been uploaded")});


 app.use("/api/auth",authRoute);
 app.use("/api/users",userRoute);
 app.use("/api/posts",postRoute);
 app.use("/api/catogories",catogoryRoute);

 app.listen("5000", () => {
   
    console.log("Backend is running");
  });
  

