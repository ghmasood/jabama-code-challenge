import React, { useState } from "react";
import { GetServerSideProps, NextPage } from "next";

import JobList from "components/JobList";
import SearchBar from "components/SearchBar";

import styles from "./Home.module.scss";

import { IHomePage, IJobResponse } from "types";

const Home: NextPage<IHomePage> = (props) => {
  //STATES
  const [searchBtn, setSearchBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.root}>
      <SearchBar setBtn={setSearchBtn} loading={loading} />
      <JobList
        initialResponse={props.jobResponse}
        searchClick={searchBtn}
        setSearchClick={setSearchBtn}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<IHomePage> = async (
  ctx
) => {
  const { fullOnly, keyword, loc, limit } = ctx.query;
  const res = await fetch(
    `http://jabama-devjobs-api.vercel.app/api/v1/jobs?limit=${
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
