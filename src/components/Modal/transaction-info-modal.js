import React from "react";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import { ArrowRight, Cancel, TransactionIconBig } from "../../assets/svg";
import Button from "../button";

const TransactionModal = ({ type }) => {
  return (
    <ModalWrapper className={styles.withdrawInitial} showClose="no" showCancel>
      <div className={styles.transaction}>
        <div className={styles.transaction__main}>
          <div className={`${styles.badge} ${styles[type]}`}>
            <TransactionIconBig />
          </div>
          <div className={`${styles.title} ${styles.main}`}>Wallet</div>
          <div className={`${styles.sub}`}>Nov 12, 2020</div>
        </div>

        <div className={styles.transaction__sub}>
          <div className={styles.textHolder}>
            <div className={`${styles.title}`}>Amount</div>
            <div className={`${styles.sub}`}>$4,500</div>
          </div>
          <div className={styles.textHolder}>
            <div className={`${styles.title}`}>Status</div>
            <div className={`${styles.sub} ${styles[type]}`}>Success</div>
          </div>
        </div>
        <div className={styles.transaction__final}>
          <div className={styles.textHolder}>
            <div className={`${styles.title}`}>Source</div>
            <div className={`${styles.sub}`}>Debit Card (VISA)</div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default TransactionModal;
