const express =require("express")
const router =express.Router();
const Contact = require("../models/contact")


// @POST method
// @desc post a contact
// @Public
//path : http://localhost:5000/api/contact/add

router.post('/add',async (req,res)=>{
   try {
        //create new contact with the model contact 
    const newContact = new Contact(req.body);
    //if user has an email 
    if (!req.body.email){
        res.status(400).send({msg:"email is required check again"});
        return;
    }
    //if the email already exist 
    const user = await Contact.findOne({email:req.body.email})
    if(user){
        res
        .status(400)
        .send({msg:"user alredy exist email "})
        return;
    }
    //save the contact 
    const response = await newContact.save();
    res.send({response:response,msg:"user is saved"})

    } catch (error) {
        console.log(Error);
        res.status(500).send({msg:"not save it "});
        
    }
    
})
// @Get method
// @desc Get all contact
// @Public
//path : http://localhost:5000/api/contact/all
router.get('/all',async(req,res)=>{
    try {
        const result = await Contact.find();
        res.send({  message: "all contacts ",response: result });
      } catch (error) {
        res.status(400).send({ message: "can not get contacts" });
      }

})





// @Get method
// @desc Get one contact by id
// @Public
//path : http://localhost:5000/api/contact/id
router.get('/:id',async(req,res)=>{
    try {
        const contactid = await Contact.findOne({ _id: req.params.id });
        res.send({  message: "user",response: contactid, });
      } catch (error) {
        res.status(400).send({ message: "no contact with this id" });
      }

})



// @DELETE method
// @desc Delete one contact by id
// @Public
//path : http://localhost:5000/api/contact/delete/id
router.delete('/delete/:id',async(req,res)=>{
    try {
        const result = await Contact.deleteOne({ _id: req.params.id });
        console.log(result);
        res.send({ response: "contact deleted" });
      } catch (error) {
        res.status(400).send({ message: " no contact with this id" });
      }
    
})
// @PUt method
// @desc update  contact by id
// @Public
//path : http://localhost:5000/api/contact/update/id
router.put('/update/:id',async(req,res)=>{
    try {
        const result = await Contact.updateOne(
          { _id: req.params.id },
          { $set: { ...req.body } }
  
        );
        result.nModified
       ? res.send({ message: "user updated",Response:result })
        : res.send({ message: "contact already updated" });
      
      } catch (error) {
        res.status(400).send({ message: "no user with this id" });
      }
    
})
module.exports=router