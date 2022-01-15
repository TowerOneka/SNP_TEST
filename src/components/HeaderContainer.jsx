import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openClose } from "../redux/reducers/modalReducer";
import Header from "./Header";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  let handleOpenClose = useCallback(() => {
    dispatch(openClose());
  }, [dispatch]);
  return <Header handleOpenClose={handleOpenClose} />;
};

export default HeaderContainer;
