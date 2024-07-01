var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/:id', async function (req, res, next) {

  var usuario = req.session.nombre;
  const empl = await consultas.getEmpleado2(req.params.id);

  if (req.session.id_usuario) {
    res.render('editarempe', {
      layout: 'layout',
      usuario,
      empl
    });
  } else {
    res.redirect("inicio")
  }

});



router.post('/', async function (req, res, next) {

  var usuario = req.session.nombre

  try {
    if (req.body.nombre != "" && req.body.dni != "" && req.body.fecha_ingreso != "") {

      await consultas.editEmpleado(req.body, req.body.id);

      res.redirect("/editaremp")

    } else {
      const empl = await consultas.getEmpleado2(req.body.id);
      res.render('editarempe', {
        layout: 'layout',
        error: true,
        message: 'Todos los campos son requeridos',
        usuario,
        empl
      });
    }
  } catch (error) {
    console.log(error);
    const empl = await consultas.getEmpleado2(req.body.id);
    res.render('editarempe', {
      layout: 'layout',
      error: true,
      message: 'No se edito',
      usuario,
      empl
    });
  }

});


module.exports = router;