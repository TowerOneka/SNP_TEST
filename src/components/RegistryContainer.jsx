import React, { useCallback } from "react";
import Registry from "./Registry/Registry";
import { useDispatch } from "react-redux";

const RegistryContainer = () => {
  const dispatch = useDispatch();

  const handleSubmitSignUp = useCallback(
    (username, password, password_confirmation, is_admin) => {
      dispatch({
        type: "SIGN_UP",
        payload: { username, password, password_confirmation, is_admin },
      });
    },
    [dispatch]
  );

  return <Registry handleSubmitSignUp={handleSubmitSignUp} />;
};

export default RegistryContainer;
