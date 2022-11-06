const route = require('express').Router();


// ----- ===== Controllers
const userController = require('../controller/userController');
// ----- ===== Controllers


// ----- ===== Routes
route.post('/user', userController.userInsert);
// ----- ===== Routes




module.exports = route