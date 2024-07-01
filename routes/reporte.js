var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/', async function (req, res, next) {

  var emp = await consultas.getEmp();
  var usuario = req.session.nombre;

  if (req.session.id_usuario) {
    res.render('reporte', {
      layout: 'layout',
      emp,
      usuario
    });
  } else {
    res.redirect("inicio")
  }

});


router.post('/', async function (req, res, next) {

  var usuario = req.session.nombre;
  emp = await consultas.getEmpleado(id);

  if (emp[0] == null) {

    res.render('reportee', {
      layout: 'layout',
      emp,
      usuario
    })
  } else {

    res.render('reporte', {
      layout: 'layout',
      usuario
    });
  }

})
module.exports = router;