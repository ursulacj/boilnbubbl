const express = require('express');
const router =  express.Router();
const gameStatesCtrl  = require('../../controllers/gameStates');

/*----------Public Routes---------------------*/
/*----------Protected Routes------------------*/

router.post('/', gameStatesCtrl.create);
router.get('/', gameStatesCtrl.newGameStart);
router.delete('/delete', gameStatesCtrl.deleteGame);
router.put('/:id', gameStatesCtrl.updateGame);


module.exports = router;