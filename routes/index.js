var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET home page. */
router.get('/:kolom', function(req, res, next) {
    model.findAll({
      group : [req.params.kolom]
    })
    .then(data => {
      res.json({
        status: 200,
        data : data
      })
    })
      .catch(err => {
        res.sendStatus(500)
      })
  
});
router.post('/', (req,res,next) => {
    model.create({
      id_user : '',
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      level : req.body.level
    }).then(data => {
      if (data) {
        res.json({
          status : 200,
          message : "success create new data"
        });
      }else{
        res.status(400).send('Error in insert new record');
      }
    })
})  

router.put('/', (req,res,next) => {
  model.update({
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    level : req.body.level
  }, {
    where : {
      user_id : req.body.id
    }
  })
  .then(data => {
    res.json({
      siswa_id : req.body.id,
      status: 200,
      message : "success"
    })
  }).catch(err => {
    res.sendStatus(500);
  })
})

router.delete('/', (req,res,next) => {
  model.destroy({
    where : {
      user_id : req.params.id
    }
  }).then(data => {
    res.json({
      siswa_id : req.query.id,
      status : 200,
      message : "success"
    })
  }).catch(err => {
    res.sendStatus(500);
  })
})

router.get("/:id", (req,res,next) => {
    model.findAll({
      where: {
        user_id: req.params.id
      }
    }).then(data => {
      if (data.length === 0) {
        res.send('bad request because id not found')
      }
      res.json({
        id_user : req.params.id,
        status: 200,
        data : data
      })
    }).catch(err => {
      res.sendStatus(400)
    })
})
router.get('/desc/:kolom', (req,res,next) => {
    model.findAll({
      order: [
        [req.params.kolom, 'DESC']
      ]
    }).then(data => {
      res.json({
        mode : "DESC / Descending",
        status: 200,
        data : data
      })
    }).catch(err => res.send("error : ", err))
})

router.get('/asc/:kolom', (req, res, next) => {
  model.findAll({
    order: [[req.params.kolom, 'asc']]
  }).then(data => {
    res.json({
      mode: "ASC / Ascending",
      status: 200,
      data: data
    })
  }).catch(err => res.send("error : ", err))
})


module.exports = router;
