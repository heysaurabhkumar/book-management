import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import sagaActions from "../../saga/sagaActions";

import Admin from "../../components/Admin";
import User from "../../components/User";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch({
      type: sagaActions.GET_ALL_BOOKS,
    });
  }, []);
  return <div>{isAdmin ? <Admin /> : <User />}</div>;
};

export default Dashboard;
