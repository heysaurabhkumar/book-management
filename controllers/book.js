const httpStatus = require("http-status");
const { catchAsync } = require("../utils");

const { Book } = require("../models");

const addBook = catchAsync(async (req, res) => {
  const { title, author, yearOfPublication, noOfCopies } = req.body;

  const book = await Book.create({
    title,
    author,
    yearOfPublication,
    noOfCopies,
  });

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Book created successfully",
    book,
  });
});

const getAllBooks = catchAsync(async (req, res) => {
  const books = await Book.find();

  res.status(httpStatus.OK).json({
    success: true,
    message: "Books fetched successfully",
    books,
  });
});

const deleteBook = catchAsync(async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByIdAndDelete(id);

  if (!book) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: "Book not found",
    });
  }

  res.status(httpStatus.OK).json({
    success: true,
    message: "Book deleted successfully",
    book,
  });
});

const increaseBookCopies = catchAsync(async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByIdAndUpdate(
    id,
    {
      $inc: { noOfCopies: 1 },
    },
    { new: true }
  );

  if (!book) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: "Book not found",
    });
  }

  res.status(httpStatus.OK).json({
    success: true,
    message: "Book updated successfully",
    book,
  });
});

const decreaseBookCopies = catchAsync(async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByIdAndUpdate(
    id,
    {
      $inc: { noOfCopies: -1 },
    },
    { new: true }
  );

  if (!book) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: "Book not found",
    });
  }

  res.status(httpStatus.OK).json({
    success: true,
    message: "Book updated successfully",
    book,
  });
});

module.exports = {
  addBook,
  getAllBooks,
  deleteBook,
  increaseBookCopies,
  decreaseBookCopies,
};
