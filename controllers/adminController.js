const Company = require("../models/adminModel")

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
            res.status(400).json({ message: 'Email already exists' });
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
        const company = await Company.update()

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

module.exports = { addCompany, deleteCompany, updateCompany, getCompany }