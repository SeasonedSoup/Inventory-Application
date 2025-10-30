const path = require("node:path");

function getHomePage(req, res) {
    res.sendFile(path.join(__dirname, '../views/homepage.html'));
};

module.exports = {getHomePage};