const express = require('express');
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require("./config/db") 


const port = process.env.PORT || 6000

//app initialize

const app = express()

//database connection
connectDB()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//api
app.use('/api/orders', require("./routes/orderRoutes"))


app.listen(port, ()=>console.log(`Server connected ${port}`.bgMagenta))

