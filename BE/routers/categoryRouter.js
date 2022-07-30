const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router
  .route('/')
  .post(categoryController.createCategory)
  .get(categoryController.getAllCategory);

router
  .route('/:id')
  .delete(categoryController.deleteCategory)
  .get(categoryController.getDetailCategory)
  .patch(categoryController.updateCategory);
module.exports = router;
