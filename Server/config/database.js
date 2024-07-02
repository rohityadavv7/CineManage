const mongoose = require("mongoose");
require("dotenv").config()

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
   .then(() => console.log("MongoDB Connected..."))
   .catch((error) => {
    console.log(error),
    console.log("Issue in Db Connection!")
   });
}

module.exports = dbConnect;