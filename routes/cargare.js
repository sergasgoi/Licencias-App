var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/:id', async function (req, res, next) {

  var usuario = req.session.nombre;
  const empl = await consultas.getEmpleado2(req.params.id);

  if (req.session.id_usuario) {
    res.render('cargare', {
      layout: 'layout',
      usuario,
      empl
    });
  } else {
    res.redirect("inicio")
  }

});



router.post('/', async function (req, res, next) {

  var usuario = req.session.nombre;

  try {
    if (req.body.name != "" && req.body.tipo != "" && req.body.dni != "" && req.body.dateini != "" && req.body.datefin != "") {

      await consultas.agregarCarga(req.body.tipo, req.body.dni, req.session.id_usuario, req.body.dateini, req.body.datefin);

      res.redirect("/cargar")


    } else {
      const empl = await consultas.getEmpleado2(req.body.id);
      res.render('cargare', {
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
    res.render('cargare', {
      layout: 'layout',
      error: true,
      message: 'No se Agrego',
      usuario,
      empl
    });
  }
});


module.exports = router;