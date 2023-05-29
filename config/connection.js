const mongoose = require('mongoose');

// connecting mongoose to MongoDB cloud
mongoose.connect('mongodb+srv://leahkrumholz:meep@classactivities.gmp5bc2.mongodb.net/socialnetworkAPI');

// Exporting connection
module.exports = mongoose.connection;