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
    // TODO: fix this to search for the db id of the last game that was created
    const newGame = GameState.findById({});
    res.json(newGame);
}


/*---------On Ending Game Early -------------*/

function deleteGame(req, res) {
    GameState.findByIdAndDelete({gameIsOpen: true}, function(err, game) {
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
