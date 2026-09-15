//This file creates a very simple web server using Node.js
// Load Node.js's built-in HTTP module and store it in the variable "http".
var http = require('http');

// Create an HTTP server that runs this function whenever a browser sends a request
http.createServer(function (req, res) {

    // Send HTTP status code 200 and tell the browser the response is plain text.
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send "Hello World" to the browser and end the response.
    res.end('Hello World\n');

    // Make the server listen for incoming requests on port 8000.
}).listen(8000);

// Display a message in the Terminal confirming that the server is running.
console.log('Server running on port 8000.');
