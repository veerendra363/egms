const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const {LoginValidate, ValidateUserDetails} = require('../Validation/Login')

router.post("/", LoginValidate, ValidateUserDetails, (req, res)=>{
    const user_name = req.body.user_name
    const id = req.employeeId
    const accessToken = jwt.sign({user_name, id}, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken, id})
})

module.exports = router