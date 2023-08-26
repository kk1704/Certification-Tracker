const express = require("express")
const router = express.Router()
const { addCompany, deleteCompany, updateCompany, getCompany } = require('../controllers/adminController')

router.post('/addCompany', addCompany)

router.post('/deleteCompany', deleteCompany)

router.post('/updateCompany', updateCompany)

router.get('/getCompany', getCompany)
// router.get('/getCompany', (req, res) => {
//     res.status(200).send("You have reached correct link.")
// })


module.exports = router