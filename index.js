const express = require("express")
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const User = require('./models/userModel')
const { createUser } = require('./controllers/adminController')

const port = process.env.PORT || 5001
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// User.sync({ alter: true })
User.sync()
    .then((result) => {
        console.log('Table and model synced successfully....')
    })
    .catch((err) => {
        console.log("ERROR WHILE SYNCING...")
    })

app.listen(port, () => {
    console.log(`This app is running on http://localhost:${port}`)
})