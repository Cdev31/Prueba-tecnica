const { Sequelize ,Model, DataTypes } = require('sequelize')
const { PRODUCT_TABLE }= require('./product.model')
const { ORDER_TABLE }= require('./order.model')

const PRODUCT_ORDER_TABLE = 'product_order'

const ProductOrderModel = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ORDER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PRODUCT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
}


class ProductOrder extends Model{
    static associate( models ){
        //
    }

    static config( sequelize = Sequelize ){
        return {
            sequelize,
            tableName: PRODUCT_ORDER_TABLE,
            timestamps: false
        }
    }
}

module.exports = { ProductOrder , PRODUCT_ORDER_TABLE, ProductOrderModel }