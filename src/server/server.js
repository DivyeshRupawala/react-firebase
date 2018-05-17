var path = require("path");
var Express = require("express");
var React = require("react");
var createStore = require("redux");
var Provider = require("react-redux");
var counterApp = require("../index-reducer");
var App = require("./containers/App");

var renderToString = require("react-dom/server");
var fetchCounter = require("../counter");
var qs = require("qs");

const app = Express();
const port = 3000;

//Serve static files
app.use("/static", Express.static("static"));

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  console.log("Started server")  
}

app.listen(port, () => console.log('Express sever started on port 3000!!'))