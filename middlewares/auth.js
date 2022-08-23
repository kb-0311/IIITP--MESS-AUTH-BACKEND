const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const User = require("../models/userModel");

exports.isAuthenticatedUser= catchAsyncErrors(async (req, res , next)=> {
    //To convert this middleware in 


    /*
    const { token } = await req.cookies;
    

    if (!token) {
        return await next(new ErrorHandler("please login to access this resource" , 401));
    }

    const decodedData = jwt.verify( `${token}` , process.env.JWT_SECRET)
    req.user = await User.findById(decodedData.id) ;

    next()
    */
})

exports.isAdmin= catchAsyncErrors((...roles) => {
    //LOgic for Admin records

    return (req,res,next)=>{
        if (!roles.includes( req.user.role)) {
           return next(new ErrorHandler(`Role ${req.user.role} is not allowed to access this resource` , 403));
        }
        next();
    }

})