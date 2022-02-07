import React, { useCallback, useState } from "react";

import TestEdit from "./TestEdit/TestEdit";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentTest } from "../redux/selectors/testListSelector";
import { openClose } from "../redux/reducers/modalReducer";
let TestEditContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [visible, setVisible] = useState(false);

  const openQuestion = () => {
    setVisible(true);
  };
  const closeQuestion = () => {
    setVisible(false);
  };

  const handleCreateQuestion = useCallback(
    (title, question_type, answer) => {
      dispatch({
        type: "CREATE_QUESTION",
        test_id: params.testId,
        title: title,
        question_type: question_type,
        answer: answer,
      });
    },
    [dispatch, params.testId]
  );
  const handleOpenAcceptSave = useCallback(
    (deleteType, id, title, question_type, answer) => {
      dispatch(
        openClose({
          type: "accept",
          id: id,
          deleteType: deleteType,
          delete: false,
          title: title,
          question_type: question_type,
          answer: answer,
        })
      );
    },
    [dispatch]
  );
  const handleOpenAcceptDelete = useCallback(
    (deleteType, id) => {
      dispatch(
        openClose({
          type: "accept",
          id: id,
          deleteType: deleteType,
          delete: true,
        })
      );
    },
    [dispatch]
  );
  const current_test = useSelector(selectCurrentTest);
  return (
    <TestEdit
      test={current_test}
      visible={visible}
      openQuestion={openQuestion}
      closeQuestion={closeQuestion}
      handleCreateQuestion={handleCreateQuestion}
      handleOpenAcceptDelete={handleOpenAcceptDelete}
      handleOpenAcceptSave={handleOpenAcceptSave}
    />
  );
};

export default TestEditContainer;
