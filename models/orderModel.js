const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true

    },
    amount:{
        type:Number,
        required:true

    }

})


module.exports = mongoose.model("Orders", orderSchema)