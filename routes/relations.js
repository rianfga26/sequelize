var express = require('express');
var users = require('../models/users');
var router = express.Router();


router.get('/', (req,res,next) => {
    users.findAll({
        include : [product]
    })
    .then(data => {
        console.log(data)
        res.json({
            data : data
        })
    }).catch(err => console.log(err))
})

module.exports = router