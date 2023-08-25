const { DataTypes } = require('sequelize')
const sequelize = require('../connection')


const Company = sequelize.define('company', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Company