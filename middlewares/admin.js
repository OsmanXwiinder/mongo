const {Admin} = require('../db/index.js');

// middleWare For A Admins : 
    /*
        Implement admin authentication logic
        You need To check the headers and validate the admin from the admin Db
        Check readme for the  exact headers to be  expected
    */

    function adminMiddleWare(req,res,next){ //  
        const username = req.headers.username;
        const password = req.headers.password;

         Admin.findOne({
            username:username,
            password:password
        })
        .then((value) => {
            if(value){
                next();
            }else{
                res.status(404).json({
                    msg:"Admin Does not Exists"
                })
            }
        })


    }

    module.exports = (req,res) => {
        console.log("admin MiddleWare Excuted")
        next();
    }   // exporting module