const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please tell us category'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Please tell us category slug'],
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Category = mongoose.model('Category', categorySchema);
categorySchema.virtual('subcategorys', {
  ref: 'SubCategory',
  foreignField: 'categoryId',
  localField: '_id',
});

module.exports = Category;
