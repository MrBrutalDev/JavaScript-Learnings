import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
 

//custom routes 
import userRouter from "./routes/auth.route"; 

dotenv.config()

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(cookieParser)
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const port = process.env.PORT || 4000


app.get("/", (req, res)=>{
    res.status(200).json({
        success: true,
        message: "app is working"
    })
})

app.use("/api/v1/users", userRouter)

app.listen(port, () => {
    console.log(`Backend is listening at port: ${port}`);
    
})