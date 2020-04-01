var express = require('express');
var router = express.Router();
const verVideoController = require ('../controllers/verVideo.controller'); 
/**
 * POST Route to create user
 */
router.post ('/', verVideoController.createverVideo);
/**
 * GET Route to list all users
 */
router.get('/', verVideoController.findAllverVideos);


 // Export router
module.exports = router;