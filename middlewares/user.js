const {User} = require('../db/index.js');

// middleWare For A Admins : 
    /*
        Implement admin authentication logic
        You need To check the headers and validate the admin from the admin Db
        Check readme for the  exact headers to be  expected
    */

    function UserMiddlewares(req,res,next){ //  
        const username = req.headers.username;
        const password = req.headers.password;

         User.findOne({
            username:username,
            password:password
        })
        .then((value) => {
            if(value){
                next();
            }else{
                res.status(404).json({
                    msg:"User Does not Exists"
                })
            }
        })


    }

    module.exports = UserMiddlewares;   // exporting module