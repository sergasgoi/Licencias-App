var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/', async function (req, res, next) {

  var usuario = req.session.nombre;

  if (req.session.admin == 1) {
    res.render('cargaremp', {
      layout: 'layout',
      usuario
    });
  } else {
    res.redirect("inicio")
  }

});


router.post('/', async function (req, res, next) {

  var usuario = req.session.nombre;

  try {
    if (req.body.name != "" && req.body.dni != "" && req.body.date != "") {

      var empleado = null

      empleado = await consultas.getEmpleado(req.body.dni);

      if (empleado[0] == null) {
        let name = req.body.name.split(' ').join('_')
        await consultas.agregarEmpleado(name, req.body.dni, req.body.date);
        res.redirect("/cargaremp")

      } else {

        res.render('cargaremp', {
          layout: 'layout',
          error: true,
          message: 'Ya existe un producto con ese nombre',
          usuario
        });

      }

    } else {
      res.render('cargaremp', {
        layout: 'layout',
        error: true,
        message: 'Todos los campos son requeridos',
        usuario
      });
    }
  } catch (error) {
    console.log(error);
    res.render('cargaremp', {
      layout: 'layout',
      error: true,
      message: 'No se Agrego',
      usuario
    });
  }
});


module.exports = router;