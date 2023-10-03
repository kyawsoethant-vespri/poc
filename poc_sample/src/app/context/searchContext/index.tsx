"use client";
import { createContext, useState } from "react";

export interface SearchContextType {
  filterData: [];
  setFilterData: (filterData: []) => void;
}

export const SearchContext = createContext({} as SearchContextType);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filterData, setFilterData] = useState([]);
  const value: any = {
    filterData,
    setFilterData,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
