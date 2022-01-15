import React, { useCallback } from "react";
import Registry from "./Registry/Registry";
import { useDispatch } from "react-redux";

const RegistryContainer = () => {
  const dispatch = useDispatch();

  const handleSubmitSignUp = useCallback(
    (login, password, comfirmPassword, isAdmin) => {
      dispatch({
        type: "SIGN_UP",
        payload: { login, password, comfirmPassword, isAdmin },
      });
    },
    [dispatch]
  );

  return <Registry handleSubmitSignUp={handleSubmitSignUp} />;
};

export default RegistryContainer;
