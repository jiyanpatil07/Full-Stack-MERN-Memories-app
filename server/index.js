import express from "express";

import bodyParser from 'body-parser';

import mongoose  from "mongoose";
import cors from 'cors';
import postRoute from './routes/posts.js'




const app =express();
app.use('/posts',postRoute)


app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())



const CONNECTION_URL='mongodb+srv://jiyanpatil:jiyanpatil123@cluster0.jibbtuu.mongodb.net/?retryWrites=true&w=majority'
const PORT= process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useunifiedTopology:true})
    .then (()=>app.listen(PORT,()=>console.log(`Server Stared on Port ${PORT}`))

    )
    .catch((error)=>console.log(error.message))


// mongoose.set('useFindAndModify',false)