var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/', async function (req, res, next) {

  var emp = await consultas.getEmp();
  var usuario = req.session.nombre;

  if (req.session.id_usuario) {
    res.render('cargar', {
      layout: 'layout',
      emp,
      usuario
    });
  } else {
    res.redirect("inicio")
  }

});




module.exports = router;