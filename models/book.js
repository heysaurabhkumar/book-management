const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  yearOfPublication: {
    type: Number,
    required: true,
  },
  noOfCopies: {
    type: Number,
    required: true,
  },
  issueCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Book", bookSchema);
