import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
const connect =  ()=> {
    mongoose.connect(process.env.MONGO!).then(()=>{
        console.log("Database working!")
    }).catch((err)=>{
        throw err
    })
}
app.listen(3000, ()=>{
    connect()
    console.log("It's working!")
})