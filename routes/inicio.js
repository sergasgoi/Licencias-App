var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/', async function (req, res, next) {

  var usuario = req.session.nombre;

  if (req.session.turno == 0) { 
    if (req.session.admin == 0) {
      res.render('iniciouser', {
        layout: 'layout',
        usuario
      });
    } else {
      res.render('inicioadm', {
        layout: 'layout',
        usuario
      });
    }
  } else {
    res.redirect('/')
  }


});



module.exports = router;