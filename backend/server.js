require('dotenv').config()
const express = require("express")
const app = express()
const LoginRouter = require('./routes/Login')
const EmployeeGoalRouter = require('./routes/Goals')
const SignUpRouter = require('./routes/SignUp')
const EmployeesRouter = require('./routes/Employees')
const AdminsRouter = require(`./routes/Admins`)
app.use(express.json())

const PORT = 3030

app.use("/egms/login", LoginRouter)
app.use("/egms/goals", EmployeeGoalRouter)
app.use("/egms/signup", SignUpRouter )
app.use("/egms/employees", EmployeesRouter)
app.use("/egms/admins", AdminsRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

