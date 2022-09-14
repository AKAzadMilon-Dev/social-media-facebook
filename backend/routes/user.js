const express = require("express");
const { register, activateAccount } = require("../controllers/User");
const router = express.Router();

router.post("/register", register);
router.post("/activate", activateAccount);

module.exports = router;
