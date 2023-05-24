import  Jwt  from "jsonwebtoken";
import User from "../model/userScema.js";
let Secretkey = process.env.JWT_SECRET

// jwt sign=====
export const sign = async(req, res, next) => {
    try {
        // check if user is already exist or not
        let data = req.body;
        let user = await User.findOne(data);
        if (!user) {
            return res.status(406).json({message:"user not exist"})
        }
        // sign and making a token;
        let tokens= Jwt.sign({ userId: user._id.toString(), org: "functionUp" }, Secretkey);
        res.setHeader("x-auth-token", tokens);
        req.userId=user._id.toString();
        next();
    } catch (error) {
        res.status(502).json({ message: "server error" });
    }
}





// for the authorization part middleware==
export const auth = (req,res,next) => {
    try {
        let token = req.headers.token;
        if (!token) {
            return res.status(401).json({ message: "please provide a token" });
        }
        let verfiytoken = Jwt.verfiytoken(token, Secretkey);
        if (!verfiytoken) {
        res.status(402).json({ message: "token is wrong" });
    }    
        req.body.token = verfiytoken;
        next();
   } catch (error) {
        res.status(502).json({ message: "server error" });
   } 
}

