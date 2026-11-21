const express=require("express")
const cookieParser = require("cookie-parser")
const authRoutes= require("./src/routes/auth.routes.js")
const cors= require("cors")

const app= express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)


app.get("/",(req,res)=>{
    res.send("Your backend is runnong now.")
})
module.exports= app;