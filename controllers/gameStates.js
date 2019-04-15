const GameState = require('../models/gameState');

/*--------------On Pick Game Mode-----------------*/

function create(req, res) {
    const gameState = new GameState(req.body);
    console.log(req.body)
    try {
        gameState.save();
        res.json(gameState);
    } catch (err) {
        res.status(400).json(err);
    }
}  

/*----------- On New Game Start -------------*/

function newGameStart(req, res) {

}


/*---------On Ending Game Early -------------*/

function deleteGame(req, res) {
    GameState.deleteOne({gameIsOpen: true}, function(err, game) {
        console.log(req.body)

        if (err) return res.status(500).send(err);
        const response = {
            message: "Note successfully deleted",
        };
    });
}

/*---------On Win/Lose Scenario-------------*/

function updateGame(req, res) {

}

/*--------------Exports-----------------*/
module.exports = {
    create,
    newGameStart,
    deleteGame,
    updateGame
}
