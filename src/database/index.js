let mongoose = require("mongoose");

let BlockChainModel = require("./model");

//Connect to DB
mongoose.connect("mongodb://localhost:27017/blockChain", (err) => {
    if (err)
        return console.log("Cannot connect to DB");
    console.log("Database is Connected");
    connectionCallback();
});

let connectionCallback = () => {};

module.exports.onConnect = (callback) => {
    connectionCallback = callback;
}