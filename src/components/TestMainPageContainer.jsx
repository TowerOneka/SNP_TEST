import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import TestMainPage from "./TestMainPage";
import {
  selectTestError,
  selectTestFetching,
  selectTestList,
} from "./../redux/selectors/testListSelector";
import { useDispatch } from "react-redux";
import { selectIsAdmin } from "./../redux/selectors/authSelector";

const TestMainPageContainer = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector(selectIsAdmin);
  const testList = useSelector(selectTestList);
  const handleCreateTest = useCallback(() => {
    dispatch({ type: "CREATE_TEST", payload: { title: "empty" } });
  }, [dispatch]);
  const error = useSelector(selectTestError);
  const isFetching = useSelector(selectTestFetching);

  return (
    <TestMainPage
      error={error}
      isAdmin={isAdmin}
      testList={testList}
      handleCreateTest={handleCreateTest}
      isFetching={isFetching}
    />
  );
};

export default TestMainPageContainer;
