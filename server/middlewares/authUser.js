import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) =>{
    const {token} = req.cookies;

    if(!token){
        return res.json({success: false, message: 'Not Authenticated'});
    }
    try {
      const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
    if(tokenDecode.id){
        req.body.userID = tokenDecode.id;
    }else{
        return res.json({ success: false, message: error.message });
    }
    next();

    } catch (error) {

}

}

export default authUser;