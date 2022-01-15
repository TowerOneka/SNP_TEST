import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import Login from "./Login/Login";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const handleSubmitSignIn = useCallback(
    (login, password) => {
      dispatch({
        type: "LOG_IN",
        payload: { login, password },
      });
    },
    [dispatch]
  );
  return <Login handleSubmitSignIn={handleSubmitSignIn} />;
};

export default LoginContainer;
