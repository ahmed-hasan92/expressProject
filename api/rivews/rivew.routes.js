const express = require("express");
const { getRivews } = require("./rivew.controller");
const router = express.Router();

router.get("/", getRivews);

module.exports = router;
