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

/*---------On Ending Game Early-------------*/

function deleteGame(req, res) {

}

/*---------On Win/Lose Scenario-------------*/

function updateGame(req, res) {

}

/*--------------Exports-----------------*/
module.exports = {
    create,
    deleteGame,
    updateGame
}


