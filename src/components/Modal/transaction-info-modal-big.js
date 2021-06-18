import React from "react";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import { ArrowRight, Cancel, TransactionIconMed } from "../../assets/svg";
import Button from "../button";

const TransactionModalBig = ({ type }) => {
  return (
    <ModalWrapper className={styles.withdrawInitial} showClose="no" showCancel>
      <div className={styles.transactionBig}>
        <div className={styles.transactionBig__tag}>
          <span>Transaction</span> <span> #1234 </span>
        </div>
        <div className={styles.transactionBig__top}>
          <div className={styles.transactionBig__top__left}>
            <div className={`${styles.badge} ${styles[type]}`}>
              <TransactionIconMed />
            </div>
            <div className={styles.text}>
              <div className={`${styles.title} ${styles.main}`}>Deposit</div>
              <div className={`${styles.sub}`}>Nov 12, 2020</div>
            </div>
          </div>
          <div className={`${styles.status} ${styles.pending}`}>Pending</div>
        </div>
        <div lassName={styles.transactionBig__main}>
          <div className={styles.transactionBig__main__heading}>
            Transaction Info
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Reference ID</span> <span>WEB-123</span>
            </div>
            <div className={styles.transactionBig__main__content}>
              <span>Transaction Rate</span> <span>₦450/$</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Amount Paid</span> <span>₦120</span>
            </div>
            <div className={styles.transactionBig__main__content}>
              <span>Amount In Dollar</span> <span>$120</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Wallet Address</span>
              <span>5632d59452s2s2s2a5w896e123x</span>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default TransactionModalBig;
