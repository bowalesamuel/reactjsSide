import React, { useState } from "react";
import { connect } from "react-redux";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import Input from "../input";
import Button from "../button";
import { initialPaymentByUser } from "../../redux/actions/payment";

const DepositModal = ({
  setIsModalVisible,
  isModalVisible,
  depositNGN,
  depositMoneyDetails,
  depositMoney,
  loading,
}) => {
  const [amount, setAmount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleDeposit = () => {
    depositNGN({ amount });
    setOpenModal(true);
  };
  // useEffect(() => {
  //   if(depositMoney && !openModal){
  //   }
  //   //eslint-disable-next-line
  // }, [depositMoney])
  return (
    <React.Fragment>
      {openModal && (
        <ModalWrapper
          className={styles.scanSell__body}
          style={{ height: 800, width: 300 }}
          // showClose="no"
          // showCancel
          isModalVisible={depositMoney ? openModal : false}
          setIsModalVisible={() => {
            setOpenModal(false);
            setIsModalVisible(false);
          }}
        >
          <iframe
            id="frame"
            height="800"
            style={{
              border: "none",
              boxShadow: "none",
              width: "100%",
              paddingTop: 40,
            }}
            title="payment"
            src={depositMoneyDetails && depositMoneyDetails.fw_paymentLink}
          ></iframe>
        </ModalWrapper>
      )}
      <ModalWrapper
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        className={styles.slimModal}
      >
        <div className={styles.title}>Make a deposit</div>
        <Input
          className={styles.input}
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount here"
        />

        <Button
          className={styles.button}
          text="Proceed to make payment"
          form="full"
          onClick={() => handleDeposit()}
          disabled={!amount || loading}
        />
      </ModalWrapper>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.payment.loading,
  depositMoney: state.payment.depositMoney,
  depositMoneyDetails: state.payment.depositMoneyDetails,
});

const mapDispatchToProps = (dispatch) => ({
  depositNGN: (data) => {
    dispatch(initialPaymentByUser(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DepositModal);
