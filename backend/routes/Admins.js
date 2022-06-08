const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../TokenVerification");
const { Employee } = require("../models");

router.get("/", authenticateToken, async (req, res) => {
  try {
    const admins = await Employee.findAll({
      where: {
        role:'Admin'
      },
      raw: true,
      nest: true,
    });
    res.json(admins)
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router