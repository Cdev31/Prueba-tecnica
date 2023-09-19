const { Router } = require('express')
const { orderRouter } = require('./order.router')



const RouterApp = (app = Router)=>{
    const router = Router()
    app.use('/api/v1', router)
    router.use('/Orders', orderRouter)
}

module.exports = { RouterApp }