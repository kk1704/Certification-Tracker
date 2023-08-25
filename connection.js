const Sequelize = require('sequelize')
const dotenv = require('dotenv').config()

user = process.env.USR
password = process.env.PASS
database = process.env.DB

console.log(process.env)
console.log(user, password, database)

const sequelize = new Sequelize(database, user, password, {
    host: 'localhost', dialect: 'mysql', define: {
        freezeTableName: true
    }
})

sequelize.authenticate()
    .then(() => {
        console.log('Connection is successful...')
    })
    .catch((err) => {
        console.log('Error occured ', err)
    })

module.exports = sequelize