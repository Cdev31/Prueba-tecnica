const Joi = require('joi')


const createOrderSchema = Joi.object({
    products: Joi.array().items(Joi.object({
        product_id: Joi.number().integer().required(),
        quantity: Joi.number().integer().required()
    })).required(),
    total: Joi.number().precision(2).required()
})

module.exports = { createOrderSchema }