const GameState = require('../models/gameState');

/*--------------On Game Start-----------------*/

function create(req, res) {
    const gameState = new GameState(req.body);
    try {
        gameState.save();
        res.json(gameState);
    } catch (err) {
        res.status(400).json(err);
    }
}  




/*--------------Exports-----------------*/
module.exports = {
    create
}


