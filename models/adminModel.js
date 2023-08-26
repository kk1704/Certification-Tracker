const { DataTypes } = require('sequelize')
const sequelize = require('../connection')


const Company = sequelize.define('company', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    }
})

module.exports = Company