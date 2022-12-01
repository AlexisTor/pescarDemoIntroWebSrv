// This is the HTTP SERVER receiving HTTP requests
// answering HTML code via HTTP response

var http = require('http');
var fs = require('fs');
var express = require('express');

const PORT=8080; 
const app = express();

app.use('/css', express.static('public'));

fs.readFile('./testDemo.html', function (err, html) {

    console.log("listening on port %s...", PORT);

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
