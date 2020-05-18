var express = require('express');
var router = express.Router();
const citiesController = require ('../controllers/cities.controller'); 

/**
 * GET Route to list all citiess
 */
router.get('/', citiesController.findAllcities);
/**
 * GET Route to find cities by id
 */
router.get('/:idCiudad', citiesController.findOnecities);
/**
 * cities Route to create cities
 */
router.post ('/', citiesController.createcities);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idCiudad',citiesController.updatecities);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:idCiudad',citiesController.deletecitiesBycities);
/**
 * DELETE Route to delete all users
 */
router.delete ('/',citiesController.deleteAllcitiess);

module.exports = router;
