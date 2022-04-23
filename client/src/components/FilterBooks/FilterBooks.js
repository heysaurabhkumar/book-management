import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Typography, Grid, TextField } from "@mui/material";
import sagaActions from "../../saga/sagaActions";

const FilterBooks = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    title: "",
    author: "",
    startYearOfPublication: "",
    endYearOfPublication: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleFilter = () => {
    console.log(filter);
    dispatch({
      type: sagaActions.FILTER_BOOKS,
      payload: filter,
    });
  };

  return (
    <>
      <Typography variant="h6">Filter Books</Typography>
      <Grid container spacing={3}>
        <Grid item>
          <TextField
            name="title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={handleChange}
            value={filter.title}
          />
        </Grid>

        <Grid item>
          <TextField
            name="author"
            id="outlined-basic"
            label="Author"
            variant="outlined"
            onChange={handleChange}
            value={filter.author}
          />
        </Grid>

        <Grid item>
          <TextField
            name="startYearOfPublication"
            id="outlined-basic"
            label="Start Year of Publication"
            variant="outlined"
            onChange={handleChange}
            value={filter.startYearOfPublication}
          />
        </Grid>

        <Grid item>
          <TextField
            name="endYearOfPublication"
            id="outlined-basic"
            label="End Year of Publication"
            variant="outlined"
            onChange={handleChange}
            value={filter.endYearOfPublication}
          />
        </Grid>

        <Grid item>
          <Button
            type="button"
            onClick={handleFilter}
            variant="contained"
            color="primary"
          >
            Filter
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FilterBooks;
