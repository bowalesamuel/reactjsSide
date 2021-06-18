import React from "react";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import { ArrowRight } from "../../assets/svg";
import { connect } from "react-redux";
import { createFiatWallet } from "../../redux/actions/Auths";
// import Button from "../button";

const AddWallet = (props) => {
//   const [openWithdrawal, setOpenWithdrawal] = useState(false);
//   const [openThirdPartyWithdrawal, setOpenThirdPartyWithdrawal] = useState(
//     false
//   );
  return (
    <React.Fragment>
      {/* {openWithdrawal && (
        <WithDrawModalPersonal
          showCloseAction={() => {
            setOpenWithdrawal(false);
            setIsModalVisible(true);
          }}
          isModalVisible={openWithdrawal}
          setIsModalVisible={setOpenWithdrawal}
        />
      )}
      {openThirdPartyWithdrawal && (
        <WithDrawModal3rd
          showCloseAction={() => {
            setOpenThirdPartyWithdrawal(false);
            setIsModalVisible(true);
          }}
          isModalVisible={openThirdPartyWithdrawal}
          setIsModalVisible={setOpenThirdPartyWithdrawal}
        />
      )} */}
      <ModalWrapper
        isModalVisible={props.isModalVisible}
        setIsModalVisible={props.setIsModalVisible}
        className={styles.withdrawInitial}
        showClose="no"
      >
        <div className={styles.withdrawInitial__title}>Add Wallet</div>

        {props.wallets.map((item)=> (
            <>
            <div
          className={styles.lnkButton}
          onClick={() => {
              props.createWallet({fiatCurrencyId:item.id})
            // setOpenWithdrawal(true);
            props.setIsModalVisible(false);
          }}
        >
          <span>{`Add ${item.name}  Wallet`}</span> <ArrowRight />
        </div>
            </>
        ))}

        {/* <div
          className={styles.lnkButton}
          onClick={() => {
            // setOpenWithdrawal(true);
            props.setIsModalVisible(false);
          }}
        >
          <span>Add NGN Wallet</span> <ArrowRight />
        </div>
        <div
          className={styles.lnkButton}
          onClick={() => {
            // setOpenThirdPartyWithdrawal(true);
            props.setIsModalVisible(false);
          }}
        >
          <span>Add GHS Wallet</span> <ArrowRight />
        </div>
        <div
          className={styles.lnkButton}
          onClick={() => {
            // setOpenThirdPartyWithdrawal(true);
            props.setIsModalVisible(false);
          }}
        >
          <span>Add USD Wallet</span> <ArrowRight />
        </div> */}
      </ModalWrapper>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
    createWallet: (data) => {
      dispatch(createFiatWallet(data));
    }
  });

export default connect(null,mapDispatchToProps)(AddWallet);
