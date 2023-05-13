import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import JobCart from "components/JobCart";
import JobCartSkeleton from "components/JobCart/skeleton";

import { CgSpinner } from "react-icons/cg";

import styles from "./jobList.module.scss";

import { IJobResponse } from "types";
interface IJobListProps {
  searchClick: boolean;
  setSearchClick: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  initialResponse: IJobResponse;
}

function JobList({
  searchClick,
  setSearchClick,
  loading,
  setLoading,
  initialResponse,
}: IJobListProps) {
  //STATES
  const [jobRes, setJobRes] = useState(initialResponse);
  const [moreClick, setMoreClick] = useState(false);
  const [moreLoading, setMoreLoading] = useState(false);

  //ROUTER
  const router = useRouter();

  //LIFE CYCLE HOOK
  useEffect(() => {
    if (router.isReady && router.query.limit === undefined) {
      router.replace({ query: { ...router.query, limit: 9 } }, undefined, {
        shallow: true,
      });
    }
  }, [loading, searchClick]);

  useEffect(() => {
    if ((router.isReady && searchClick) || moreClick) {
      if (moreClick) {
        setMoreLoading(true);
      } else {
        setLoading(true);
        router.replace({ query: { ...router.query, limit: 9 } }, undefined, {
          shallow: true,
        });
      }
      fetch(
        "http://jabama-devjobs-api.vercel.app/api/v1/jobs?" +
          new URLSearchParams({
            fullTimeOnly: router.query.fullOnly === "true" ? "true" : "",
            keyword: (router.query.keyword as string) ?? "",
            location: (router.query.loc as string) ?? "",
            limit: (router.query.limit as string) ?? "9",
            page: "1",
          }).toString()
      )
        .then((res) => {
          {
            res.json().then((data: IJobResponse) => setJobRes(data));
          }
        })
        .finally(() => {
          setSearchClick(false);
          setMoreClick(false);
          setLoading(false);
          setMoreLoading(false);
        });
    }
  }, [searchClick, router.query.limit]);

  return (
    <div>
      <div className={styles.jobList}>
        {loading
          ? [...new Array(9)].map((item, index) => (
              <JobCartSkeleton key={index + "skeleton"} />
            ))
          : jobRes.result.items.map((item, index) => (
              <JobCart jobData={item} key={index + "id" + item.id} />
            ))}
      </div>
      {jobRes.result.meta.total > Number(router.query.limit) && !loading ? (
        <button
          onClick={() => {
            setMoreClick(true);
            router.replace(
              {
                query: {
                  ...router.query,
                  limit: Number(router.query.limit) + 3,
                },
              },
              undefined,
              {
                shallow: true,
              }
            );
          }}
          className={styles.loadMore}
        >
          {moreLoading ? (
            <CgSpinner className="loading" size={"2rem"} />
          ) : (
            "Load More"
          )}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default JobList;
