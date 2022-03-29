const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('From the router API')
})


module.exports = router;
