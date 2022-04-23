import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import sagaActions from "../../saga/sagaActions";

import Admin from "../../components/Admin";
import User from "../../components/User";

import { Button, Typography } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, isAdmin } = useSelector((state) => state.user);

  const handleLogout = () => {
    navigate("/");
    dispatch({
      type: sagaActions.LOGOUT,
    });
  };

  useEffect(() => {
    dispatch({
      type: sagaActions.GET_ALL_BOOKS,
    });
  }, []);
  return (
    <>
      <Typography variant="h4">{isAdmin ? "Admin" : "User"}</Typography>
      <Typography variant="h5">Welcome, {name}</Typography>
      <Button
        type="button"
        variant="outlined"
        color="error"
        onClick={handleLogout}
      >
        Logout
      </Button>
      {isAdmin ? <Admin /> : <User />}
    </>
  );
};

export default Dashboard;
