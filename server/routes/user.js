const express = require("express");
const router = express.Router();

router.get("/allUsers", getAllUsers);
router.post("/newUser", registerUser);

module.exports = router;
