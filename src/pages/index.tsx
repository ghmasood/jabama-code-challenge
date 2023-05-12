import React, { useState } from "react";

import JobList from "components/JobList";
import SearchBar from "components/SearchBar";

import styles from "./Home.module.scss";

export default function Home() {
  //STATES
  const [searchBtn, setSearchBtn] = useState(false);

  return (
    <div className={styles.root}>
      <SearchBar setBtn={setSearchBtn} />
      <JobList searchClick={searchBtn} setSearchClick={setSearchBtn} />
    </div>
  );
}
