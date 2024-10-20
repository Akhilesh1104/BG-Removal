import jwt from 'jsonwebtoken';

//Middleware function to decode jwt token to get ClerkId

const authUser = async (req,res,next) => {
    try {
        const {token} = req.headers;

        if(!token){
        return res.json({ success: false, message: "Not Authorized" });      
        }
        
        const token_decode = jwt.decode(token);
        req.body.clerkId = token_decode.clerkId;
        next();

    } catch (error) {
        console.log(error.message);
        return res.json({ success: false, message: error.message });      
    }
}

export default authUser;