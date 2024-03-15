//import required modules to create a server that handles api request and serves static files

const express = require("express"); //importing express library
const app = express() //create an instance of the express application

require("dotenv").config();
const PORT = process.env.PORT

// This line defines a route handler for HTTP GET requests to the root URL, which is '/
// When the server receives a GET request to the root URL, it will execute the callback function
// req object and res object
app.get('/', (req, res) => {
    res.send('Interactive comments project!');
});

//start the server - listen for connection on the given path (all paths on port 8080)
app.listen(PORT, () => { 
    console.log("Server running on http://localhost:" + PORT);
});