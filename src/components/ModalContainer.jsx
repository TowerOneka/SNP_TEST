import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { openClose } from "../redux/reducers/modalReducer";
import Modal from "./Modal/Modal";
import { modalSelector } from "./../redux/selectors/modalSelector";
import { useSelector } from "react-redux";

const ModalContainer = () => {
  const modal = useSelector(modalSelector);
  const dispatch = useDispatch();
  let handleOpenClose = useCallback(() => {
    dispatch(openClose());
  }, [dispatch]);
  return <Modal handleOpenClose={handleOpenClose} visible={modal.isOpen} />;
};

export default ModalContainer;
