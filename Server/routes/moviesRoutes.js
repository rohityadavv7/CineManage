const express = require("express");
const router = express.Router();
const {auth} = require("../middlewares/auth")

const {getWatchlist, addToWatchList, editMovie, setWatched, deleteFromWatchlist, getWatchedMovies} = require("../controllers/moviesController")

router.get("/watchlist",auth,getWatchlist);

router.post("/addToWatchList",auth,addToWatchList );
router.post("/edit", editMovie)
router.post("/setwatched", setWatched);
router.delete("/deletefromwatchlist/:email/:id",deleteFromWatchlist);
router.post("/addMovie",auth,addToWatchList);
router.get("/watchedmovies",auth,getWatchedMovies)

module.exports = router;