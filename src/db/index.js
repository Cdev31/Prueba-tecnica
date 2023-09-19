const { Sequelize } = require("sequelize");

const { Order, OrderModel, ORDER_TABLE } = require('./order.model')
const { ProductOrder, PRODUCT_ORDER_TABLE, ProductOrderModel } = require('./order.product')
const { Product, PRODUCT_TABLE, ProductModel } = require('./product.model')

const SetupModel = ( sequelize = Sequelize )=>{
    Order.init( ORDER_TABLE, OrderModel )
    Product.init( PRODUCT_TABLE, ProductModel )
    ProductOrder.init( PRODUCT_ORDER_TABLE, ProductOrderModel )
}

module.exports = { SetupModel }