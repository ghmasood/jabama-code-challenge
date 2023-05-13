import React from "react";
import { useEffect, useState } from "react";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";

import styles from "./error.module.scss";
interface Props {
  statusCode?: number;
}

const Error: NextPage<Props> = ({ statusCode }) => {
  const router = useRouter();
  const goDashboard = () => {
    router.replace("/");
  };

  const [counter, setCounter] = useState(9);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (counter > 0) {
        setCounter((time) => time - 1);
      }
      if (counter === 0) {
        clearInterval(myInterval);
        goDashboard();
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className={styles.errorPage}>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </h1>

      <button onClick={goDashboard}>
        Go to Home <span>({counter}s)</span>
      </button>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
