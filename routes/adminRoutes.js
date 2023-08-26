const express = require("express")
const router = express.Router()
const { addCompany, deleteCompany, updateCompany, getCompany, addCert, deleteCert, updateCert, getCert } = require('../controllers/adminController')

router.post('/addCompany', addCompany)

router.post('/deleteCompany', deleteCompany)

router.post('/updateCompany', updateCompany)

router.get('/getCompany', getCompany)

router.post('/addCert', addCert)

router.post('/deleteCert', deleteCert)

router.post('/updateCert', updateCert)

router.get('/getCert', getCert)


module.exports = router