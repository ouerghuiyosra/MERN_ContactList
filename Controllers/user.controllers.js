const bcrypt =require('bcrypt')
const saltRounds = 10;
const jwt = require("jsonwebtoken");
//User Model
const User =require('../models/user')


//user Registretion
exports.Register = async (req,res) => {
    const { email, password, name} = req.body;

    try {
     /* if(!email || !password || !name){
          return res.status(400).json({msg:'please enter all fildes'})
      }*/


      //check existing  of  user 
      const findUser = await User.findOne({ email });
      if (findUser) {
        return res
            .status(400)
            .send({msg:"Email already exists" });
    }

  // new user
  const newUser = new User({ ...req.body });
    // Hash password before saving in database
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    newUser.password = hashedpassword;
    //then we save user
    await newUser.save();
    //create a Token  here if we want to take user enter if it is anly register
/*const token = jwt.sign(
    {
        id:newUser._id,//payload of jwt
    },
        process.env.SECRET_KEY,
         {expiresIn:"3h"} 
);*/
 // response
 res.status(200).send({ msg: "user registered successfully", user: newUser, /*token*/ });


    } catch (error) {
        res.status(500).send({msg:"server error",error})
    }

}
//user Login

exports.Login = async(req,res)=>{
    const { email, password} = req.body;

    try {
       /* if(!email || !password ){
            return res.status(400).json({msg:'please enter all fildes'})
        }*/


        //checking  if user is  exists
        const findUser = await User.findOne({ email });
        // ken mech mawjoud
        // bad credential
        if (!findUser) {
            return res
                .status(400)
                .json({ errors: [{ msg: "Invalid credentials" }] });
            }
        // test password
        //   password fel BD== password
        const comparePass = await bcrypt.compare(password, findUser.password);
        //   ken mech kifkif
        // bad crential
        if (!comparePass) {
            return res
                .status(400)
                .json({ errors: [{ msg: "Invalid credentials" }] });
            }
        // CRRE UN TOKEN= meftaa7
        const token = jwt.sign(
            {
                id: findUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "3h" }
        );
        res.status(200).send({
            msg: "login successfully",
            user: findUser,
            token,
        });
       
      } catch (error) {
          res.status(500).send({msg:"server error",error})
      }
  
    
}