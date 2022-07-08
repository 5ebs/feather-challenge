import React, { useEffect } from "react";
import { IPoliciesController } from "../../hooks/usePoliciesController";
import { IPolicyData } from "../../interfaces/policies";

interface IFallbackProps {
  children: Array<React.ReactChild> | React.ReactChild;
  queryData: IPolicyData[];
  setFilteredData: (data: IPolicyData[]) => void;
  listController: IPoliciesController;
}

export default function QueryFilterPolicies({ children, queryData, setFilteredData, listController }: IFallbackProps) {
  setFilteredData(queryData?.filter((policy: IPolicyData) => policy.status === "ACTIVE" || policy.status === "PENDING"));
  useEffect(() => {
    setFilteredData(queryData?.filter((policy: any) => policy.name.includes(listController.selectedName)));
  }, [listController.selectedName]);

  return <>{children}</>;
}
