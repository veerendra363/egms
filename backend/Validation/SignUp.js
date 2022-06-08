const {body} = require('express-validator')
const {Employee} = require('../models')

const ValidateSignUpData = [
    body('fname')
    .notEmpty().withMessage("First name should not be empty"),
    body('lname')
    .notEmpty().withMessage("Last name should not be empty"),
    body('email')
        .isEmail().withMessage("Enter a valid Email address")
        .custom(async (value) =>{
            const count = await Employee.count({where:{
                email : value
            }})
            if(count>0){
                return Promise.reject('Email already in use')
            }
        }),
    body('phone_number')
        .isLength({ min: 10, max: 10 }).withMessage("Mobile Number should number contain 10 digits")
        .custom(async (value) =>{
            const count = await Employee.count({where:{
                phone_number : value
            }})
            if(count>0){
                return Promise.reject('Phone number already in use')
            }
        }),
    body('skills')
        .notEmpty().withMessage("skills should not be empty"),
    body('role')
        .notEmpty().withMessage("Role should not be empty"),
    body('gdo')
        .notEmpty().withMessage("GDO should not be empty"),
    body('user_name')
    .isLength({min:8})
    .withMessage('User name must contain 8 or more charaters')
    .custom(async (value) =>{
        const count = await Employee.count({where:{
            user_name : value
        }})
        if(count>0){
            return Promise.reject('User name already in use')
        }
    }),     
    body('password')
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })
        .withMessage("password should contain number(s) and upper and lowercase letter(s) ans symbol(s)")
        .custom(async (value) =>{
            const count = await Employee.count({where:{
                password : value
            }})
            if(count>0){
                return Promise.reject('Password already in use')
            }
        }),
]


module.exports = {ValidateSignUpData}