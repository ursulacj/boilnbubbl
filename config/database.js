const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });


// database connection event 
db.once('connected', function() {
    console.log(`Mongoose connected to: ${db.name} at ${db.host}:${db.port}`);
});

