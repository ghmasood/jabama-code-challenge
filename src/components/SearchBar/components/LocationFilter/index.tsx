import React from "react";

import { MdLocationOn } from "react-icons/md/";

import styles from "./locationFilter.module.scss";

interface ILocationFilterProps {}

function LocationFilter({}: ILocationFilterProps) {
  return (
    <div className={styles.filter}>
      <MdLocationOn color={"rgba(2, 203, 154, 1)"} size="2.5rem" />
      <input placeholder="Filter by location..." />
    </div>
  );
}

export default LocationFilter;
