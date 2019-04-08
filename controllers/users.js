const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    signup
};

async function signup(req, res) {
    const user = newUser(req.body);
    try {
        await user.save();
        res.json({ token });
    } catch (err) {
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