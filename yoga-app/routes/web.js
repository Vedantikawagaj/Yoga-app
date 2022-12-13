const express = require('express');
const router = express.Router();
const AuthController = require('../app/controllers/AuthController');
const BatchController = require('../app/controllers/BatchController');
const ProfileController = require('../app/controllers/ProfileController');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

router.get('/batch', BatchController.getBatch);
router.post('/batch', BatchController.postBatch);
router.get('/all-batch/', BatchController.getAllBatch);

router.get('/profile', ProfileController.getProfile);
router.patch('/profile', ProfileController.updateProfile);
router.get('/payment', ProfileController.completePayment);

module.exports = router;