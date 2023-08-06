// This is the HTTP SERVER receiving HTTP requests
// answering HTML code via HTTP response

var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');

const PORT=8080; 
const app = express();

app.use('/css', express.static('public'));
var testDemoFile = path.join(__dirname, "testDemo.html");

fs.readFile(testDemoFile, function (err, html) {

    console.log("listening on port %s...", PORT);

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
