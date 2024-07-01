var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/:id', async function (req, res, next) {

  var usuario = req.session.nombre;
  
  const emp = await consultas.getEmpleado2(req.params.id);
  const carg = await consultas.getCargas(emp.dni);


  if (req.session.id_usuario) {
    res.render('reportee', {
      layout: 'layout',
      usuario,
      carg,
      emp
    });
  } else {
    res.redirect("inicio")
  }

});


module.exports = router;