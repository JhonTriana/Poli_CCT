var express = require('express');
var router = express.Router();
const solicitudIngresoController = require ('../controllers/solicitudIngreso.controller'); 

/**
 * GET Route to list all solicitudes De 
 */
router.get('/', solicitudIngresoController.getAllSolicitudesIngreso);

module.exports = router;