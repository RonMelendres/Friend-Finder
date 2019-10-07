var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
// var http = require("http");

var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var friends = [
    {
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }

];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});


app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

app.post("/api/friends", function(req, res) {
    var newFriends = req.body;
    newFriends.name = newFriends.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriends);
    friends.push(newFriends);

    res.json(newFriends);

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
    