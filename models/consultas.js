var pool = require('./bd');
var md5 = require('md5')


async function getUser(user, password){
    try{
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var datos = await pool.query(query, [user, md5(password)]);
        return datos[0];
    }catch(error){
        console.log(error);
    }

}

async function getEmpleado(dni) {

    var query = 'select * from empleados where dni = ?';
    var datos = await pool.query(query, [dni]);
    return datos;

}

async function getEmpleado2(id) {

    var query = 'SELECT *, DATE_FORMAT(fecha_ingreso, "%Y-%m-%d") AS fecha_i FROM empleados where id = ?';
    var datos = await pool.query(query, [id]);
    return datos[0];

}

async function agregarEmpleado(name, dni, date) {

    var query = 'insert into empleados(nombre, dni, fecha_ingreso) values(?, ?, ?)';
    var datos = await pool.query(query, [name, dni, date]);
    return datos;
}

async function getEmp() {

    var query = 'select * from empleados';
    var datos = await pool.query(query);
    return datos;

}

async function agregarCarga(tipo, dni, id_user, fechaini, fechafin) {

    var query = 'insert into cargas(tipo, id_emp, id_user, fecha_ini, fecha_fin) values(?, ?, ?, ?, ?)';
    var datos = await pool.query(query, [tipo, dni, id_user, fechaini, fechafin]);
    return datos;
}

async function getCargas(id) {

    var query = 'SELECT *, DATE_FORMAT(fecha_ini, "%d/%m/%y") AS fecha_i, DATE_FORMAT(fecha_fin, "%d/%m/%y") AS fecha_f FROM cargas where id_emp=?';
    var datos = await pool.query(query, [id]);
    return datos;

}

async function editEmpleado(obj, id) {

    var query = 'update empleados set ? where id=?';
    var datos = await pool.query(query, [obj, id]);
    return datos;

}

async function deleteEmpleado(id) {
    var query = 'delete from empleados where id=?';
    var datos = await pool.query(query, [id]);
    return datos;
}

async function deleteCargas(id) {
    var query = 'delete from cargas where id_emp=?';
    var datos = await pool.query(query, [id]);
    return datos;
}

module.exports = { getUser, getEmpleado, getEmpleado2, agregarEmpleado, getEmp, agregarCarga, getCargas, editEmpleado, deleteEmpleado, deleteCargas};