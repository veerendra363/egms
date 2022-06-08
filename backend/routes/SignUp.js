const express = require('express');
const router = express.Router();
const {ValidateSignUpData} = require('../Validation/SignUp')
const {validationResult} = require('express-validator')
const {Employee} = require('../models')

router.post("/", ValidateSignUpData, async(req, res)=>{
    console.log("Inside signup router")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    } else {
        const data = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phone_number: req.body.phone_number,
            skills: req.body.skills,
            role: req.body.role,
            gdo: req.body.gdo,
            user_name: req.body.user_name,
            password: req.body.password 
        }
        try {
            const employee = await Employee.create(data)
            console.log(employee.toJSON()); // This is good!
            res.status(200).json({ message: "Successfully Registered" })
        }
        catch (err) {
            res.status(500).json({ error: err.toString() })
        }
}})

module.exports = router