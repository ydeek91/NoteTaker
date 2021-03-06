// Require Dependencies
const express = require("express");
const bodyParser = require("body-parser")

// Setup list
// Initialize express app
const app = express();
const PORT = process.env.PORT || 8080;

// Setup data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

//Require routes file
require('./routes/routes')(app);

app.listen(PORT, function () {
    console.log(`App listening on PORT: http://localhost:${PORT}`);
});  