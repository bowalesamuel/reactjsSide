import React, { useState } from "react";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import { ArrowRight } from "../../assets/svg";
import WithDrawModalPersonal from "./withdraw-modal-personal";
import WithDrawModal3rd from "./withdrawal-modal-3rd";
// import Button from "../button";

const WithdrawInitial = ({ setIsModalVisible, isModalVisible }) => {
  const [openWithdrawal, setOpenWithdrawal] = useState(false);
  const [openThirdPartyWithdrawal, setOpenThirdPartyWithdrawal] = useState(
    false
  );
  return (
    <React.Fragment>
      <WithDrawModalPersonal
        showCloseAction={() => {
          setOpenWithdrawal(false);
          setIsModalVisible(true);
        }}
        isModalVisible={openWithdrawal}
        setIsModalVisible={setOpenWithdrawal}
      />
      <WithDrawModal3rd
        showCloseAction={() => {
          setOpenThirdPartyWithdrawal(false);
          setIsModalVisible(true);
        }}
        isModalVisible={openThirdPartyWithdrawal}
        setIsModalVisible={setOpenThirdPartyWithdrawal}
      />
      <ModalWrapper
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        className={styles.withdrawInitial}
        showClose="no"
      >
        <div className={styles.withdrawInitial__title}>Withdraw</div>

        <div
          className={styles.lnkButton}
          onClick={() => {
            setOpenWithdrawal(true);
            setIsModalVisible(false);
          }}
        >
          <span>Withdraw to personal account</span> <ArrowRight />
        </div>
        <div
          className={styles.lnkButton}
          onClick={() => {
            setOpenThirdPartyWithdrawal(true);
            setIsModalVisible(false);
          }}
        >
          <span>Withdraw to 3rd party account</span> <ArrowRight />
        </div>
      </ModalWrapper>
    </React.Fragment>
  );
};

export default WithdrawInitial;
