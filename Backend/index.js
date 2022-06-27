
const express=require('express')
const app=express()

const mongoose=require('mongoose')
const cors=require('cors')

require('dotenv/config')

//Middlewares
app.use(cors() )
app.use(express.json())

//Import Routes
const postRoutes = require('./routes/posts')
app.use('/posts',postRoutes);





app.listen(3000 ,()=>{console.log("Server listening on port 3000")});
mongoose.connect(process.env.databaseURL,{useNewUrlParser: true},()=>{console.log("Connected")});