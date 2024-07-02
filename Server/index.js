const express = require('express');
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 4000;

const dbConnection = require("./config/database")

//midddlewares
app.use(express.json());
app.use(cors({
    origin:"*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

//routes
const userRoutes = require("./routes/userRoutes")
const movieRoutes = require("./routes/moviesRoutes")

app.use("/auth", userRoutes);
app.use("/movies",movieRoutes)

//db connection
dbConnection()

//default route
app.get("/", (req,res)=> {
    return res.json({
        message:"Its Working!"
    })
})

//server live
app.listen(PORT, (req, res) =>{
    console.log(`Server is running on port ${PORT}`);
})
