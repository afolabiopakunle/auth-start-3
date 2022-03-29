const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.send('From the router API')
});

router.post('/register', (req, res) => {
   let userData = req.body;
   let user = new User(userData);
   user.save((err, registeredUser) => {
       if(err) {
           console.log(err)
       } else {
           res.status(200).send(registeredUser)
       }
   })
} )


module.exports = router;
