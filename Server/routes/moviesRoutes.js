const express = require("express");
const router = express.Router();
const {auth} = require("../middlewares/auth")

const {getWatchlist, addToWatchList} = require("../controllers/moviesController")

router.get("/watchlist",auth,getWatchlist);
router.post("/addToWatchList",auth,addToWatchList );

module.exports = router;