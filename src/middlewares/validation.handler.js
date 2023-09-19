const { request, response } = require("express");


function validationHandler ( schema, property ){
    return ( req = request, res = response, next )=>{
        const data = req[property]

        const { error } = schema.validate(data)
        if ( error ){
            return res.status(400).json({
                error
            })
        }
        next()
    }
}

module.exports = { validationHandler }