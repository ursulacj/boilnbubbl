const express = require('express');
const router =  express.Router();
const gameStatesCtrl  = require('../../controllers/gameStates');

/*----------Public Routes---------------------*/
/*----------Protected Routes------------------*/

router.post('/', gameStatesCtrl.create);
router.put('/:id', gameStatesCtrl.updateGame);
router.delete('/:id', gameStatesCtrl.deleteGame);





module.exports = router;