const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();


// Configure the dotenv
require('dotenv').config();
require('./config/database');

// Mount middleware here
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the catch all!!!
app.use('/api/users', require('./routes/api/users'));
app.use('/api/gameStates', require('./routes/api/gameStates'));

//Catch all route that sends the client back to the index page so that the SPA router can  route it to the correct feature
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure port to 3001 to avoid collision with  React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on  port ${port}`)
});