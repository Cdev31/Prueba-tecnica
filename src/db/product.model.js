const { Model, DataTypes, Sequelize } = require('sequelize')

const PRODUCT_TABLE = 'products'

const ProductModel = {
    id: {
        type: DataTypes.UUID,
        primariKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    price: {
        type: DataTypes.DECIMAL(6,2),
        allowNull:false
    }
}


class Product extends Model{
    static config( sequelize = Sequelize ){

    }
}

module.exports = { Product , PRODUCT_TABLE, ProductModel }