//Importing Express from node-modules
const express = require("express");

//Importing Path from node (is an object used to create paths for folders easily)
const path = require("path");

//initialize Express
const app = express();

//Inserting middlewares on express
//__dirname = project's absolute path
app.use(express.static(path.join(__dirname, "public")));

//Creating Routes
app.get("/", (req, res, next) => {
  //Response with files
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/about", (req, res, next) => {
  //Response with files
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

//Listen to PORT 3000
app.listen(3000, () => console.log("App running on PORT 3000"));
