const express = require('express');
const router = express.Router();
const { Op, Sequelize, where } = require("sequelize");
const {authenticateToken} = require('../TokenVerification')
const {Employee, Goal, sequelize} = require('../models')

router.get("/employee/:id/:month/:year",authenticateToken, async(req, res) =>{
    const goals = await Employee.findAll({
        include:{
            model:Goal,
            where:{
                [Op.and] : [
                    sequelize.fn('EXTRACT(MONTH from "date") =', req.params.month),
                    sequelize.fn('EXTRACT(YEAR from "date") =', req.params.year),
                 ]
            }
        },
        where:{
            id: req.params.id
        },
        attributes:[]
    });
    res.json(goals)
})

router.post("/employee", authenticateToken, async(req, res)=>{
    const data = {
        title: req.body.title,
        status: req.body.status,
        description: req.body.description,
        employee_id: req.id,
        date: new Date(req.body.date)
    }
    try {
        const goal = await Goal.create(data)
        // console.log(goal.toJSON());
        res.status(200).json({ message: "Goal Added Successfully" })
    }
    catch (err) {
        res.status(500).json({ error: err.toString() })
    }
})

router.put("/:goalId", authenticateToken, async(req, res)=>{
    const data = {
        title: req.body.title,
        status: req.body.status,
        description: req.body.description,
    }
    try {
        const goal = await Goal.update(data,
            {where:{id:req.params.goalId}})
        // console.log(goal);
        res.status(200).json({ message: "Goal Updated Successfully" })
    }
    catch (err) {
        res.status(500).json({ error: err.toString() })
    }
})

router.delete("/:goalId", authenticateToken, async(req, res) =>{
    try{
        const delCount = await Goal.destroy({
            where:{
                id:req.params.goalId 
            }
        })
        // console.log(delGoal)
        if(delCount===0){
            res.status(404).json({ message: "Goal not found" })
        }
        else{
            res.status(200).json({ message: "Goal Deleted Successfully" })
        }
    }catch (err) {
        res.status(500).json({ error: err.toString() })
    }
})

module.exports = router