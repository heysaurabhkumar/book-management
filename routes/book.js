const express = require("express");
const router = express.Router();

const { book } = require("../controllers");

router.get("/", (req, res) => {
  res.json({ sucess: true, message: "Welcome to book management book route" });
});

router.post("/add-book", book.addBook);
router.get("/get-all-books", book.getAllBooks);
router.delete("/delete-book/:id", book.deleteBook);
router.put("/increase-book-copies/:id", book.increaseBookCopies);
router.put("/decrease-book-copies/:id", book.decreaseBookCopies);

module.exports = router;
