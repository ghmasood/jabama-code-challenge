import React from "react";
import { useState } from "react";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";

import { CgSpinner } from "react-icons/cg";

import styles from "./error.module.scss";
interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode }) => {
  //ROUTER
  const router = useRouter();
  //STATES
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.errorPage}>
      <p>!</p>
      <div>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </div>

      <span
        onClick={() => {
          setLoading(true);
          router.replace("/");
        }}
      >
        {loading ? (
          <CgSpinner className="loading" size="3rem" />
        ) : (
          "Back to home?"
        )}
      </span>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
