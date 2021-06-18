import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Modal, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import Input from "../input";
import Select from "../select";
import Button from "../button";
import { getUserBankAccount } from "../../redux/actions/user";
import { initialWithdrawalByUser } from "../../redux/actions/withdrawals";
import { CommaFormatted, Money } from "../../utils/helper";
import fetch from "../../redux/services/FetchInterceptor";
import { getBTCWalletDetails } from "../../redux/actions/btc";

const { confirm } = Modal;

const WithDrawModalPersonal = ({
  setIsModalVisible,
  isModalVisible,
  showCloseAction,
  getUserBankDetails,
  bankAccounts,
  submitBankDetails,
  loading,
  getBalance,
  balance,
  settings,
  fiatCurrency,
}) => {
  React.useEffect(() => {
    getUserBankDetails();
    getBalance();
    // eslint-disable-next-line
  }, []);
  const [fee, setFee] = React.useState(0);
  const [min_amount, setMin_amount] = useState(0);
  const [max_amount, setMax_amount] = useState(0);
  const [walletBalance, setWalletBalance] = useState(0);
  const [show_min, setShow_min] = useState(false);
  const [show_max, setShow_max] = useState(false);
  const [acc, setAcc] = React.useState({
    bankAccountId: "",
    narration: "",
    amount: "",
    currency: "",
    pin: "",
  });
  // React.useEffect(() => {
  //   if (acc.currency && acc.amount && acc.amount >= 500) {
  //     function api() {
  //       setFee(0);
  //       return fetch({
  //         url: `/payments/outwards/get-transaction-fee`,
  //         method: "get",
  //         params: {
  //           amount: acc.amount,
  //           currencyId: acc.currencyId,
  //         },
  //       });
  //     }
  //     api().then((res) => {
  //       setFee(res.data.fee);
  //     });
  //   }
  // }, [acc.currencyId, acc.amount, acc.currency]);

  useEffect(() => {
    let fiatCurrencyUsed =
      acc.currency &&
      fiatCurrency.filter((item) => item.code === acc.currency)[0];
    let walletCurrencyUsed =
      acc.currency &&
      balance.fiatWallets.filter(
        (item) => item.Currency.code === acc.currency
      )[0];
    acc.currency &&
      setMin_amount(
        settings.withdrawal_min_amount.value.data * fiatCurrencyUsed.we_sell
      );
    acc.currency &&
      setMax_amount(
        settings.withdrawal_max_amount.value.data * fiatCurrencyUsed.we_sell
      );
    acc.currency &&
      walletCurrencyUsed &&
      walletCurrencyUsed.balance &&
      setWalletBalance(parseFloat(walletCurrencyUsed.balance));
  }, [acc.currency]);

  const showPromiseConfirm = () => {
    if (
      acc.pin.match(/^\d{4}$|^\d{6}$/) &&
      (acc.pin.length === 4 || acc.pin.length === 6)
    ) {
      const data =
        bankAccounts &&
        bankAccounts.filter((item) => item.id === acc.bankAccountId)[0];
      confirm({
        title: `Withdrawing ${acc.currency} ${CommaFormatted(acc.amount)}`,
        icon: <ExclamationCircleOutlined style={{ color: "#19a9de" }} />,
        content: `Confirm the withdrawal of ${acc.currency} ${CommaFormatted(
          acc.amount
        )} into ${data.details.account_name} ${data.account_number} ${
          data.details.bankName ? data.details.bankName : data.bank_code
        }`,
        onOk() {
          return submitBankDetails({ ...acc });
        },
        onCancel() {},
      });
    } else {
      notification.info({
        message: "Check your Pin",
      });
    }
  };

  return (
    <ModalWrapper
      showCloseAction={showCloseAction}
      className={styles.slimModal}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <div className={styles.title}>Withdraw</div>
      {/* {console.log("bank accounts", bankAccounts)} */}
      <Select
        options={
          bankAccounts &&
          bankAccounts.map((item) => ({
            value: item.id,
            render:
              item.type.value !== "gh-mobile"
                ? `${item.account_number} - ${item.details.bankName} - ${item.details.account_name}`
                : `${item.account_number} - ${item.bank_code} - ${item.details.account_name}`,
          }))
        }
        value={acc.bankAccountId}
        onSelect={(e) => setAcc({ ...acc, bankAccountId: e })}
        className={styles.largeMarginLabel}
        label="Select Account to Transfer to"
      />
      <Select
        labelClass={styles.largeMarginLabel}
        label="Select Wallet"
        value={acc.currency}
        onSelect={(value) => {
          setAcc((acc) => ({
            ...acc,
            currency: value.Currency.code,
            currencyId: value.Currency.id,
            fiatWalletId: value.id,
            pin: "",
            narration: "",
            amount: "",
          }));
        }}
        name="select payment currency"
        // options={[
        //   { render: "NGN", value: "NGN" },
        //   { render: "GHS", value: "GHS" },
        // ]}
        options={balance.fiatWallets.map((item) => ({
          render: `${item.Currency.name}`,
          value: item,
        }))}
        // hint={
        //   acc.currency && acc.amount > walletBalance ? (
        //     <span style={{ color: "#921946" }}>
        //       That's more than you have in your wallet{" "}
        //       <i class="fas fa-exclamation-circle"></i>
        //     </span>
        //   ) : show_min ? (
        //     <span style={{ color: "#921946" }}>
        //       Minimum withdrawal amount is {acc.currency}{" "}
        //       {CommaFormatted(min_amount)}{" "}
        //       <i class="fas fa-exclamation-circle"></i>
        //     </span>
        //   ) : show_max ? (
        //     <span style={{ color: "#921946" }}>
        //       Maximum withdrawal amount is {acc.currency}{" "}
        //       {CommaFormatted(max_amount)}{" "}
        //       <i class="fas fa-exclamation-circle"></i>
        //     </span>
        //   ) : null
        // }
      />
      {/* <div>
      <span>
            Minimum withdrawal amount is {acc.currency}{" "}{CommaFormatted(min_amount)}
          </span>
          <span>
          Maximum withdrawal amount is {acc.currency}{" "}{CommaFormatted(max_amount)}
          </span>
      </div> */}

      <Input
        className={styles.largeMarginLabel}
        label="Withdrawal amount"
        placeholder="Enter amount here"
        type="number"
        name="withdrawal"
        onInput={(e) => {
          if (e.target.value < min_amount) {
            setShow_min(true);
          } else if (e.target.value > max_amount) {
            setShow_max(true);
            setShow_min(false);
          } else {
            setShow_min(false);
            setShow_max(false);
          }
        }}
        min={min_amount}
        max={max_amount}
        value={acc.amount}
        // min={500}
        onChange={(e) => setAcc({ ...acc, amount: e.target.value })}
        hint={
          // acc.currency && acc.amount ? (
          //   <span>
          //     You will be charged{" "}
          //     <strong>
          //       {acc.currency && acc.currency} {CommaFormatted(fee)}
          //     </strong>{" "}
          //     for this withdrawal.
          //   </span>
          // ) : null
          acc.currency && acc.amount > walletBalance ? (
            <span style={{ color: "#921946" }}>
              That's more than you have in your wallet{" "}
              <i class="fas fa-exclamation-circle"></i>
            </span>
          ) : show_min ? (
            <span style={{ color: "#921946" }}>
              Minimum withdrawal amount is {acc.currency}{" "}
              {CommaFormatted(min_amount)}{" "}
              <i class="fas fa-exclamation-circle"></i>
            </span>
          ) : show_max ? (
            <span style={{ color: "#921946" }}>
              Maximum withdrawal amount is {acc.currency}{" "}
              {CommaFormatted(max_amount)}{" "}
              <i class="fas fa-exclamation-circle"></i>
            </span>
          ) : null
        }
      />
      <Input
        className={styles.largeMarginLabel}
        label="Narration"
        placeholder="Enter narration here"
        type="text"
        value={acc.narration}
        onChange={(e) => setAcc({ ...acc, narration: e.target.value })}
      />
      <Input
        className={styles.largeMarginLabel}
        label="Enter Transaction Pin"
        placeholder="Enter Transaction Pin"
        type="password"
        // pattern="[0-9]*"
        inputmode="numeric"
        maxlength={4}
        value={acc.pin}
        onChange={(e) => setAcc({ ...acc, pin: e.target.value })}
      />

      <Button
        onClick={() => showPromiseConfirm()}
        className={styles.button}
        disabled={
          acc.amount > walletBalance ||
          acc.amount < min_amount ||
          acc.amount > max_amount ||
          !acc.bankAccountId ||
          !acc.pin ||
          !acc.amount ||
          loading
          // ||!fee
        }
        text="Withdraw"
        form="full"
      />
    </ModalWrapper>
  );
};

const mapStateToProps = (state) => ({
  loading: state.withdrawals.loading,
  bankAccounts: state.bank.bankAccounts,
  // balance: state.btc.balance,
});

const mapDispatchToProps = (dispatch) => ({
  getUserBankDetails: () => {
    dispatch(getUserBankAccount());
  },
  submitBankDetails: (data) => {
    dispatch(initialWithdrawalByUser(data));
  },
  getBalance: () => {
    dispatch(getBTCWalletDetails());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithDrawModalPersonal);
