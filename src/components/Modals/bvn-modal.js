import React from "react";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import { Lock } from "../../assets/svg";
import Button from "../button";

const BvnModal = () => {
  return (
    <ModalWrapper className={styles.bvn__body} showClose="no">
      <div className={styles.bvn}>
        <Lock />
        <div className={styles.title}>Complete your profile</div>
        <div className={styles.content}>
          Hey Boss, we still need you to provide your BVN, please proceed to
          complete your profile
        </div>
        <div className={styles.btnholder}>
          <Button className={`${styles.btn}`} text="Continue" form="full" />{" "}
          <Button className={`${styles.btn} ${styles.btnAlt}`} text="Skip" />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BvnModal;
