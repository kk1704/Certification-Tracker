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

const Certification = sequelize.define('certification', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    certName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    companyID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING
    }
})

module.exports = { Company, Certification }