import User from "../model/User.model.js"
import crypto from "crypto"
import nodemailer from "nodemailer"
import bcrypt from "bcryptjs"
import cookieParser from "cookie-parser"
const registerUser = async (req, res) => {
    //get user data
    //validate
    //check if user already exists
    //if not then create a user in db
    //generate a token to verify
    // save a copy of token in db that is sent to user
    //send token as email to user
    // user registered succesfully
    const {name, email, password} = req.body
    if(!name || !email || !password){
        return res.status(400).json({
            message: "All Fields Are Required"
        })
    try{
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                message: "User Already Exists"
            })
        }
        const user = await User.create({
            name,
            email,
            password  
            })
        if(!user){
            return res.status(400).json({
            message: "user Not Registered"
            })
        }
        const token = crypto.randomBytes(32).toString("hex")
        user.verificationToken = token

        await user.save()
        //send email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD,
            }
        })
        const mailOption = {
            from: process.env.MAILTRAP_SENDERMAIL,
            to: user.email,
            subject: "Verify Your Email ✔",
            text: `Please Click on the Following Link 
            ${process.env.BASE_URL}/api/v1/users/verify${token}
            ` 
        }
        await transporter.sendMail(mailOption)
        res.status(201).json({
            message: "User registered Succesfully",
            success: true
        })
    }catch(error){
    res.status(400).json({
        message: "User registered Succesfully",
        success: false,
        error
    })}
    }
}

const verifyUser = async (req, res)=>{
    //get token from url
    //validate
    //find user based on token
    // if not
    //set isVerified field to true
    // remove  verificationToken
    //save and return response
    const {token} = req.params
    if(!token){
        res.status(400).json({
            message: "invalid token"
        })
    }
    const user = await User.findOne({verificationToken: token})
    if(!user){
        res.status(400).json({
            message: "invalid token"
        })
    }
    user.isVerified = true
    user.verificationToken = ""
    await user.save()
}

const logInUser = async (req, res)=>{
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message: "all fields are required"
        })
    }
    try {
        const user = await User.findOne(email)
        if(!email){
            return res.status(400).json({
                message: "user doesn't exist"
            })
        }
        const isMatched = await bcrypt.compare(password, user.password)
        if(!isMatched){
            return res.status(400).json({
                message: "Wrong Password"
            })
        }
        const token = jwt.sign(
            {
                id: user._id, role: user.role,},
                "shhhhh", {
                    expiresIn: '24h'
                }
        )
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24*60*60*1000
        }
        res.cookie("token", token, cookieOptions)

        res.status(200).json({
            message: "user logged in succesully",
            token,
            user: {
                id: user._id,
                name: user.name,
                role:user.role
            }
        })

    } catch (error) {
        res.status(400).json({
            message: "login failed"
        })
    }
}

const getProfile = async (req,res)=>{
    try {
        const user = await User.findById(req.user.id).select('-password')
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User doesn't exist"
            })
        }
        res.status(200).json({
            succes: true,
            user
        })
    } catch (error) {
        
    }
}
const logOutUser = async (req,res)=>{
    try {
        res.cookie.token = ""
        res.status(200).json({
            success: true,
            message: "user logged out succefully"
        })
        
    } catch (error) {
        
    }
}
const forgotPassword = async (req,res)=>{
    try {
        //get email
        // find user based on email
        // reset token + reset expiry => Date.now() + 10*60*1000 => user.save()
        // send mail
        
    } catch (error) {
        
    }
}
const resetPassword = async (req,res)=>{
    try {
        // collect token from params
        // password from req.body
        const {token } = req.params
        const {password} = req.body

        const user = await User.findOne({
            passwordResetToken: token,
            resetTokenExpires: {$gt: Date.now()}
        })
        // set password in user
        // resetToken, resetExpiry => reset
        // save
    } catch (error) {
        
    }
}
export {registerUser,
        verifyUser,
        logInUser,
        getProfile,
        forgotPassword,
        resetPassword,
        logOutUser};