const { Sequelize } = require('sequelize')

const { SetupModel } = require('./')
const { config } = require('../config/config.env')

const sequelize = new Sequelize(config.dbUrl,{
    dialect: 'postgres',
    logging: console.log
})

SetupModel( sequelize )

module.exports = sequelize