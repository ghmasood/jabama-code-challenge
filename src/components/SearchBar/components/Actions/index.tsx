import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { MdCheckBox } from "react-icons/md";

import styles from "./actions.module.scss";

interface IActionsProps {
  setBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

function Actions({ setBtn }: IActionsProps) {
  //ROUTER
  const router = useRouter();

  //STATE
  const [isFull, setIsFull] = useState(router.query.fullOnly ?? false);

  //LIFECYCLE HOOK
  useEffect(() => {
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
        <label htmlFor="fullTime">Full Time Only</label>
      </span>
      <button onClick={() => setBtn(true)}>Search</button>
    </div>
  );
}

export default Actions;
