const { Sequelize } = require('sequelize')

const { SetupModel } = require('./')
const { config } = require('../config/config.env')

const sequelize = new Sequelize(config.dbUrl,{
    dialect: 'postgres',
    logging: false,
})

sequelize.sync({ force:false })

SetupModel( sequelize, )

module.exports = sequelize