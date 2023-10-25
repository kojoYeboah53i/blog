const router = require('express').Router();
const knex = require('../../config/database')

const User = require('../controllers/user');


router.post('/login', (res, req) => {User.loginUser()});


router.get('sandbox', (res, req) => {
  res.send('this is a sandbox')
});





module.exports = router;