import { UseQueryResult } from "react-query";
import { IPoliciesController } from "../../hooks/usePoliciesController";
import { IPolicyData } from "../../interfaces/policies";
import { SearchFilter } from "../../search/SearchFilter";

import PoliciesFilters from "./PoliciesFilter";

interface IQueryProps {
  queryData: UseQueryResult<IPolicyData[]>;
  controller: IPoliciesController;
}

function PoliciesHeader({ queryData, controller }: IQueryProps) {
  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900 mb-2'>Policies</h1>
      <div className='my-2 flex sm:flex-row flex-col'>
        <PoliciesFilters controller={controller} queryData={queryData} />
        <SearchFilter controller={controller} />
      </div>
    </div>
  );
}

export default PoliciesHeader;
