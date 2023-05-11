import React, { useState } from "react";

import CompanyFilter from "./components/CompanyFilter";
import LocationFilter from "./components/LocationFilter";
import Actions from "./components/Actions";

import styles from "./searchBar.module.scss";

interface ISearchBarProps {}

function SearchBar({}: ISearchBarProps) {
  return (
    <form
      className={styles.searchBar}
      onSubmit={(e) => {
        e.preventDefault();
        console.log("object");
      }}
    >
      <CompanyFilter />
      <LocationFilter />
      <Actions />
    </form>
  );
}

export default SearchBar;
