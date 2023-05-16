import React from "react";
import { useRouter } from "next/router";

import { MdLocationOn } from "react-icons/md/";

import styles from "./locationFilter.module.scss";

function LocationFilter() {
  const router = useRouter();

  return (
    <div className={styles.filter}>
      <MdLocationOn color={"rgba(2, 203, 154, 1)"} size="2.5rem" />
      <input
        id="locationFilter"
        placeholder="Filter by location..."
        value={router.query.loc ?? ""}
        onChange={(e) => {
          router.isReady &&
            router.replace(
              { query: { ...router.query, loc: e.target.value } },
              undefined,
              { shallow: true }
            );
        }}
      />
    </div>
  );
}

export default LocationFilter;
