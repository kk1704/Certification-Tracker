const express = require("express")
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
// const Certification = require('./models/adminModel')
const admin = require('./routes/adminRoutes')
const sequelize = require('./connection')

const port = process.env.PORT || 6001
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', admin)

// sequelize.sync({ alter: true })
sequelize.sync()
    .then((result) => {
        console.log('Table and model synced successfully....')
    })
    .catch((err) => {
        console.log("ERROR WHILE SYNCING...", err)
    })

app.listen(port, () => {
    console.log(`This app is running on http://localhost:${port}`)
})