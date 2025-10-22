import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import DB from "mongodb.js"
import cookieParser from "cookie-parser"

// import all routes
import router from "./routes/user.routes.js"
import { registerUser,verifyUser } from "./controller/user.controller"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
// connecting to db
DB()

// user routes
app.use("/api/v1/users", userRoutes)


app.use(cors({ //used so frontend and backend can communicate
    origin: "https://localhost/3000",
    methods:['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json) // to tell backend that we accept json
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.listen(PORT)