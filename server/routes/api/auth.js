const express = require("express");
const router = express.Router();

router.post("/register");
router.post("/login");
router.logout("/logout");
router.post("/refresh");
router.post("/user");

module.exports = router;
