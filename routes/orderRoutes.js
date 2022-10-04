const express = require('express')
const router = express.Router()
const {getOrders ,createOrders } = require("../controllers/orderControllers")



router.route('/').get(getOrders)

router.route('/').post(createOrders)

module.exports = router