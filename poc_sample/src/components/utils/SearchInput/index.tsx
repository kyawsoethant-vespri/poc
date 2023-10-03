import React from "react";
import styles from "./page.module.css";

export const SearchInput = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        className={styles.input}
        id="search"
      />
      <button>
        <label htmlFor="search">
          <span>🔎</span>
        </label>
      </button>
    </div>
  );
};
