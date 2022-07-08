import React from "react";
import Table from "../components/policies/Table";
import MainLayout from "../components/layout/MainLayout";
import { usePoliciesController } from "../hooks/usePoliciesController";
import usePoliciesQuery from "../components/policies/usePoliciesQuery";
import QueryWrapper from "../components/common/QueryWrapper";
import { IPolicyData } from "../interfaces/policies";
import PoliciesHeader from "../components/policies/PoliciesHeader";

export default function PoliciesPage() {
  const controller = usePoliciesController();
  const policies = usePoliciesQuery<IPolicyData[]>();
  const policiesFiltered = policies.data?.filter((policy: IPolicyData) => policy.status === "ACTIVE" || policy.status === "PENDING");

  return (
    <QueryWrapper queryData={policies}>
      <MainLayout>
        <PoliciesHeader queryData={policies} controller={controller} />
        <Table queryData={policiesFiltered} controller={controller} />
      </MainLayout>
    </QueryWrapper>
  );
}
