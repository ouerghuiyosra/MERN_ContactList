const express =require("express")
const router =express.Router();
//controller
const {Register,Login} = require("../Controllers/user.controllers")
//middlware
const isAuth = require('../Middlewmare/isAuth')
//vaidator
const {validation,registerValidate,loginValidate}
 = require ("../Middlewmare/validation/Validator")
/*
@method: POST
@ path:http:localhost:5000/api/user/register
@ parameter: req.body  
public
*/
router.post('/register', registerValidate() ,validation ,  Register);

/*
@method: POST
@ path:http:localhost:5000/api/user/login
@ parameter: req.body  
public
*/

router.post('/login',loginValidate(), validation, Login);
/*
@method: GET
@ path:http:localhost:5000/api/user/current
@ parameter: req.headers  
public
*/


router.get('/current',isAuth,(req,res)=>{
    res.send({msg:"authorized",user:req.user})
})

module.exports=router