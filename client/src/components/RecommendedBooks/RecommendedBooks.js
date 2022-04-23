import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import book from "../../api/book";

import { Typography, Card, CardContent } from "@mui/material";

const RecommendedBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await book.getReccomendedBooks();
        setBooks(response.data.books);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <Carousel showArrows autoPlay showThumbs={false}>
        {books.map((book) => (
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
                Number of copies available: {book.noOfCopies - book.issueCount}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </>
  );
};

export default RecommendedBooks;
