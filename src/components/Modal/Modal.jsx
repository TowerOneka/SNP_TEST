import React, { useCallback, useEffect } from "react";
import s from "./Modal.module.scss";

const Modal = (props) => {
  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  const onKeydown = useCallback((e) => {
    if (props.visible) {
      switch (e.key) {
        case "Escape":
          props.handleOpenClose();
      }
    }
  });
  if (!props.visible) return null;
  return (
    <div className={s.modal}>
      <div className={s.modalDialog}>
        <div className={s.modalHeader}>
          <p className={s.modalTitle}></p>
          <span className={s.modalClose} onClick={props.handleOpenClose}>
            &times;
          </span>
        </div>
        <div className={s.modalContent}>
          <form className={s.form}>
            <button type='submit'>Save</button>
            <button onClick={props.handleOpenClose}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
