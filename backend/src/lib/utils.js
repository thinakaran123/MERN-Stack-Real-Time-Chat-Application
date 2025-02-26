import jwt from 'jsonwebtoken';
export const generateToken = (userId,res) => {
    //create jwt token using sign method
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'7d'
    })
    //send token in cookie
    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,
        secure:process.env.NODE_ENV!=='development',
        sameSite:'strict'
    })
    return token;
}