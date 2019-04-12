const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamePlaySchema = new Schema({
    userName: {
        type: String,
    },
    isPlayer1: {
        type: Boolean,
        default: true
    },
    move: {
        type: String,
    }
})

const GameStateSchema = new Schema({
    gameIsOpen: {
        type: Boolean,
        required: true,
        default: true,
    },
    gameIsSinglePlayer: {
        type: Boolean,
        required: true,
        default: true},
    user1: {
        type: String,
        required: true},
    user2: {
        type: String,
        required: false},
    baseComponent: {
        type: String,
        },
    gamePlays: [gamePlaySchema]
}, {
    timestamps: true
});



module.exports = mongoose.model('GameState', GameStateSchema);