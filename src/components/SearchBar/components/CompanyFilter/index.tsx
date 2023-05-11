import React from "react";

import { MdSearch } from "react-icons/md/";

import styles from "./companyFilter.module.scss";

interface ICompanyFilterProps {}

function CompanyFilter({}: ICompanyFilterProps) {
  return (
    <div className={styles.filter}>
      <MdSearch color={"rgba(2, 203, 154, 1)"} size="2.5rem" />
      <input placeholder="Filter by title, companies..." />
    </div>
  );
}

export default CompanyFilter;
