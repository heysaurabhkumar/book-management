import React from "react";
import { useSelector, useDispatch } from "react-redux";
import sagaActions from "../../saga/sagaActions";

import FilterBooks from "../FilterBooks";
import RecommendedBooks from "../RecommendedBooks";

import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
} from "@mui/material";

const User = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);

  const handleIssue = (id) => {
    console.log(id);
    dispatch({
      type: sagaActions.ISSUE_BOOK,
      payload: id,
    });
  };

  return (
    <>
      <RecommendedBooks />
      <FilterBooks />
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
                <Typography variant="body2" component="p">
                  Number of copies issued: {book.issueCount}
                </Typography>
                <Typography variant="body2" component="p">
                  Number of copies available:{" "}
                  {book.noOfCopies - book.issueCount}
                </Typography>
                <CardActions>
                  <Button
                    type="button"
                    variant="outlined"
                    color="success"
                    onClick={() => handleIssue(book._id)}
                  >
                    Issue
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

export default User;
