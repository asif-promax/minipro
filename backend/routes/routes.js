const express = require("express");
const { register, login } = require("../controller/authcontrol");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// router.post("/registerComplaint",registerComplaint)

module.exports = router;
