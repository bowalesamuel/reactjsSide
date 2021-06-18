import React from "react";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import Clipboard from "react-clipboard.js";
import { Copy } from "../../assets/svg";
import { QRCode, Money } from "../../utils/helper";
import {
  receiveBTCIntoWallet,
  getBTCCurrentMarketTicker,
} from "../../redux/actions/btc";
import { notification } from "antd";

const SCanSell = ({
  btcRates,
  getBTCRates,
  btcWalletAddress = "",
  receiveBTC,
  error = false,
  setIsModalVisible,
  isModalVisible,
  title = "Scan to pay or copy the address",
}) => {
  React.useEffect(() => {
    receiveBTC();
    getBTCRates();
  }, [receiveBTC, getBTCRates]);

  return (
    <ModalWrapper
      className={styles.scanSell__body}
      showClose="no"
      showCancel
      isModalVisible={btcWalletAddress ? isModalVisible : false}
      setIsModalVisible={setIsModalVisible}
    >
      <div className={styles.scanSell}>
        <div className={styles.title}>{title}</div>
        <div className={styles.barcode}>
          {QRCode({ text: btcWalletAddress, size: 300 })}
        </div>
        <div className={styles.copy}>
          <span>
            <small>{btcWalletAddress}</small>
          </span>
          <Clipboard
            component="div"
            data-clipboard-text={btcWalletAddress}
            onSuccess={() =>
              notification.success({
                message: "BTC address copied",
                duration: 3,
              })
            }
          >
            <Copy />
          </Clipboard>
        </div>
        {/* <div className={styles.extra}>You are about to pay 0.0000025BTC</div> */}
        <div className={styles.info}>
          Current exchange rate:{" "}
          {Money(
            (btcRates && btcRates.tickers && btcRates.tickers.BTCNGN.sell) || 0,
            "NGN"
          )}
          /1BTC
        </div>
        {error && <div className={styles.error}>error message</div>}
      </div>
    </ModalWrapper>
  );
};

const mapStateToProps = (state) => ({
  btcRates: state.btc.btcTicker,
  btcWalletAddress: state.btc.btcWalletAddress,
});

const mapDispatchToProps = (dispatch) => ({
  receiveBTC: () => {
    dispatch(receiveBTCIntoWallet());
  },
  getBTCRates: () => {
    dispatch(getBTCCurrentMarketTicker());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SCanSell);
