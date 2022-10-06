const asyncHandler = require("express-async-handler")
const Orders = require("../models/orderModel") 




const createOrders = asyncHandler(async(req,res) =>{
    const {name, status,amount} = req.body


    //Details are missing
    if(!name || !status || !amount) {
        res.status(400)
        throw new Error("Missing Details")
    }

    //Create User
    const newOrder = await Orders.create({
        name,
        status,
        amount
    })

    if(newOrder){
        res.status(201).json({
           message: "Oder has been created",
           name,
           status,
           amount
        })
    }else{
        res.status(400)
        throw new Error("Something went wrong")
    }
    

})

const getOrders = asyncHandler(async(req,res) =>{
    await Orders.aggregate([{$group: {_id: {name: '$name',status: '$status', },
    amount: {$sum: '$amount'}, }}, 
    {$sort: {_id: -1}}]).exec((err, data)=>{
        if(err){
            res.status(400).json(err)

        }
        if(data){
            res.status(200).json(data)
        }
     })



})

module.exports = {getOrders, createOrders}