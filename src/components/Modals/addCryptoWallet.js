import React from "react";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import { ArrowRight } from "../../assets/svg";
import { createCryptoWallet } from "../../redux/actions/Auths";
import { connect } from "react-redux";
// import Button from "../button";

const AddCryptoWallet = (props) => {
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
        <div className={styles.withdrawInitial__title}>Add Crypto Wallet</div>

        {/* <div
          className={styles.lnkButton}
          onClick={() => {
            // setOpenWithdrawal(true);
            props.setIsModalVisible(false);
          }}
        >
          <span>Add BTC Wallet</span> <ArrowRight />
        </div> */}
        {props.wallets.map((item)=> (
            <>
            <div
          className={styles.lnkButton}
          onClick={() => {
              props.createWallet({cryptoCurrencyId:item.id})
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
      dispatch(createCryptoWallet(data));
    }
  });

export default connect(null,mapDispatchToProps)(AddCryptoWallet);
