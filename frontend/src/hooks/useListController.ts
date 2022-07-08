import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setParam } from "../utils/paramsUtils";

export interface IList {
  pageSize: number;
  page: number;
}
export interface IListController extends IList {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

// handle pagination
const useListController = (pageSize = 5) => {
  let queryParams;
  if (typeof window !== "undefined") {
    queryParams = new URLSearchParams(window.location.search);
  }

  const pageFromParams = Number(queryParams?.get("p") ?? 1);
  const navigate = useNavigate();
  const [page, setCurrentPage] = useState(pageFromParams); // defaults to 1

  useEffect(() => {
    const url = setParam("p", page.toString());
    navigate(url.pathname + url.search);
  }, [page]);

  useEffect(() => {
    setCurrentPage(pageFromParams);
  }, [pageFromParams]);

  return {
    pageSize,
    page,
    setCurrentPage,
  };
};

export { useListController };
