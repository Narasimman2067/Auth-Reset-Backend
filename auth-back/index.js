import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import signUpRoute from "./routes/SignUpRoute.js";
import loginRoute from "./routes/loginRoute.js";
import  ResetRoutes  from "./routes/passwordReset.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/signUp",signUpRoute);
app.use("/logIn",loginRoute);
app.use("/reset",ResetRoutes);

app.get("/",(req,res)=>{
  res.send("Welcome and Reset yoiur Password")
})



const PORT = process.env.PORT;

// database connection

mongoose.connect(process.env.DATABASE);
try {
  if (mongoose.connect) {
    console.log("mongoose connected succesfully");
  } else {
    console.log("mongooose is not connected");
  }
} catch (error) {
  console.log("mongoose disconnected", error);
}



// app.get("/",(req,res)=>{
//   res.send({message:"mongodb and server running successfully"})
// });
app.listen(PORT, () => {
  console.log(`${PORT} is connected succesfully`);
});
