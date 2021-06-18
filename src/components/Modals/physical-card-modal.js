import React from "react";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import { Physical } from "../../assets/svg";
import Button from "../button";

const ScanModal = ({ type }) => {
  return (
    <ModalWrapper showClose="no">
      <div className={styles.physical}>
        <div className={styles.title}>What is a Physical Card?</div>
        <div className={styles.sub}>
          Physical card simply refers to any gift card with a picture and the
          value of each card must not be above 100$.
        </div>
        <Physical />
        <Button className={styles.button} text="Got it" />
      </div>
    </ModalWrapper>
  );
};

export default ScanModal;
