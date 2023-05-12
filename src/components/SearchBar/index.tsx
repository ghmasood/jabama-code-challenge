import React from "react";

import CompanyFilter from "./components/CompanyFilter";
import LocationFilter from "./components/LocationFilter";
import Actions from "./components/Actions";

import styles from "./searchBar.module.scss";

interface ISearchBarProps {
  setBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchBar({ setBtn }: ISearchBarProps) {
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
      <Actions setBtn={setBtn} />
    </form>
  );
}

export default SearchBar;
