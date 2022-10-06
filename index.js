const express = require('express');
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require("./config/db") 


const port = process.env.PORT || 5000

//app initialize

const app = express()

//database connection
connectDB()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//api
app.use('/api/orders', require("./routes/orderRoutes"))


app.listen("5000", ()=>console.log(`Server connected ${port}`.bgMagenta))

