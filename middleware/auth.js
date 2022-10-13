const jwt = require("jsonwebtoken");
const isAuthenticatedUser = (req,res,next)=>{
    var token = req.headers['authorization'];
    if(!token)
        return res.status(401).send({msg: "",error:true,errormsg:{ 
            "message": 'Please Login to access this resource'
        }});
    // if(token == null) next(new Error('Authentication Failed'));
    var authorization = req.headers.authorization.split(' ')[1],
        decoded;
        decoded = jwt.verify(authorization, process.env.ACCESS_TOKEN_SECRET);
    var userId = decoded.id;
    next();
};

module.exports = isAuthenticatedUser;