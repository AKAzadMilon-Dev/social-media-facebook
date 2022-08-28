const express = require('express');
const router = express.Router();

router.get('/user', function(req, res){
    res.send("Hello MERN");
});

module.exports = router;