const { Model, DataTypes, Sequelize } = require('sequelize')

const PRODUCT_TABLE = 'products'

const ProductModel = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            timestamps: false
        }
    }
}

module.exports = { Product , PRODUCT_TABLE, ProductModel }