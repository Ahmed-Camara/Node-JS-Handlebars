const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();


router
    .route('/')
    .get(studentController.homePage)

router
    .route('/student')
    .post(studentController.createStudent);
router
    .route('/student/delete/:id')
    .get(studentController.deleteStudent);

router
    .route('/student/get/:id')
    .get(studentController.getStudent);
router
    .route('/student/update/:id')
    .post(studentController.updateStudent);
/*
router
    .route('/')
    .get(studentController.homePage)*//*
router
    .route('/')
    .get(studentController.getAllStudent)
    .post(studentController.createStudent);

router
    .route('/:id')
    .get(studentController.getStudent)
    .patch(studentController.updateStudent)
    .delete(studentController.deleteStudent);*/

module.exports = router;