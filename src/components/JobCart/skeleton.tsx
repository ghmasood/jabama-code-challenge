import React from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import styles from "./jobCart.module.scss";

function JobCartSkeleton() {
  return (
    <div className={styles.cartRoot}>
      <div
        className={`${styles.logo} skeleton`}
        style={{
          backgroundColor: `#fff`,
        }}
      >
        <div
          style={{
            backgroundImage: `url()`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className={`${styles.timeContract} skeleton`}>
        <span>ago</span>
        <span>{"•"}</span>
        <span>contract</span>
      </div>
      <span className={`${styles.position} skeleton`}>position</span>
      <span className={`${styles.company} skeleton`}>company</span>
      <span className={`${styles.location} skeleton`}>location</span>
    </div>
  );
}

export default JobCartSkeleton;
