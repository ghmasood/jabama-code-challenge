import React, { useState } from "react";

import JobList from "components/JobList";
import SearchBar from "components/SearchBar";

import styles from "./Home.module.scss";

export default function Home() {
  //STATES
  const [searchBtn, setSearchBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.root}>
      <SearchBar
        setBtn={setSearchBtn}
        loading={loading}
      />
      <JobList
        searchClick={searchBtn}
        setSearchClick={setSearchBtn}
        setLoading={setLoading}
      />
    </div>
  );
}
