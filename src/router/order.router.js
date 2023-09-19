const { Router } = require('express')

const { OrderService } = require('../service/order.service')
const orderService = new OrderService()

const orderRouter  = Router()

orderRouter.get('/', async ()=>{

})

orderRouter.get('/:id', async ()=>{
    
})

orderRouter.post('/', async ()=>{
    
})




module.exports = { orderRouter }