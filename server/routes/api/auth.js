const express = require("express");
const router = express.Router();
const authControllers = require("../../controllers/authController");

router.post("/register", authControllers.register);

router.post("/login", authControllers.login);

router.post("/logout", authControllers.logout);

router.post("/refresh", authControllers.refresh);

router.get("/user", authControllers.user);

module.exports = router;
