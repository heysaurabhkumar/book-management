import { takeLatest, all, put } from "redux-saga/effects";
import book from "../api/book";
import sagaActions from "./sagaActions";
import { booksActions } from "../redux/books";

function* addBook(action) {
  try {
    const { data } = yield book.addBook(action.payload);
    console.log(data);
    yield put(booksActions.addBooks(data.book));
  } catch (error) {
    console.log(error);
  }
}

function* getAllBooks() {
  try {
    const { data } = yield book.getAllBooks();
    console.log(data);
    yield put(booksActions.setBooks(data.books));
  } catch (error) {
    console.log(error);
  }
}

function* deleteBook(action) {
  try {
    const { data } = yield book.deleteBook(action.payload);
    console.log(data);
    yield put(booksActions.deleteBooks(data.book._id));
  } catch (error) {
    console.log(error);
  }
}

function* increaseBookCopies(action) {
  try {
    const { data } = yield book.increaseBookCopies(action.payload);
    console.log(data);
    yield put(booksActions.increaseBooks(data.book));
  } catch (error) {
    console.log(error);
  }
}

function* decreaseBookCopies(action) {
  try {
    const { data } = yield book.decreaseBookCopies(action.payload);
    console.log(data);
    yield put(booksActions.decreaseBooks(data.book));
  } catch (error) {
    console.log(error);
  }
}

function* issueBook(action) {
  try {
    const { data } = yield book.issueBook(action.payload);
    console.log(data);
    yield put(booksActions.issueBooks(data.book));
  } catch (error) {
    console.log(error);
  }
}

function* filterBooks(action) {
  try {
    const { data } = yield book.filterBooks(action.payload);
    console.log(data);
    yield put(booksActions.setBooks(data.books));
  } catch (error) {
    console.log(error);
  }
}

export default function* bookSaga() {
  yield all([
    yield takeLatest(sagaActions.ADD_BOOK, addBook),
    yield takeLatest(sagaActions.GET_ALL_BOOKS, getAllBooks),
    yield takeLatest(sagaActions.DELETE_BOOK, deleteBook),
    yield takeLatest(sagaActions.INCREASE_BOOK_COPIES, increaseBookCopies),
    yield takeLatest(sagaActions.DECREASE_BOOK_COPIES, decreaseBookCopies),
    yield takeLatest(sagaActions.ISSUE_BOOK, issueBook),
    yield takeLatest(sagaActions.FILTER_BOOKS, filterBooks),
  ]);
}
