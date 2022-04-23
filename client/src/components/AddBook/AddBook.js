import React, { useState } from "react";
import { useDispatch } from "react-redux";
import sagaActions from "../../saga/sagaActions";

import { Box, TextField, Button } from "@mui/material";

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: "",
    author: "",
    yearOfPublication: "",
    noOfCopies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (
      book.title &&
      book.author &&
      book.yearOfPublication &&
      book.noOfCopies
    ) {
      console.log(book);
      dispatch({
        type: sagaActions.ADD_BOOK,
        payload: book,
      });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
        <TextField
          name="title"
          onChange={handleChange}
          value={book.title}
          label="Title"
          variant="outlined"
        />
        <TextField
          name="author"
          onChange={handleChange}
          value={book.author}
          label="Author"
          variant="outlined"
        />
        <TextField
          name="yearOfPublication"
          label="Year Of Publication"
          onChange={handleChange}
          value={book.yearOfPublication}
          variant="outlined"
          type="number"
        />
        <TextField
          name="noOfCopies"
          label="Number Of Copies"
          onChange={handleChange}
          value={book.noOfCopies}
          variant="outlined"
          type="number"
        />
        <Button type="button" variant="contained" onClick={handleSubmit}>
          Add Book +
        </Button>
      </Box>
    </>
  );
};

export default AddBook;
