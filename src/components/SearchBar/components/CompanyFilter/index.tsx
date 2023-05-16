import React from "react";
import { useRouter } from "next/router";

import { MdSearch } from "react-icons/md/";

import styles from "./companyFilter.module.scss";

function CompanyFilter() {
  const router = useRouter();

  return (
    <div className={styles.filter}>
      <MdSearch color={"rgba(2, 203, 154, 1)"} size="2.5rem" />
      <input
        id="keywordFilter"
        placeholder="Filter by title, companies..."
        value={router.query.keyword ?? ""}
        onChange={(e) => {
          router.isReady &&
            router.replace(
              { query: { ...router.query, keyword: e.target.value } },
              undefined,
              { shallow: true }
            );
        }}
      />
    </div>
  );
}

export default CompanyFilter;
