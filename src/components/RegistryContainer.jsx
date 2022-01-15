import React from "react";
import Registry from "./Registry/Registry";
import { useDispatch } from "react-redux";

const RegistryContainer = () => {
  const dispatch = useDispatch();

  return <Registry />;
};

export default RegistryContainer;
