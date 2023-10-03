import React from "react";
import styles from "./page.module.css";
import { SearchInput } from "../utils/SearchInput";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}> A Bank </div>
      <div className="">
        <SearchInput />
      </div>
    </nav>
  );
};

export default Navbar;
