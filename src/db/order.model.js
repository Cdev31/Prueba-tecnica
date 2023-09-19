const { Model, DataTypes, Sequelize } = require('sequelize')

const ORDER_TABLE = 'orders'

const OrderModel = {
    id: {
        type: DataTypes.UUID,
        primariKey: true,
        defaultValue: DataTypes.UUIDV4
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

    }
}

module.exports = { Order , ORDER_TABLE, OrderModel }