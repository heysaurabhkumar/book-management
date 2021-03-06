import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(user);
    dispatch({ type: "REGISTER", payload: user });
    navigate("/login");
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            autoComplete="given-name"
            name="name"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            onChange={handleChange}
            value={user.name}
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={handleChange}
            value={user.email}
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            value={user.password}
            autoComplete="new-password"
          />
          <RadioGroup
            name="isAdmin"
            value={user.isAdmin}
            onChange={handleChange}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="User"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="Admin"
                />
              </Grid>
            </Grid>
          </RadioGroup>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Register;
