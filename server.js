require("dotenv").config()
const express=require('express');
const connectToDb=require('./database/db')
const PORT=process.env.PORT
connectToDb();

const app=express()

//express middleware
app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log(`listening to ${PORT} port`)
})