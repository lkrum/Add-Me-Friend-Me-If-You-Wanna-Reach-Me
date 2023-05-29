// require express, mongoose connection, and routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// enabling local host 3001 or PORT connection
const PORT = process.env.PORT || 3001;
// initializing express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
  });
});