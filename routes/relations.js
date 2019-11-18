var express = require('express');
var index = require('../models/index');
var router = express.Router();


router.get('/', (req,res,next) => {
    index.users.findAll()
    .then(data => {
        console.log(data)
        res.json({
            data : data
        })
    }).catch(err => console.log(err))
})

module.exports = router