import React from "react";
import { UseQueryResult } from "react-query";
import { IPoliciesController } from "../../hooks/usePoliciesController";
import { IPolicyData } from "../../interfaces/policies";

interface IPoliciesFiltersProps {
  controller: IPoliciesController;
  queryData: UseQueryResult<IPolicyData[]>;
}

export default function PoliciesFilters({ controller, queryData }: IPoliciesFiltersProps) {
  const policies = queryData;
  const policiesFiltered = policies.data?.filter((policy: IPolicyData) => policy.status === "ACTIVE" || policy.status === "PENDING");

  const providerOptions: string[] = [];
  if (policiesFiltered) {
    const providers = policiesFiltered.map((policy: IPolicyData) => policy.provider);
    providers.forEach((provider: string) => {
      if (!providerOptions.includes(provider)) providerOptions.push(provider);
    });
  }

  const typeOptions: string[] = [];
  if (policiesFiltered) {
    const types = policiesFiltered.map((policy: IPolicyData) => policy.insuranceType);
    types.forEach((type: string) => {
      if (!typeOptions.includes(type)) typeOptions.push(type);
    });
  }

  const statusOptions: string[] = [];
  if (policiesFiltered) {
    const statusOpts = policiesFiltered.map((policy: IPolicyData) => policy.status);
    statusOpts.forEach((status: string) => {
      if (!statusOptions.includes(status)) statusOptions.push(status);
    });
  }

  function handleProviderChange(e: React.BaseSyntheticEvent | undefined) {
    if (e?.target.value === "ALL") controller.setSelectedProvider("ALL");
    controller.setSelectedProvider(e?.target.value);
  }

  function handleTypeChange(e: React.BaseSyntheticEvent | undefined) {
    if (e?.target.value === "ALL") controller.setSelectedType("ALL");
    controller.setSelectedType(e?.target.value);
  }

  function handleStatusChange(e: React.BaseSyntheticEvent | undefined) {
    if (e?.target.value === "ALL") controller.setSelectedStatus("ALL");
    controller.setSelectedStatus(e?.target.value);
  }

  return (
    <div>
      <div className='flex flex-row mb-1 sm:mb-0'>
        <div className='relative'>
          <select
            className='appearance-none h-full rounded-l border-l border-t border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='provider'
            onChange={(e) => handleProviderChange(e)}
          >
            <option selected={controller.selectedProvider === "ALL"}>ALL</option>
            {providerOptions.map((providerOption) => (
              <option key={providerOption} value={providerOption} selected={controller.selectedProvider === providerOption}>
                {providerOption}
              </option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </div>
        </div>
        <div className='relative'>
          <select
            className='appearance-none h-full border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='type'
            onChange={(e) => handleTypeChange(e)}
          >
            <option selected={controller.selectedType === "ALL"}>ALL</option>
            {typeOptions.map((typeOption) => (
              <option key={typeOption} value={typeOption} selected={controller.selectedType === typeOption}>
                {typeOption}
              </option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </div>
        </div>
        <div className='relative'>
          <select
            className='appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500'
            id='type'
            onChange={(e) => handleStatusChange(e)}
          >
            <option selected={controller.selectedStatus === "ALL"}>ALL</option>
            {statusOptions.map((statusOption) => (
              <option key={statusOption} value={statusOption} selected={controller.selectedStatus === statusOption}>
                {statusOption}
              </option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
