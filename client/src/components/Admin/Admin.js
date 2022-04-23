import React from "react";
import { useSelector, useDispatch } from "react-redux";
import sagaActions from "../../saga/sagaActions";

import AddBook from "../AddBook";

import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
} from "@mui/material";

const Admin = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user);
  const [viewAddBook, setViewAddBook] = React.useState(false);
  const books = useSelector((state) => state.books);

  const handleDelete = (id) => {
    console.log(id);
    dispatch({
      type: sagaActions.DELETE_BOOK,
      payload: id,
    });
  };

  const handleIncrease = (id) => {
    console.log(id);
    dispatch({
      type: sagaActions.INCREASE_BOOK_COPIES,
      payload: id,
    });
  };

  const handleDecrease = (id) => {
    console.log(id);
    dispatch({
      type: sagaActions.DECREASE_BOOK_COPIES,
      payload: id,
    });
  };

  return (
    <>
      <Typography variant="h4">Admin</Typography>
      <Typography variant="h5">Welcome, {name}</Typography>

      <Button variant="contained" onClick={() => setViewAddBook(!viewAddBook)}>
        {viewAddBook ? "Hide Add Book" : "Add Book"}
      </Button>
      {viewAddBook && <AddBook />}
      {books.length > 0 ? (
        <Typography variant="h5">Books</Typography>
      ) : (
        <Typography variant="h5">No Books</Typography>
      )}
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item key={book._id}>
            <Card key={book._id} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {book.title}
                </Typography>
                <Typography variant="body2" component="p">
                  Author: {book.author}
                </Typography>
                <Typography variant="body2" component="p">
                  Year of Publication: {book.yearOfPublication}
                </Typography>
                <Typography variant="body2" component="p">
                  Number of copies: {book.noOfCopies}
                </Typography>
                <CardActions>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "red",
                      borderColor: "red",
                      "&:hover": {
                        backgroundColor: "red",
                        color: "white",
                      },
                    }}
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => handleDecrease(book._id)}
                  >
                    - Copy
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => handleIncrease(book._id)}
                  >
                    + Copy
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Admin;
