//EXPRESS
const express = require("express");
const app = express();
//BODY PARSER
const bodyParser = require("body-parser");

//Bodyparsing
app.use(bodyParser.urlencoded({extended: true}));

//To check if server is working!
app.listen(3000, function(){
    console.log("Server is Running great! We are on port 3000!"); 
});

//Target the Home Route
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

//Getting details from the page to the terminal! #Important
app.post("/", function (req, res) {
    
    console.log(req.body.crypto);
    
})