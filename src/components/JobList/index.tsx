import JobCart from "components/JobCart";
import React, { useEffect, useState } from "react";
import { IJobDetail, IJobResponse } from "types";
import styles from "./jobList.module.scss";

interface IJobListProps {}

function JobList({}: IJobListProps) {
  //STATES
  const [jobList, setJobList] = useState<IJobDetail[]>([]);

  //LIFE CYCLE HOOK
  useEffect(() => {
    fetch("http://jabama-devjobs-api.vercel.app/api/v1/jobs").then((res) =>
      res.json().then((data: IJobResponse) => setJobList(data.result.items))
    );
  }, []);

  return (
    <div className={styles.joblist}>
      {jobList.map((item, index) => (
        <JobCart jobData={item} key={index + "id" + item.id} />
      ))}
    </div>
  );
}

export default JobList;
