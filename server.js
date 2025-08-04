// Declare all needed variables for packages

const express = require("express");
const {WebMidi} = require("webmidi");
const path = require("path");
require("dotenv").config({ path: "./config/.env" });



const app = express();

// Serve static files (like index.html) from "public" folder
app.use(express.static(path.join(__dirname, "public")));



//Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())




// Setup Sessions - stored in MongoDB
// Check whether this is really needed as it adds up quick
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// )



// Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

//Use flash messages for errors, info, ect...
// app.use(flash())




//Setup Routes For Which The Server Is Listening
// app.use("/", mainRoutes)
// app.use("/post", postRoutes)
// app.use("/comment", commentRoutes)
// app.use("/auth", authRoutes)

//Server Running
const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server is running on ${PORT}`),
  //test 
    console.log(`The Synth Lives!`)
)


