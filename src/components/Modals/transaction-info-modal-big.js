import React from "react";
import { Image } from "antd";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import {
  TransactionIconMed,
  TransactionIconSuc,
  TransactionIconBig,
} from "../../assets/svg";
import capitalizeFirstLetter, { date, Money } from "../../utils/helper";

export const TransactionModalBuyGiftCard = ({
  type,
  setIsModalVisible,
  isModalVisible,
  dateData,
  cardValue,
  status,
  reference,
  title = "Buy Gift Card Transaction",
  referenceCurrency,
  quan,
  cardCurrency,
  cardSlug,
  estimatedUSDValue
}) => {
  return (
    <ModalWrapper
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      className={styles.withdrawInitial}
      showClose="no"
      showCancel
    >
      <div className={styles.transactionBig}>
        <div className={styles.transactionBig__tag}>
          {title}
        </div>
        <div className={styles.transactionBig__top}>
          <div className={styles.transactionBig__top__left}>
            <div className={`${styles.badge} ${styles[type]}`}>
              {status === "SUBMITTED" && <TransactionIconBig />}
              {status === "APPROVED" && <TransactionIconSuc />}
              {status === "DECLINED" && <TransactionIconMed />}
              {status === "CANCELLED" && <TransactionIconMed />}
            </div>
            <div className={styles.text}>
              <div className={`${styles.title} ${styles.main}`}>{cardSlug && cardSlug.replace("-", " ").replace("_", " ")}</div>
              <div className={`${styles.sub}`}>{date(dateData)}</div>
            </div>
          </div>
          <div className={`${styles.status} ${styles[status]}`}>{status}</div>
        </div>
        <div className={styles.transactionBig__main}>
          <div
            className={styles.transactionBig__main__holder}
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <div className={styles.transactionBig__main__content}>
              <span>Reference ID</span> <span>{reference}</span>
            </div>
          </div>
          <div
            className={styles.transactionBig__main__holder}
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <div className={styles.transactionBig__main__content}>
              <span>Wallet Used</span> <span>{referenceCurrency.split('-')[0].trim()}</span>
            </div>
          </div>
          <h4>Card Details</h4>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Card Value</span> <span>{cardCurrency} {cardValue}</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            {/* <div className={styles.transactionBig__main__content}>
              <span>USD Price</span> <span> {Money(estimatedUSDValue.amount, "USD")}</span>
            </div> */}
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Quantity</span> <span>{quan}</span>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export const TransactionModalBillPayment = ({
  type,
  setIsModalVisible,
  isModalVisible,
  dateData,
  amount,
  status,
  reference,
  title = "Deposit",
  rate,
  transactionFee,
  id,
  referenceCurrency,
  details,
}) => {
  return (
    <ModalWrapper
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      className={styles.withdrawInitial}
      showClose="no"
      showCancel
    >
      <div className={styles.transactionBig}>
        <div className={styles.transactionBig__tag}>
          {title}
        </div>
        <div className={styles.transactionBig__top}>
          <div className={styles.transactionBig__top__left}>
            <div className={`${styles.badge} ${styles[type]}`}>
              {status === "INITIATED" && <TransactionIconBig />}
              {status === "DONE" && <TransactionIconSuc />}
              {status === "FAILED" && <TransactionIconMed />}
              {status === "CANCELLED" && <TransactionIconMed />}
            </div>
            <div className={styles.text}>
              <div className={`${styles.title} ${styles.main}`}>{details && details.serviceName}</div>
              <div className={`${styles.sub}`}>{date(dateData)}</div>
            </div>
          </div>
          <div className={`${styles.status} ${styles[status]}`}>{status}</div>
        </div>
        <div className={styles.transactionBig__main}>
          <div
            className={styles.transactionBig__main__holder}
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <div className={styles.transactionBig__main__content}>
              <span>Reference ID</span> <span>{reference}</span>
            </div>
          </div>
          <div
            className={styles.transactionBig__main__holder}
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <div className={styles.transactionBig__main__content}>
              <span>Service Name</span> <span>{details && details.serviceName}{" "}{details && capitalizeFirstLetter(details.serviceCode)}</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Number</span> <span>{details && details.servicedNumber}</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Amount Paid</span> <span>{amount}</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Transaction Fee</span> <span>{transactionFee}</span>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

const TransactionModalBig = ({
  type,
  setIsModalVisible,
  isModalVisible,
  dateData,
  amount,
  status,
  reference,
  title = "Deposit",
  rate,
  Qua,
  id,
  cardCode,
  images = [],
}) => {
  return (
    <ModalWrapper
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      className={styles.withdrawInitial}
      showClose="no"
      showCancel
    >
      <div className={styles.transactionBig}>
        <div className={styles.transactionBig__tag}>
          {/* <span>Transaction</span> <span> #{id} </span> */}
        </div>
        <div className={styles.transactionBig__top}>
          <div className={styles.transactionBig__top__left}>
            <div className={`${styles.badge} ${styles[type]}`}>
              {status === "SUBMITTED" && <TransactionIconBig />}
              {status === "APPROVED" && <TransactionIconSuc />}
              {status === "DECLINED" && <TransactionIconMed />}
              {status === "CANCELLED" && <TransactionIconMed />}
            </div>
            <div className={styles.text}>
              <div className={`${styles.title} ${styles.main}`}>{title}</div>
              <div className={`${styles.sub}`}>{date(dateData)}</div>
            </div>
          </div>
          <div className={`${styles.status} ${styles[status]}`}>{status}</div>
        </div>
        <div className={styles.transactionBig__main}>
          <div className={styles.transactionBig__main__heading}>
            Transaction Info
          </div>
          <div
            className={styles.transactionBig__main__holder}
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <div className={styles.transactionBig__main__content}>
              <span>Reference ID</span> <span>{reference}</span>
            </div>
            <div className={styles.transactionBig__main__content}>
              <span>Transaction Rate</span> <span>{Money(rate, "NGN")}/$</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Amount Paid</span> <span>{Money(amount, "NGN")}</span>
            </div>
            <div className={styles.transactionBig__main__content}>
              <span>Comment</span> <span>{Qua}</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Card Traded</span>
              <span>{cardCode && cardCode.replace(".", "-")}</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div
              className={styles.transactionBig__main__content}
              style={{ width: "100%" }}
            >
              <span>Images</span>
              <div
                style={{ width: "100%", overflowX: "auto", display: "flex" }}
              >
                {images.map((i, index) => (
                  <Image
                    style={{ width: 150, height: 200, margin: 15 }}
                    key={index}
                    src={i}
                    alt={`card-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export const TransactionModalBTC = ({
  type,
  status,
  transactionType,
  reference,
  rate,
  amount,
  address,
  dateData,
  quidaxTransactionId,
  txid,
  transactionFee,
  setIsModalVisible,
  isModalVisible,
  data,
}) => {
  return (
    <ModalWrapper
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      className={styles.withdrawInitial}
      showClose="no"
      showCancel
    >
      <div className={styles.transactionBig}>
        <div className={styles.transactionBig__tag}>
          <span>Transaction</span> <span> #{data.quidax_transaction_id} </span>
        </div>
        <div className={styles.transactionBig__top}>
          <div className={styles.transactionBig__top__left}>
            <div className={`${styles.badge} ${styles[type]}`}>
              {status === "SUBMITTED" && (
                <TransactionIconBig
                  style={
                    transactionType !== "BUY"
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                />
              )}
              {status === "DONE" && (
                <TransactionIconSuc
                  style={
                    transactionType !== "BUY"
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                />
              )}
              {status === "FAILED" && (
                <TransactionIconMed
                  style={
                    transactionType !== "BUY"
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                />
              )}
              {status === "CANCELLED" && (
                <TransactionIconMed
                  style={
                    transactionType !== "BUY"
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                />
              )}
            </div>
            <div className={styles.text}>
              <div className={`${styles.title} ${styles.main}`}>
                {data.CreditCryptoCurrency.code} Transaction
              </div>
              <div className={`${styles.sub}`}>{date(dateData)}</div>
            </div>
          </div>
          <div className={`${styles.status} ${styles[status]} `}>{status}</div>
        </div>
        <div className={styles.transactionBig__main}>
          <div className={styles.transactionBig__main__heading}>
            Transaction Info
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Reference ID</span> <span>{reference}</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Amount</span> <span>{amount} {data.CreditCryptoCurrency.code}</span>
            </div>
            {/* <div className={styles.transactionBig__main__content}>
              <span>Transaction Rate</span> <span>{Money(rate, "NGN")}/$</span>
            </div> */}
            <div className={styles.transactionBig__main__content}>
              <span>Transaction Type</span> <span>{data.CreditCryptoCurrency.name}</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            {/* <div className={styles.transactionBig__main__content}>
              <span>Transaction fee</span> <span>{transactionFee} BTC</span>
            </div> */}
            <div className={styles.transactionBig__main__content}>
              <span>Type</span> <span>{type}</span>
            </div>
          </div>
          {address && (
            <div className={styles.transactionBig__main__holder}>
              <div className={styles.transactionBig__main__content}>
                <span>Wallet Address</span>
                <span>{address}</span>
              </div>
            </div>
          )}
          {txid && (
            <div className={styles.transactionBig__main__holder}>
              <div
                style={{ width: "100%" }}
                className={styles.transactionBig__main__content}
              >
                <span>Transaction Hash</span>
                <div
                  style={{ overflow: "auto", width: "100%" }}
                  className={styles.transactionBig__main__content}
                >
                  <a
                    href={`https://www.blockchain.com/btc/tx/${txid}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{txid}</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};

export const TransactionModalP2P = ({
  status,
  reference,
  rate,
  dateData,
  amountReceived,
  amountSent,
  transferNote,
  setIsModalVisible,
  isModalVisible,
}) => {
  return (
    <ModalWrapper
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      className={styles.withdrawInitial}
      showClose="no"
      showCancel
    >
      <div className={styles.transactionBig}>
        <div className={styles.transactionBig__tag}>
          {/* <span>Transaction</span> <span> #{quidaxTransactionId} </span> */}
        </div>
        <div className={styles.transactionBig__top}>
          <div className={styles.transactionBig__top__left}>
            <div className={styles.text}>
              <div className={`${styles.title} ${styles.main}`}>
                P2P Transaction
              </div>
              <div className={`${styles.sub}`}>{date(dateData)}</div>
            </div>
          </div>
          <div className={`${styles.status} ${styles[status]} `}>{status}</div>
        </div>
        <div className={styles.transactionBig__main}>
          <div className={styles.transactionBig__main__heading}>
            Transaction Info
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Reference ID</span> <span>{reference}</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Amount Sent</span> <span>{amountSent}</span>
            </div>
            <div className={styles.transactionBig__main__content}>
              <span>Amount Received</span> <span>{amountReceived}</span>
            </div>
            <div className={styles.transactionBig__main__content}>
              <span>Transaction Rate</span> <span>{rate}</span>
            </div>
          </div>
          <div className={styles.transactionBig__main__holder}>
            <div className={styles.transactionBig__main__content}>
              <span>Transfer Note</span> <span>{transferNote}</span>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default TransactionModalBig;
