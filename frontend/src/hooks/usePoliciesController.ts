import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { setParam } from "../utils/paramsUtils";
import { IListController, useListController } from "./useListController";

export interface IPoliciesController extends IListController {
  selectedName: string;
  setSelectedName: React.Dispatch<React.SetStateAction<string>>;
  setSelectedProvider: React.Dispatch<React.SetStateAction<string>>;
  selectedProvider: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  selectedType: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
  selectedStatus: string;
}

const usePoliciesController = (pageSize = 5): IPoliciesController => {
  const listController = useListController(pageSize);
  const queryParams = new URLSearchParams(window.location.search);

  const [selectedProvider, setSelectedProvider] = useState(queryParams?.get("provider") ?? "ALL");
  const [selectedType, setSelectedType] = useState(queryParams?.get("type") ?? "ALL");
  const [selectedStatus, setSelectedStatus] = useState(queryParams?.get("status") ?? "ALL");
  const [selectedName, setSelectedName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log("selected", selectedProvider, selectedType, selectedStatus);
    let url = setParam("provider", selectedProvider);
    console.log("url 1", url.search);
    url = setParam("type", selectedType, url.toString());
    console.log("url 2", url.search);
    url = setParam("status", selectedStatus, url.toString());
    console.log("url 3", url.search);
    navigate(url.pathname + url.search);
  }, [selectedProvider, selectedType, selectedStatus]);

  return {
    ...listController,
    selectedName,
    setSelectedName,
    selectedProvider,
    setSelectedProvider,
    selectedType,
    setSelectedType,
    selectedStatus,
    setSelectedStatus,
  };
};

export { usePoliciesController };
