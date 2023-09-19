const { Sequelize } = require("sequelize");

const { Order, OrderModel } = require('./order.model')
const { ProductOrder, ProductOrderModel} = require('./order.product')
const { Product, ProductModel} = require('./product.model')

const SetupModel = ( sequelize = Sequelize )=>{
    Order.init( OrderModel, Order.config( sequelize ) )
    Product.init( ProductModel,  Product.config( sequelize ) )
    ProductOrder.init( ProductOrderModel, ProductOrder.config( sequelize ) )
}

module.exports = { SetupModel }