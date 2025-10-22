import express from "express"
import { registerUser,
     verifyUser,
      logInUser,
       logOutUser,
       getProfile } from "../controller/user.controller.js"
import { isLoggedIn } from "../middlware/auth.middleware.js"

const router = express.Router()

router.post("/register", registerUser)
router.get("/verify/:token", verifyUser)
router.post("/login", logInUser)
router.post("/profile",isLoggedIn, getProfile)
router.post("/logout",isLoggedIn, logOutUser)
export default router 