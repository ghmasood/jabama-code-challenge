import React from "react";

import JobList from "components/JobList";
import SearchBar from "components/SearchBar";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.root}>
      <SearchBar />
      <JobList />
    </div>
  );
}
