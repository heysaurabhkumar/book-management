import axios from "axios";

export default {
  addBook(bookData) {
    return axios.post("/v1/book/add-book", bookData, {
      withCredentials: true,
    });
  },
  getAllBooks() {
    return axios.get("/v1/book/get-all-books", {
      withCredentials: true,
    });
  },
  deleteBook(id) {
    return axios.delete(`/v1/book/delete-book/${id}`, {
      withCredentials: true,
    });
  },
  increaseBookCopies(id) {
    return axios.put(`/v1/book/increase-book-copies/${id}`, {
      withCredentials: true,
    });
  },
  decreaseBookCopies(id) {
    return axios.put(`/v1/book/decrease-book-copies/${id}`, {
      withCredentials: true,
    });
  },
};
