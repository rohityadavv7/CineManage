const User = require("../models/User");
const Movies = require("../models/Movies");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken")

exports.Login = async(req,res) => {
    try{
        // Get email and password from request body
		const { email, password } = req.body;
        console.log("password-> ", password);

		// Check if email or password is missing
		if (!email || !password) {
			// Return 400 Bad Request status code with error message
			return res.status(400).json({
				success: false,
				message: `Please Fill up All the Required Fields`,
			});
		}

		// Find user with provided email
		const user = await User.findOne({ email }).populate("moviesWatching");
        console.log("user-> ",user)

		// If user not found with provided email
		if (!user) {
			// Return 401 Unauthorized status code with error message
			return res.status(401).json({
				success: false,
				message: `User is not Registered with Us Please SignUp to Continue`,
			});
		}

        console.log(user.password);

		// Generate JWT token and Compare Password
		if(bcrypt.compare(password, user.password)) {
            console.log("in token-> ")
			const token = jwt.sign(
				{ email: user.email, id: user._id },
				    process.env.JWT_SECRET,
				{
					expiresIn: "24h",
				}
			);

            console.log("token-> ",token);
			// Save token to user document in database
			user.token = token;
			user.password = undefined;
			// Set cookie for token and return success response
			const options = {
				expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			};
			res.cookie("token", token, options).status(200).json({
				success: true,
				token,
				user,
				message: `User Login Success`,
			})
        }
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Error in Login!"
        })
    }
}

exports.Signup = async(req,res) => {
    try{
        console.log("in signup")
        const{username,email,password} = req.body;

        if(!username || !email || !password){
            return res.status(403).json({
                success:false,
                message:"Please fill all fields!"
            })
        }

        //check if user already exists
        const checkUser = await User.findOne({email});

        if(checkUser){
            return res.status(403).json({
                success:false,
                message:"User already exists!, Please Login with your credentials"
            })
        }

        //hash the password
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({
            email,
            username,
            password: hashedPassword
        })

        return res.status(200).json({
            success:true,
            message:"Signup Successful!",
            newUser
        })

    }catch(error){
        console.log("Error in signup-> ",error);
        return res.status(500).json({
            success:false,
            message:"Couldn't Signup, Please try again later!"
        })
    }
}