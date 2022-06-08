const express = require("express");
const {sequelize, Employee} = require('./models')

const app = express()
app.use(express.json())
const PORT = 3030

app.get('/employees', async(req, res) =>{
    try{
        const employees = await Employee.findAll()
        return res.json(employees)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.listen(PORT,()=>{
    console.log(`server is up now on port ${PORT}`)
})