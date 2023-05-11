import React, { useState } from "react";

import styles from "./actions.module.scss";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
interface IActionsProps {}
function Actions({}: IActionsProps) {
  const [isFull, setIsFull] = useState(false);
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
      <button>Search</button>
    </div>
  );
}

export default Actions;
