const { Model, DataTypes, Sequelize } = require('sequelize')

const ORDER_TABLE = 'orders'

const OrderModel = {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },

    dateOfOrder: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },

    total: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    }
}


class Order extends Model{
    static config( sequelize = Sequelize ){
        return {
            sequelize, 
            tableName: ORDER_TABLE,
            timestamps: false
        }
    }
}

module.exports = { Order , ORDER_TABLE, OrderModel }