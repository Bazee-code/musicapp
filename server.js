// this will be the server that will host our website
const express = require('express');
// const path = require('path');
const http = require('http');

// create our express app
var app = express();
// atttach our app to http server malking it more secure
var server = http.createServer(app);
// create our express middleware that will give us access to our static webpage
// a static webpage is a page that only consists of html components alone
// when using a middleware we just give the folder containing the webpage
app.use(express.static("./client"));

// attach our app to port
server.listen(3000,()=>{
	console.log("Successfully connected to port 3000!");
});