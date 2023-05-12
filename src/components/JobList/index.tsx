import React, { useEffect, useState } from "react";

import JobCart from "components/JobCart";

import { IJobDetail, IJobResponse } from "types";

import styles from "./jobList.module.scss";
import { useRouter } from "next/router";

interface IJobListProps {
  searchClick: boolean;
  setSearchClick: React.Dispatch<React.SetStateAction<boolean>>;
}

function JobList({ searchClick, setSearchClick }: IJobListProps) {
  //STATES
  const [jobList, setJobList] = useState<IJobDetail[]>([]);

  //ROUTER
  const router = useRouter();

  //LIFE CYCLE HOOK
  useEffect(() => {
    router.isReady &&
      searchClick &&
      fetch(
        "http://jabama-devjobs-api.vercel.app/api/v1/jobs?" +
          new URLSearchParams({
            fullTimeOnly: router.query.fullOnly === "true" ? "true" : "",
            keyword: (router.query.keyword as string) ?? "",
            location: (router.query.loc as string) ?? "",
            limit: "15",
            page: "",
          }).toString()
      ).then((res) => {
        {
          res
            .json()
            .then((data: IJobResponse) => setJobList(data.result.items));

          setSearchClick(false);
        }
      });
  }, [router.query, searchClick]);
  return (
    <div className={styles.joblist}>
      {jobList.map((item, index) => (
        <JobCart jobData={item} key={index + "id" + item.id} />
      ))}
    </div>
  );
}

export default JobList;
