import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import JobCart from "components/JobCart";

import styles from "./jobList.module.scss";

import { IJobDetail, IJobResponse } from "types";
import JobCartSkeleton from "components/JobCart/skeleton";
interface IJobListProps {
  searchClick: boolean;
  setSearchClick: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  initialJobList: IJobDetail[];
}

function JobList({
  searchClick,
  setSearchClick,
  loading,
  setLoading,
  initialJobList,
}: IJobListProps) {
  //STATES
  const [jobList, setJobList] = useState(initialJobList);

  //ROUTER
  const router = useRouter();

  //LIFE CYCLE HOOK
  useEffect(() => {
    if (router.isReady && searchClick) {
      setLoading(true);
      fetch(
        "http://jabama-devjobs-api.vercel.app/api/v1/jobs?" +
          new URLSearchParams({
            fullTimeOnly: router.query.fullOnly === "true" ? "true" : "",
            keyword: (router.query.keyword as string) ?? "",
            location: (router.query.loc as string) ?? "",
            limit: "15",
            page: "",
          }).toString()
      )
        .then((res) => {
          {
            res
              .json()
              .then((data: IJobResponse) => setJobList(data.result.items));

            setSearchClick(false);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [searchClick]);
  return (
    <div className={styles.joblist}>
      {loading
        ? [...new Array(3)].map((item, index) => <JobCartSkeleton />)
        : jobList.map((item, index) => (
            <JobCart jobData={item} key={index + "id" + item.id} />
          ))}
    </div>
  );
}

export default JobList;
