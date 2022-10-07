const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://orders:qwerty12@cluster0.scczd1w.mongodb.net/?retryWrites=true&w=majority")
        console.log(`MongoDB Connected`.bgCyan)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
}
module.exports = connectDB