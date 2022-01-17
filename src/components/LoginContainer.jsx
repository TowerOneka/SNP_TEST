import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import Login from "./Login/Login";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const handleSubmitSignIn = useCallback(
    (username, password) => {
      dispatch({
        type: "LOG_IN",
        payload: { username, password },
      });
    },
    [dispatch]
  );
  return <Login handleSubmitSignIn={handleSubmitSignIn} />;
};

export default LoginContainer;
