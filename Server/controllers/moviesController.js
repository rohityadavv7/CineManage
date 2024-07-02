const Movies = require("../models/Movies");
const User = require("../models/User")

exports.getWatchlist = async(req,res) => {
    try{
        const email = req.user.email;
        console.log("email-> ",email)

        if(!email){
            return res.status(403).json({
                success:false,
                message:"email not provided!"
            })
        }

        const watchlist = await User.findOne({email}).populate("moviesWatching");

        console.log("user with watchist-> ",watchlist.moviesWatching);
        const userWatchlist = watchlist.moviesWatching;

        return res.status(200).json({
            success:true,
            message:"Watchlist fetched!",
            userWatchlist
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error while fetching watchlist"
        })
    }
}

exports.addToWatchList = async(req,res) => {
    try{
        const {title, description, imageUrl, genre, releaseYear} = req.body;
        console.log(title,description,imageUrl,releaseYear,email)

        if(!title || !description || !imageUrl || !genre || !releaseYear){
            return res.status(403).json({
                success:false,
                message:"All fields are required!"
            })
        }

        const {email} = req.user.email;
        console.log("email-> ",email);
    
        //check if movie already present in watch list
        const checkMovie = await Movies.findOne({title});

        if(checkMovie){
            return res.status(403).json({
                success:false,
                message:"Movie already present in watchlist!"
            })
        }

        const newMovie = await Movies.create({
            title,
            description,
            imageUrl,
            genre,
            releaseYear
        })

        //get the user
        const user = await User.findOneAndUpdate({email}, {$push: {moviesWatching: newMovie._id}});

        return res.status(200).json({
            success:true,
            message:"Movie added to watchlist successfully!",
            user
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error while adding movie to watchlist"
        })
    }
}