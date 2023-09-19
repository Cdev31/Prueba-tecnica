const express = require('express')

const { RouterApp } = require('./src/router')
const { config } = require('./src/config/config.env')
// require('./src/db/conn')
const app = express()

app.use( express.json() )

app.get('/', (_, res)=>{
    res.json({
        greeting: 'hello'
    })
})

RouterApp(app)

app.listen(config.port,()=>{
    console.log(`Api in port: ${ config.port }`)
})