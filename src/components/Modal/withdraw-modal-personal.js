import React from "react";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import Input from "../input";
import Button from "../button";

const WithDrawModalPersonal = ({setIsModalVisible, isModalVisible, showCloseAction}) => {
  return (
    <ModalWrapper showCloseAction={showCloseAction} className={styles.slimModal} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
      <div className={styles.title}>Withdraw to personal account</div>
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
      <Button className={styles.button} text="Withdraw" form="full" />
    </ModalWrapper>
  );
};

export default WithDrawModalPersonal;
