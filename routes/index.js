var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');


router.get('/', function (req, res, next) {

    if (req.session.id_usuario) {
        res.redirect("/inicio")
    } else {
        res.render('login', {
            layout: 'layout'
        });
    }

});


router.get('/salir', async function (req, res, next) {

    req.session.destroy();
    res.redirect('/');
})




router.get("/borrarempe/:id", async function (req, res, next) {

    const empl = await consultas.getEmpleado2(req.params.id);

    if (req.session.id_usuario) {
        await consultas.deleteEmpleado(empl.id)
        await consultas.deleteCargas(empl.dni)
        res.redirect('/inicio')
    } else {
        res.redirect('/inicio')
    }


})





router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;
        var data = await consultas.getUser(usuario, password);

        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            req.session.admin = data.admin
            req.session.turno = 0
            req.session.total = 0
            res.redirect('/inicio');
        } else {
            res.render('login', {
                layout: 'layout',
                error: true
            });
        }
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;

