const Movies = require("../models/Movies");
const User = require("../models/User")
const mongoose = require("mongoose");

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
        console.log("in add")
        const {title, description, imageUrl, rating, releaseYear} = req.body;
        console.log(title,description,imageUrl,rating,releaseYear)

        if(!title || !description  || !rating || !releaseYear){
            return res.status(403).json({
                success:false,
                message:"All fields are required!"
            })
        }

        const email = req.user.email;
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
            rating,
            releaseYear
        })

        console.log("movie created-> ",newMovie)

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

exports.editMovie = async(req,res)=> {
    try{
        const {title, description,rating, releaseYear} =  req.body;
        console.log(title,description,rating,releaseYear)

        if(!title || !description || !rating || !releaseYear){
            return res.status(403).json({
                success:false,
                message:"All fields are required!"
            })
        }

        //find Movie
        const movie = await Movies.findOne({title})
        console.log("movie-> ",movie)

        if(!movie){
            return res.status(404).json({
                success:false,
                message:"Movie not found!"
            })
        }

        const updatedMovie = await Movies.findOneAndUpdate(
            { title }, // Filter: find the document with this ID
            { title, description,rating , releaseYear}, // Update: fields to update
            { new: true, runValidators: true } // Options: return the updated document, run schema validators
        );

        return res.status(200).json({
            success: true,
            message: "Movie updated successfully!",
            updatedMovie
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error while updating movie"
        });
    }
}

exports.setWatched = async(req,res) => {
    try{
        console.log("in set watched")
        const {title,email} = req.body;
        console.log(title,email)

        if(!title || !email){
            return res.status(403).json({
                success: false,
                message:"Title is required!"
            })
        }

        //get movie details
        const movie = await Movies.findOne({title});
        console.log("movie-> ",movie)

        if(!movie){
            return res.status(404).json({
                success: false,
                message:"Movie not found!"
            })
        }
     

        const updatedMovie = await Movies.findOneAndUpdate({title},{
            watched:true,
        } )

           const user = await User.findOneAndUpdate({email},{
            $push:{moviesWatched:updatedMovie._id} })

        console.log("updated-> ", updatedMovie)

        console.log("title-> ",title)

        return res.status(200).json({
            success: true,
            message: "Movie marked as watched successfully!",
            updatedMovie,
            user
        });

    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error while setting movie as watched"
        });
    }
}

exports.deleteFromWatchlist = async(req,res) => {
    try{
        console.log("in delete in backend")
        const {id,email} = req.params;
        console.log(id,email)

        if(!id || !email){
            return res.status(403).json({
                success: false,
                message:"All details required!"
            })
        }

        //check if user present
        const checkUser = await User.findOne({email}).populate("moviesWatching")
        console.log("user check-> ", checkUser)
        
        if(!checkUser){
            return res.status(404).json({
                success: false,
                message:"User not found!"
            })
        }

        // if (!mongoose.Types.ObjectId.isValid(id)) {
        //     return res.status(400).send({ message: 'Invalid userId or movieId' });
        // }
       const user = await User.findOneAndUpdate(
      { email },
      { $pull: { moviesWatching: {_id:id} } },
      { new: true } // This option returns the updated document
    );

        console.log("user-> ",user)
      


      //get the updated user 
      const updateUser = await User.findOne({email}).populate("moviesWatching");

      console.log("user after-> ", updateUser);
        
      return res.status(200).json({
        success: true,
        message: "Movie deleted from watchlist successfully!",
        updateUser
      })

    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error while deleting movie from watchlist"
        });
    }
}

exports.getWatchedMovies = async(req,res) => {
    try{
        console.log("in get watched")
        const email = req.user.email;
        console.log("email-> ",email)

        if(!email){
            return res.status(403).json({
                success: false,
                message:"email not provided!"
            })
        }

        //checkuser
        const checkUser = await User.findOne({email})
        console.log("user check-> ", checkUser)

        if(!checkUser){
            return res.status(404).json({
                success: false,
                message:"User not found!"
            })
        }


        const user = await User.findOne({email}).populate("moviesWatched");

        return res.status(200).json({
            success: true,
            message:"Watched movies fetched!",
            moviesWatched: user.moviesWatched
        })



    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error while fetching watched movies"
        });
    }
}