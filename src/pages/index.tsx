import React, { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import JobList from "components/JobList";
import SearchBar from "components/SearchBar";

import styles from "./home.module.scss";

import { IHomePage, IJobResponse } from "types";

const Home: NextPage<IHomePage> = (props) => {
  //STATES
  const [loading, setLoading] = useState(false);

  //ROUTER
  const router = useRouter();

  //LIFECYCLE HOOK
  useEffect(() => {
    if (router.query.limit === undefined) {
      router.isReady &&
        router.replace(
          { query: { ...router.query, limit: 9, fullOnly: false } },
          undefined,
          {
            shallow: true,
          }
        );
    }
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [props]);

  return (
    <div className={styles.root}>
      <SearchBar loading={loading} setLoading={setLoading} />
      <JobList SSRResponse={props.jobResponse} loading={loading} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<IHomePage> = async (
  ctx
) => {
  const { fullOnly, keyword, loc, limit } = ctx.query;
  const res = await fetch(
    `https://jabama-devjobs-api.vercel.app/api/v1/jobs?limit=${
      limit ?? 9
    }&fullTimeOnly=${fullOnly ?? ""}&keyword=${keyword ?? ""}&location=${
      loc ?? ""
    }`
  );
  const data = (await res.json()) as IJobResponse;

  return {
    props: {
      jobResponse: data,
    },
  };
};
