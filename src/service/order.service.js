const sequelize = require('../db/conn')

class OrderService {

    async find(){
        const orders = await sequelize.models.Order.findAll({
            include:{
                model: sequelize.models.Product,
                as: 'products',
                through:{
                    model: sequelize.models.ProductOder,
                    attributes: ['quantity']
                }
            }
        })
        return orders
    }

    async findById( id ){
        const order = await sequelize.models.Order.findByPk( id, {
            include:[
                {
                    association: 'products',
                    
                }
            ]
        } )
        return order
    }

    async create( data ){
        const t = await sequelize.transaction()
        try {
            const order  = await sequelize.models.Order.create({
                total: data.total
            })
            
            for (const product of data.products){
                
               await sequelize.models.ProductOrder.create({
                    orderId: order.id,
                    productId: product.product_id,
                    quantity: product.quantity
                })
               
                const ifProduct = await sequelize.models.Product.findByPk( product.product_id )
                
                const newStock = ifProduct.stock - product.quantity
                
                await ifProduct.update({ stock: newStock})
                
            }
            return {
                ok: true
            }
        } catch (error) {
            t.rollback()
            return {
                ok: false,
                error
            }
        }
    }

}

module.exports = { OrderService }