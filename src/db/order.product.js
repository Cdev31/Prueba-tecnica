const { Sequelize ,Model, DataTypes } = require('sequelize')

const PRODUCT_ORDER_TABLE = 'products'

const ProductOrderModel = {
    id: {
        type: DataTypes.UUID,
        primariKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    orderId: {
        type: DataTypes.UUID,
        allowNull: false
    },

    productId: {
        type: DataTypes.UUID,
        allowNull: false,
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
}


class ProductOrder extends Model{
    static config( sequelize = Sequelize ){

    }
}

module.exports = { ProductOrder , PRODUCT_ORDER_TABLE, ProductOrderModel }