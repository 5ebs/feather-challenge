import { useEffect, useState } from "react";
import { IPoliciesController } from "../../hooks/usePoliciesController";
import { IPolicyData } from "../../interfaces/policies";
import Badge from "../common/Badge";

interface ITableProps {
  queryData: IPolicyData[];
  controller: IPoliciesController;
}

//  paginator function
function paginator(data: IPolicyData[], controller: IPoliciesController): IPolicyData[] {
  if (data.length <= controller.pageSize) return data;
  return data.slice(controller.page === 1 ? 0 : (controller.page - 1) * controller.pageSize, controller.pageSize * controller.page);
}

function Table({ queryData, controller }: ITableProps) {
  const [policiesData, setPoliciesData] = useState<IPolicyData[]>(paginator(queryData, controller));
  const [first, setFirst] = useState(0);

  // useEffect to handle research by name
  useEffect(() => {
    if (first === 0) {
      setFirst(1);
      return;
    }
    // remove all filters
    controller.setSelectedProvider("ALL");
    controller.setSelectedType("ALL");
    controller.setSelectedStatus("ALL");

    let filteredData = queryData;
    filteredData = queryData.filter((policy: IPolicyData) => {
      return (
        policy.customer.firstName.toLowerCase().includes(controller.selectedName.toLowerCase()) ||
        policy.customer.lastName.toLowerCase().includes(controller.selectedName.toLowerCase())
      );
    });
    setPoliciesData(paginator(filteredData, controller));
  }, [controller.selectedName]);

  const filterProviderIsApplied = controller.selectedProvider !== "ALL";
  const filterTypeIsApplied = controller.selectedType !== "ALL";
  const filterStatusIsApplied = controller.selectedStatus !== "ALL";

  // filter by provider
  function providerFilter(data: IPolicyData[]): IPolicyData[] {
    return data.filter((policy: IPolicyData) => {
      return policy.provider === controller.selectedProvider;
    });
  }

  // filter by type
  function typeFilter(data: IPolicyData[]): IPolicyData[] {
    return data.filter((policy: IPolicyData) => {
      return policy.insuranceType === controller.selectedType;
    });
  }

  // filter by policy status
  function statusFilter(data: IPolicyData[]): IPolicyData[] {
    return data.filter((policy: IPolicyData) => {
      return policy.status === controller.selectedStatus;
    });
  }

  function applyFilters() {
    let filteredData = queryData;
    if (filterProviderIsApplied) filteredData = providerFilter(filteredData);
    if (filterStatusIsApplied) filteredData = statusFilter(filteredData);
    if (filterTypeIsApplied) filteredData = typeFilter(filteredData);
    setPoliciesData(paginator(filteredData, controller));
  }

  useEffect(() => {
    applyFilters();
  }, [controller.page, controller.selectedProvider, controller.selectedType, controller.selectedStatus]);

  const handlePrevPage = () => {
    if (controller.page === 1) return;
    controller.setCurrentPage(controller.page - 1);
  };

  const handleNextPage = () => {
    if (policiesData.length < controller.pageSize) return;
    if (queryData.length <= controller.pageSize * controller.page) return;
    controller.setCurrentPage(controller.page + 1);
  };

  return (
    <div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden rounded-lg shadow-sm'>
              <table className='min-w-full'>
                <thead className='border-b bg-gray-100'>
                  <tr>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                      #
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                      Name
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                      Provider
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                      Type
                    </th>
                    <th scope='col' className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {policiesData.length > 0 ? (
                    policiesData.map((policy, index) => (
                      <tr key={policy.id} className='border-b'>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 page'>
                          {index + 1 + (controller.page - 1) * controller.pageSize}
                        </td>
                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap name'>
                          {policy.customer.firstName} {policy.customer.lastName}
                        </td>
                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap provider'>{policy.provider}</td>
                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap type'>{policy.insuranceType}</td>
                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap status'>
                          <Badge status={policy.status} />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>There are no results that match your search</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='px-5 py-5 bg-white  flex flex-col xs:flex-row items-center xs:justify-between'>
        <div className='inline-flex mt-2 xs:mt-0'>
          <button
            className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700 mr-5 prev'
            onClick={handlePrevPage}
          >
            Prev
          </button>
          <button
            className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700 next'
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
