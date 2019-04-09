const express = require('express');
const router =  express.Router();
const usersCtrl  = require('../../controllers/users');

/*----------Public Routes---------------------*/

// thought: this may not be the right path. Login + Signup are occurring on the same endpoint rn
router.post('/login', usersCtrl.signup);



/*----------Protected Routes------------------*/






module.exports = router;