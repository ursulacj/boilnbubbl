const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;



async function signup(req, res) {
    console.log(req.body)
    const user = new User(req.body);
    try {
        await user.save();
        // send back a JSON web token 
        const token = createJWT(user);
        res.json({ token });
    } catch (err) {
        // send an error if the user submits a duplicate email or has any other form errors
        res.status(400).json(err);
    }
}

/*--------------Helper Functions-----------------*/

function createJWT(user) {
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    );
}

module.exports = {
    signup
};