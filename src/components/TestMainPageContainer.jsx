import React, { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TestMainPage from "./TestMainPage";
import {
  selectCurrentPage,
  selectPagesCount,
  selectTestError,
  selectTestFetching,
  selectTestList,
} from "./../redux/selectors/testListSelector";
import { useDispatch } from "react-redux";
import { selectIsAdmin } from "./../redux/selectors/authSelector";
import { useLocation, useHistory } from "react-router-dom";

const TestMainPageContainer = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector(selectIsAdmin);
  const testList = useSelector(selectTestList);
  const pagesCount = useSelector(selectPagesCount);
  const currentPage = useSelector(selectCurrentPage);

  const [searchParams, setSearchParams] = useState("");
  const [selectedPage, setSelectedPage] = useState(currentPage);
  const [sort, setSort] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchParams) {
      params.append("search", searchParams);
    } else {
      params.append("search", "");
    }
    if (selectedPage) {
      console.log(selectedPage);
      params.append("page", selectedPage);
    } else {
      params.delete("page");
    }
    if (sort) {
      params.append("sort", "created_at_asc");
    } else {
      params.append("sort", "created_at_desc");
    }
    history.push({ search: params.toString() });
  }, [searchParams, selectedPage, sort, history]);

  const handleChange = useCallback(
    (e) => {
      setSearchParams(e.target.value);
    },
    [setSearchParams]
  );
  const handleChangeSort = useCallback(() => {
    setSort(!sort);
  });
  const handleChangePage = useCallback(
    (page) => {
      setSelectedPage(page);
    },
    [setSelectedPage]
  );

  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const handleCreateTest = useCallback(() => {
    dispatch({ type: "CREATE_TEST", payload: { title: "empty" } });
  }, [dispatch]);

  const error = useSelector(selectTestError);
  const isFetching = useSelector(selectTestFetching);

  return (
    <TestMainPage
      sort={sort}
      pages={pages}
      currentPage={currentPage}
      searchParams={searchParams}
      handleChange={handleChange}
      handleChangePage={handleChangePage}
      handleChangeSort={handleChangeSort}
      error={error}
      isAdmin={isAdmin}
      testList={testList}
      handleCreateTest={handleCreateTest}
      isFetching={isFetching}
    />
  );
};

export default TestMainPageContainer;
