import React from "react";
import { UseQueryResult } from "react-query";
import CustomSpinner from "./CustomSpinner";

interface IFallbackProps<TFn, TErr> {
  children: Array<React.ReactChild> | React.ReactChild;
  queryData: UseQueryResult<TFn, TErr>;
}

export default function QueryWrapper<TFn, TErr>({ children, queryData }: IFallbackProps<TFn, TErr>) {
  if (queryData.isLoading) {
    return <CustomSpinner />;
  }

  if (queryData.error) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='mb.4'>Something went wrong</p>
        <button className='button' onClick={() => window.location.reload()}>
          Try again
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
