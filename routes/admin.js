const express = require('express')
const {AdminMiddleWare} = require('../middlewares/admin'); // this is imported
const router = express.Router()
const z = require('zod');
const { Admin } = require('../db');

const inputSchema = z.object({
    username:z.string(),
    password:z.string(),
})

router.post('/signup',AdminMiddleWare,(req,res) => {    // i can use Async await syntex;   async
      // admin signup login logic
      const username = req.body.username;
      const password = req.body.password;

      if(!username || !password){
        res.status(400).send("Username & password are Required") 
      }


      const result =  inputSchema.safeParse({username,password})

        if(!result.success){
            res.status(400).json(result.error.errors);
        } 
        Admin.create({ // await
            username:username,
            password:password,
        }).then(() => {
            res.status(200).send("Admin Created Successfully")
        })
        .catch(() => {
            res.status(211).send("Admin not Created ")
        })



})



module.exports = router;
