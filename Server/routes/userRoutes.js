const express = require('express');
const router = express.Router()

const{Signup,Login} = require("../controllers/userController")

router.post("/login",Login );
router.post("/signup",Signup );

module.exports = router;