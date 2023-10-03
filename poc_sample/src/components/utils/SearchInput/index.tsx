"use client";
import React, { ChangeEvent, useState, useEffect, useContext } from "react";
import styles from "./page.module.css";
import { fetchJsonData } from "@/utils";
import { products } from "@/constants";
import { SearchContext } from "@/app/context/searchContext";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setFilterData } = useContext(SearchContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    const posts = await fetchJsonData();

    const FilterPosts = posts.filter((item: any) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(FilterPosts);
    setSearch("");
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
        className={styles.input}
        id="search"
      />
      <button onClick={handleSearch} disabled={isLoading}>
        <label htmlFor="search">
          <span className={styles.icon}>🔎</span>
        </label>
      </button>
    </div>
  );
};
