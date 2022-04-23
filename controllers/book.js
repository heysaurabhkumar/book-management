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

const issueBook = catchAsync(async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByIdAndUpdate(
    id,
    {
      $inc: { issueCount: 1 },
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

const filterBooks = catchAsync(async (req, res) => {
  const { title, author, startYearOfPublication, endYearOfPublication } =
    req.body;
  const filter = {};
  if (title) {
    filter.title = { $regex: title, $options: "i" };
  }
  if (author) {
    filter.author = { $regex: author, $options: "i" };
  }
  if (startYearOfPublication) {
    filter.yearOfPublication = { $gte: startYearOfPublication };
  }
  if (endYearOfPublication) {
    filter.yearOfPublication = { $lte: endYearOfPublication };
  }

  const books = await Book.find(filter);

  res.status(httpStatus.OK).json({
    success: true,
    message: "Books fetched successfully",
    books,
  });
});

module.exports = {
  addBook,
  getAllBooks,
  deleteBook,
  increaseBookCopies,
  decreaseBookCopies,
  issueBook,
  filterBooks,
};
