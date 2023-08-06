// load up the express framework and body-parser helper
const express = require("express");
const bodyParser = require("body-parser");

// create an instance of express to serve our end points
const app = express();
// define the port where the web app listen requests
const PORT=3001; 

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require("fs");
var path = require('path');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
var routesFile = path.join(__dirname, "routes/routes.js");
const routes = require(routesFile)(app, fs);

// finally, launch our server on port 3001.
const server = app.listen(PORT, () => {
  console.log("listening on port %s...", 
  server.address().port);
});
