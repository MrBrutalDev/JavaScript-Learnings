import jwt from "jsonwebtoken"
export const isLoggedIn = async (req, res, next) =>{
    try {
        console.log(req.cookies)
        let token = req.cookies?.token
        
        console.log("token", token? "YES" : "No")

        if(!token){
            console.log("no Token");
            return res.status(401).json({
                status: false,
                message: "Authentication Failed"
        })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded);
        
        req.user = decoded
        next()
    } catch (error) {
        console.log("Authentication Middleware failure")
        res.status(500).json({
            success: false,
            message: "Middleware failure"
        })
        
    }
}