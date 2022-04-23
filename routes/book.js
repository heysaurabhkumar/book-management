const express = require("express");
const router = express.Router();

const { book } = require("../controllers");

const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");

router.get("/", (req, res) => {
  res.json({ sucess: true, message: "Welcome to book management book route" });
});

router.get("/get-all-books", verifyToken, book.getAllBooks);

router.post("/add-book", verifyToken, isAdmin, book.addBook);
router.delete("/delete-book/:id", verifyToken, isAdmin, book.deleteBook);
router.put(
  "/increase-book-copies/:id",
  verifyToken,
  isAdmin,
  book.increaseBookCopies
);
router.put(
  "/decrease-book-copies/:id",
  verifyToken,
  isAdmin,
  book.decreaseBookCopies
);

router.put("/issue-book/:id", verifyToken, book.issueBook);
router.post("/filter-books", book.filterBooks);

module.exports = router;
