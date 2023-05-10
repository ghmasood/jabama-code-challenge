import React from "react";

import styles from "./jobCart.module.scss";
import { IJobDetail } from "types";
import Image from "next/image";

interface IJobCartProps {
  jobData: IJobDetail;
}
function JobCart({ jobData }: IJobCartProps) {
  return (
    <div className={styles.cartRoot}>
      <span
        className={styles.logo}
        style={{
          backgroundColor: `${jobData.logoBackground}`,
        }}
      >
        <div className={styles.logoContainer}>
          <Image src={jobData.logo} alt={jobData.company} fill />
        </div>
      </span>
      <div className={styles.timeContract}>
        <span>{jobData.postedAt}</span>
        <span>{"•"}</span>
        <span>{jobData.contract}</span>
      </div>
      <span className={styles.position}>{jobData.position}</span>
      <span className={styles.company}>{jobData.company}</span>
      <span className={styles.location}>{jobData.location}</span>
    </div>
  );
}

export default JobCart;
