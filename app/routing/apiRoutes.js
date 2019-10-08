var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        var newFriends = req.body;
        newFriends.name = newFriends.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriends);
        
        friends.push(newFriends);

        // res.json(newFriends);
    });
}

