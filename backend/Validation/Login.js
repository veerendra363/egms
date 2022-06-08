const {body, validationResult} = require('express-validator')
const {Employee} = require('../models')

const LoginValidate = [
    body('user_name')
    .notEmpty().withMessage("User name should not be empty"),
    body('password')
    .notEmpty().withMessage("Password should not be empty"),
]

const ValidateUserDetails = async(req, res, next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({
            errors: errors.array()
        })
    }
    else{
        const employee = await Employee.findAll({
            attributes: ['id', 'role', 'password'],
            where: {
                user_name: req.body.user_name
              },
            raw: true,
            nest: true,
          });
        if(employee.length===0){
            res.status(404).json({ message: "Employee not found" });
        }
        else{
            // console.log(`body password : ${req.body.password}`)
            // console.log(`db password : ${employee[0].password}`)
            if(req.body.password === employee[0].password){
                if(req.body.role === employee[0].role){
                    req.employeeId = employee[0].id
                    next()
                }
                else{
                    res.status(401).json({message: `Invaild ${req.body.role}`})
                }
            }
            else{
                res.status(401).json({message: " Invaild password"})
            }
        }
    }
}

module.exports = {
    LoginValidate,
    ValidateUserDetails
}