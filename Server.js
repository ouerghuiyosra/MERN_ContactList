const express = require('express');
const app =express();
const dotenv = require('dotenv');
const authRouter = require('./Routes/authRoutes')
const contactRouter =require('./Routes/contactRoute')
//dataBase connection
const connectionDB =require('./Connection/connection')
dotenv.config()
const PORT = process.env.PORT
connectionDB()
//Router
app.use(express.json());
app.use('/api/user',authRouter)
app.use('/api/contact',contactRouter)

app.listen(PORT,(err)=>{err ? console.log(err):console.log(`You are connected on ${PORT}`)})