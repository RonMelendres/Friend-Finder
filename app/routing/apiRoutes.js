module.exports = function(app) {


app.get("/api/friends", function(req, res) {
    return res.json(characters);
});

api.post("/api/friends", function(req, res) {
    var newFriends = req.body;

});

}