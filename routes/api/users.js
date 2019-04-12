const express = require('express');
const router =  express.Router();
const usersCtrl  = require('../../controllers/users');

/*----------Public Routes---------------------*/

// thought: this may not be the right path structure. Login + Signup are occurring on the same endpoint rn
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);



/*----------Protected Routes------------------*/






module.exports = router;