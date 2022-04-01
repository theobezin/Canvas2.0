const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student.controller');

// get all users
router.get('/', studentController.getStudentList);

//get user by ID
router.get('/:id', studentController.getStudentByID);



module.exports = router;