const { Sequelize ,Model, DataTypes } = require('sequelize')

const PRODUCT_ORDER_TABLE = 'product_order'

const ProductOrderModel = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
}


class ProductOrder extends Model{
    static config( sequelize = Sequelize ){
        return {
            sequelize,
            tableName: PRODUCT_ORDER_TABLE,
            timestamps: false
        }
    }
}

module.exports = { ProductOrder , PRODUCT_ORDER_TABLE, ProductOrderModel }