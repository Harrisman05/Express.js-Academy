// tutorial guide https://www.youtube.com/watch?v=2ojkb44XObc&list=PLsyeobzWxl7occsESx2X1E2R2Uw5wCoeG&index=8&ab_channel=Telusko

// Terminal commands to start project

// node -v --> check node is installed
// npm init --> create package.json
// npm install express --> install express and dependencies

const express = require('express');

app = express(); // initialise express to gain access to all functions etc

app.listen(3000, function (req, res) {
    console.log("Running..."); // check server is running
});

// have to run server by typing "node app" in the terminal
// server will run on port 3000 - Cannot Get / means server is running

// Routing - Setting up routers between client and server

app.get('/', function (req, res) {
    console.log("Console confirming I am on home page"); // server side log
    res.send("Hello Homepage"); // server sending client side some text to render
})

// app.get takes 2 parameters, first parameter is the UR. Slash is the homepage
// req parameter - data going from  client to server
// res parameter - data going from server to client

app.get('/bestFootballer', function (req, res) {
    res.send("Leo Messi is the best footballer");
});

// to access this message type this in browser - http://localhost:3000/bestFootballer

// dynamic URL

app.get('/names/:id', function (req, res) {
    const id = req.params.id; // placeholder variable 
    res.send('Hey Jason ' + id) // can add own number
})

/* req.params is an oject of the req object that contains parameters.
If the params are specified when a URL is built, then the req.params
object will be populated when the URL is requested. See above