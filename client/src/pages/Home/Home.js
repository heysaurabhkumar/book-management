import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginTop: 8,
        }}
      >
        Welcome to Book Management
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        This is a simple application to manage your books.
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          marginTop: 8,
          textAlign: "center",
        }}
      >
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
