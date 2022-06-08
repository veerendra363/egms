const express = require("express");
const router = express.Router();
const { Op,} = require("sequelize");
const { authenticateToken } = require("../TokenVerification");
const { Employee, } = require("../models");

router.get("/:adminId", authenticateToken, async (req, res) => {
  try {
    const admin = await Employee.findAll({
      attributes: ["gdo"],
      where: {
        id: req.params.adminId
      },
      raw: true,
      nest: true,
    });
    const adminGDO = admin[0].gdo;
    const employees = await Employee.findAll({
      where: {
        [Op.and] : [{gdo: adminGDO,
        role:'Employee'}]
      },
      raw: true,
      nest: true,
    });
    res.json(employees)
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router