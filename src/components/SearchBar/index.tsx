import React from "react";

import CompanyFilter from "./components/CompanyFilter";
import LocationFilter from "./components/LocationFilter";
import Actions from "./components/Actions";

import styles from "./searchBar.module.scss";

interface ISearchBarProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchBar({ loading, setLoading }: ISearchBarProps) {
  return (
    <form
      className={styles.searchBar}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <CompanyFilter />
      <LocationFilter />
      <Actions loading={loading} setLoading={setLoading} />
    </form>
  );
}

export default SearchBar;
