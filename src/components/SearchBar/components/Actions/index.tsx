import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { MdCheckBox } from "react-icons/md";
import { CgSpinner } from "react-icons/cg";

import styles from "./actions.module.scss";

interface IActionsProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Actions({ loading, setLoading }: IActionsProps) {
  //ROUTER
  const router = useRouter();

  //STATE
  const [isFull, setIsFull] = useState(router.query.fullOnly ?? false);

  //LIFECYCLE HOOK
  useEffect(() => {
    router.isReady &&
      router.replace(
        { query: { ...router.query, fullOnly: isFull } },
        undefined,
        { shallow: true }
      );
  }, [isFull]);

  return (
    <div className={styles.actions}>
      <span onClick={() => setIsFull(!isFull)}>
        {isFull ? (
          <MdCheckBox size="2rem" color="rgba(2, 203, 154, 1)" />
        ) : (
          <div className={styles.box} />
        )}
        <p>Full Time Only</p>
      </span>
      <button
        onClick={() => {
          setLoading(true);
          router.replace({ query: { ...router.query, limit: 9 } });
        }}
      >
        {loading ? <CgSpinner className="loading" size={"2rem"} /> : "Search"}
      </button>
    </div>
  );
}

export default Actions;
