const express = require('express');

const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const router = express.Router();

// const passport = require('passport');

// const successLoginURL = 'http://localhost:3000';
// const errorLoginURL = 'http://localhost:3000/login';

router.post('/createUser', authController.signup);
router.post('/login', authController.login);
router.route('/').get(userController.getAllUsers);
// .post(userController.createUser)
// .put(userController.updateUser);

router
  .route('/:id')
  .get(userController.getDetailUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

router.patch(
  '/updateMe',
  authController.protect,
  userController.uploadUserPhoto,
  userController.updateMe
);

router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

module.exports = router;
