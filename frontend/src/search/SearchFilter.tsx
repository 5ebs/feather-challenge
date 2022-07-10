import React from "react";
import { IPoliciesController } from "../hooks/usePoliciesController";

interface IQueryProps {
  controller: IPoliciesController;
}

export const SearchFilter = ({ controller }: IQueryProps) => {
  function handleSearch(event: React.FormEvent<HTMLInputElement>) {
    const searchStr = event.currentTarget.value;
    if (!searchStr) return;
    if (searchStr.length < 3) {
      controller.setSelectedName("");
      return;
    }
    controller.setSelectedName(searchStr);
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode === 8) {
      controller.setSelectedName("");
    }
  }

  return (
    <div className='block relative'>
      <span className='h-full absolute inset-y-0 left-0 flex items-center pl-2'>
        <svg viewBox='0 0 24 24' className='h-4 w-4 fill-current text-gray-500'>
          <path d='M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z'></path>
        </svg>
      </span>
      <input
        id='search'
        type='text'
        placeholder='Search by name'
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        className='appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
      />
    </div>
  );
};
