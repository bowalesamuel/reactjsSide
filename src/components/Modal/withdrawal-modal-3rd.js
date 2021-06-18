import React from "react";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import Input from "../input";
import Button from "../button";

const WithDrawModal3rd = ({setIsModalVisible, isModalVisible, showCloseAction}) => {
  return (
    <ModalWrapper showCloseAction={showCloseAction} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} className={styles.slimModal}>
      <div className={styles.title}>Withdraw to 3rd party account</div>
      <Input
        className={styles.input}
        label="Narration"
        placeholder="Enter narration here"
      />
      <Input
        className={styles.input}
        label="Withdrawal amount"
        placeholder="Enter amount here"
      />
      <Input
        className={styles.input}
        label="Bank Name"
        placeholder="e.g Zenith Bank"
      />
      <Input
        className={styles.input}
        label="Account Number"
        placeholder="e.g 0123456789"
      />
      <Button className={styles.button} text="Withdraw" form="full" />
    </ModalWrapper>
  );
};

export default WithDrawModal3rd;
