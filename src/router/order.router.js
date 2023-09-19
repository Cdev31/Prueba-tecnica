const { Router } = require('express')

const { validationHandler } = require('../middlewares/validation.handler')
const { OrderService } = require('../service/order.service')
const { createOrderSchema } = require('../schemas/order.schema')
const orderService = new OrderService()

const orderRouter  = Router()

orderRouter.get('/', async ( _, res)=>{
    const response = await orderService.find()
    res.status(200).json( response )
})

orderRouter.get('/:id', async ( req, res, next )=>{
    const response = await orderService.findById( req.params.id )
    res.status(200).json( response )
})

orderRouter.post('/',
validationHandler(createOrderSchema, 'body'),
async ( req, res, next )=>{
    const response = await orderService.create( req.body )
    res.status(201).json( response )
})




module.exports = { orderRouter }