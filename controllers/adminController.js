const { Company, Certification } = require("../models/adminModel")

const addCompany = async (req, res) => {
    try {
        if (req.body.companyName.length == 0) {
            res.status(400).json({ message: "Company Name should not be BLANK." })
        } else {
            const company = await Company.create({
                companyName: req.body.companyName
            })
            res.status(200).json({ message: "Company added successfully." })
        }
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({ message: 'Company already exists' });
        } else {
            res.status(500).json({ message: "Something went wrong. Please check and try again.." })
        }
    }
}

const deleteCompany = async (req, res) => {
    try {
        if (req.body.companyName.length == 0) {
            res.status(400).json({ message: "Company Name should not be BLANK." })
        } else {
            let company = await Company.findAll({
                where: { companyName: req.body.companyName }
            })
            if (company.length == 0) {
                res.status(400).json({ message: "Company does not exist." })
            } else {
                let delcompany = await Company.destroy({
                    where: { companyName: req.body.companyName }
                })
            }
            res.status(200).json({ message: "Company deleted successfully." })
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please check and try again......" })
    }
}

const updateCompany = async (req, res) => {
    try {
        const company = await Company.update({
            companyName: req.body.companyName
        }, { where: {} })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please check and try again.." })
    }
}

const getCompany = async (req, res) => {
    try {
        const company = await Company.findAll()
        res.status(200).send(company)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please check and try again.." })
    }
}

const addCert = async (req, res) => {
    try {
        if (req.body.certName.length == 0) {
            res.status(400).json({ message: "Certification Name should not be BLANK." })
        } else if (req.body.companyID.length == 0) {
            res.status(400).json({ message: "Certification should not be BLANK." })
        } else {
            const cert = await Certification.create({
                certName: req.body.certName,
                companyID: req.body.companyID,
                status: 'true'
            })
            res.status(200).json({ message: "Certification added successfully." })
        }
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({ message: 'Certification already exists' });
        } else {
            res.status(500).json({ message: "Something went wrong. Please check and try again.." })
        }
    }
}

const deleteCert = async (req, res) => {
    try {
        if (req.body.certName.length == 0) {
            res.status(400).json({ message: "Certification Name should not be BLANK." })
        } else {
            let cert = await Certification.findAll({
                where: { certName: req.body.certName }
            })
            if (cert.length == 0) {
                res.status(400).json({ message: "Certification does not exist." })
            } else {
                let delcert = await Certification.destroy({
                    where: { certName: req.body.certName }
                })
            }
            res.status(200).json({ message: "Certification deleted successfully." })
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please check and try again......" })
    }
}

const getCert = async (req, res) => {
    try {
        const cert = await Certification.findAll()
        res.status(200).send(cert)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please check and try again.." })
    }
}

const updateCert = async (req, res) => {
    try {
        const cert = await Certification.update()
        res.status(200).send(cert)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please check and try again.." })
    }
}

module.exports = { addCompany, deleteCompany, updateCompany, getCompany, addCert, deleteCert, updateCert, getCert }