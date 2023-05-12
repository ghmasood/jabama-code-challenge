import React from "react";

import CompanyFilter from "./components/CompanyFilter";
import LocationFilter from "./components/LocationFilter";
import Actions from "./components/Actions";

import styles from "./searchBar.module.scss";

interface ISearchBarProps {
  setBtn: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

function SearchBar({ setBtn, loading }: ISearchBarProps) {
  return (
    <form
      className={styles.searchBar}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <CompanyFilter />
      <LocationFilter />
      <Actions setBtn={setBtn} loading={loading} />
    </form>
  );
}

export default SearchBar;
