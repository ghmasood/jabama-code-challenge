import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import JobCart from "components/JobCart";
import JobCartSkeleton from "components/JobCart/skeleton";

import { CgSpinner } from "react-icons/cg";

import styles from "./jobList.module.scss";

import { IJobResponse } from "types";
interface IJobListProps {
  loading: boolean;
  SSRResponse: IJobResponse;
}

function JobList({ loading, SSRResponse }: IJobListProps) {
  //STATES
  const [moreLoading, setMoreLoading] = useState(false);

  //ROUTER
  const router = useRouter();

  //LIFE CYCLE HOOK
  useEffect(() => {
    setMoreLoading(false);
  }, [SSRResponse]);
  return (
    <div className={styles.jobRoot}>
      {/* CARTS LIST OR SKELETON LIST  */}
      <div className={styles.jobList}>
        {loading
          ? [...new Array(9)].map((ـ, index) => (
              <JobCartSkeleton key={index + "skeleton"} />
            ))
          : SSRResponse.result.items.map((item, index) => (
              <JobCart jobData={item} key={index + "id" + item.id} />
            ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {SSRResponse.result.meta.total > Number(router.query.limit) &&
        !loading && (
          <button
            onClick={() => {
              setMoreLoading(true);
              router.replace(
                {
                  query: {
                    ...router.query,

                    limit: Number(router.query.limit) + 3,
                  },
                },
                undefined,
                { scroll: false }
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
        )}

      {/* NOT FOUND MESSAGE  */}
      {SSRResponse.result.meta.total === 0 && !loading && (
        <span className={styles.notFound}>
          No jobs were found <br />
          <Link href="/?limit=9">Back to home?</Link>
        </span>
      )}
    </div>
  );
}

export default JobList;
