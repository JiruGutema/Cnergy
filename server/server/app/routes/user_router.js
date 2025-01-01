const express = require("express");
const router = express.Router();
const { StatusCodes } = require("http-status-codes");
const { query } = require("../../config/db");
const {
  getRequest,
  checkUser,
  submit,
} = require("../controllers/user_controller");

router.post("/submit", submit);
router.get("/getRequest", getRequest);

module.exports = router;
