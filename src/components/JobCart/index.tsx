import React from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import styles from "./jobCart.module.scss";

import { IJobDetail } from "types";
interface IJobCartProps {
  jobData: IJobDetail;
}

function JobCart({ jobData }: IJobCartProps) {
  return (
    <div className={styles.cartRoot}>
      <div
        className={styles.logo}
        style={{
          backgroundColor: `${jobData.logoBackground}`,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${jobData.logo})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className={styles.timeContract}>
        <span>{dayjs(jobData.postedAt).fromNow()}</span>
        <span>{"•"}</span>
        <span>{jobData.contract}</span>
      </div>
      <span className={styles.position}>{jobData.position}</span>
      <span className={styles.company}>{jobData.company}</span>
      <span className={styles.location}>{jobData.location}</span>
    </div>
  );
}

export default React.memo(JobCart);
