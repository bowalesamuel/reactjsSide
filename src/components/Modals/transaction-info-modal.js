import React from "react";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import {
  TransactionIconMed,
  TransactionIconSuc,
  TransactionIconBig,
} from "../../assets/svg";
import { date, Money } from "../../utils/helper";

const TransactionModal = ({
  type,
  setIsModalVisible,
  isModalVisible,
  dateData,
  amount,
  status,
  reference,
  title = "Wallet",
}) => {
  return (
    <ModalWrapper
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      className={styles.withdrawInitial}
      showClose="no"
      showCancel
    >
      <div className={styles.transaction}>
        <div className={styles.transaction__main}>
          <div className={`${styles.badge} ${styles[type]}`}>
            {status === "PENDING" && <TransactionIconBig />}
            {status === "SUBMITTED" && <TransactionIconBig />}
            {status === "DONE" && <TransactionIconSuc />}
            {status === "FAILED" && <TransactionIconMed />}
            {status === "DECLINED" && <TransactionIconMed />}
            {status === "CANCELLED" && <TransactionIconMed />}
          </div>
          <div className={`${styles.title} ${styles.main}`}>{title}</div>
          <div className={`${styles.sub}`}>{date(dateData)}</div>
        </div>

        <div className={styles.transaction__sub}>
          <div className={styles.textHolder}>
            <div className={`${styles.title}`}>Amount</div>
            <div className={`${styles.sub}`}>{Money(amount, "NGN")}</div>
          </div>
          <div className={styles.textHolder}>
            <div className={`${styles.title}`}>Status</div>
            <div
              className={`${styles.sub} ${styles[status]}`}
              style={{ textTransform: "capitalize" }}
            >
              {status}
            </div>
          </div>
        </div>
        <div className={styles.transaction__final}>
          <div className={styles.textHolder}>
            <div className={`${styles.title}`}>Reference</div>
            <div className={`${styles.sub}`}>{reference}</div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default TransactionModal;
