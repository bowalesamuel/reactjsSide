import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ModalWrapper from "./index";
import styles from "./styles.module.scss";
import Input from "../input";
import Select from "../select";
import Button from "../button";
import { Money } from "../../utils/helper";
import {
  getBankListByCountry,
  verifyBankAccountDetails,
  getBankBranchByID,
} from "../../redux/actions/bank";
import { initialWithdrawalByUser } from "../../redux/actions/withdrawals";
// import generalService from "../../redux/services/GeneralService";
import fetch from "../../redux/services/FetchInterceptor";
import { getBTCWalletDetails } from "../../redux/actions/btc";

const { confirm } = Modal;

const WithDrawModal3rd = ({
  setIsModalVisible,
  isModalVisible,
  showCloseAction,
  loading,
  bankList,
  verifyBankAccount,
  bankName,
  getBankBranchList,
  branchList,
  getBankList,
  submitBankDetails,
  balance
}) => {
  const INITIAL_STATE = {
    accountNumber: "",
    bankCode: "",
    bvn: "",
    accountName: "",
    bankName: "",
    currency: "",
    bankBranchCode: "",
    bankBranchName: "",
  };

  const [state, setState] = useState(INITIAL_STATE);
  const [acc, setAcc] = React.useState({
    bankAccountId: "",
    narration: "",
    amount: "",
    pin: "",
    currency: "",
  });
  const [fee, setFee] = React.useState(0);
  React.useEffect(() => {
    if (state.currency && acc.amount && acc.amount >= 500) {
      setFee(0)
      function api() {
        return fetch({
          url: `/payments/outwards/get-transaction-fee`,
          method: "get",
          params: {
            amount: acc.amount,
            currencyId: state.currencyId,
          },
        });
      }
      api().then((res) => {
        setFee(res.data.fee);
      });
    }
  }, [state.currency, acc.amount, state.currencyId]);

  useEffect(() => {
    if (state.bankCode && state.accountNumber.length === 10) {
      verifyBankAccount({
        bankCode: state.bankCode,
        accountNumber: state.accountNumber,
      });
    }
  }, [state.bankCode, state.accountNumber, verifyBankAccount]);
  useEffect(() => {
    if (branchList && branchList.length === 1) {
      setState((state) => ({
        ...state,
        bankBranchName: branchList && branchList[0].branch_name,
        bankBranchCode: branchList && branchList[0].branch_code,
      }));
    }
  }, [branchList]);
  useEffect(() => {
    if (bankName && bankName.accountName) {
      setState((state) => ({
        ...state,
        accountName: bankName && bankName.accountName,
      }));
    }
  }, [bankName]);

  const handleChange = ({ target: { name, value } }) => {
    setState((state) => ({ ...state, [name]: value }));
  };

  const handleBankCode = (value) => {
    handleChange({ target: { name: "bankCode", value: value.split(",")[0] } });
    handleChange({ target: { name: "bankName", value: value.split(",")[1] } });
    handleChange({ target: { name: "accountName", value: "" } });
    handleChange({ target: { name: "accountNumber", value: "" } });
    handleChange({ target: { name: "accountNumber", value: "" } });
    handleChange({ target: { name: "bankBranchCode", value: "" } });
    if (state.currency === "GH") getBankBranchList({ id: value.split(",")[2] });
  };

  const handleFormSubmit = (e) => {
    // const userId = localStorage.getItem(actionTypes.AUTH_TOKEN_ID);
    if (e) {
      e.preventDefault();
    }
    // {
    //   "accountNumber": "0217712602",
    //   "accountName": "BELLO MUBARAK AYOBAMI",
    //   "bankCode": "058",
    //   "bankName": "Guaranty Trust Bank",
    //   "currency": "NGN"
    // }
    let data = {};
    data.accountNumber = state.accountNumber;
    data.accountName = state.accountName;
    data.bankCode = state.bankCode;
    data.bankName = state.bankName;
    data.currency = state.currency;
    
    confirm({
      title: `Withdrawing ${Money(acc.amount, state.currency)}`,
      icon: <ExclamationCircleOutlined style={{ color: "#19a9de" }} />,
      content: `Confirm the withdrawal of ${Money(acc.amount, state.currency)} into ${
        state.accountName
      } ${state.accountNumber} ${state.bankName}`,
      onOk() {
        // return submitBankDetails({ ...acc, bankAccountId: bankAccount.id, currency: state.currency});
      },
      onCancel() {},
    });
  };
  
  return (
    <ModalWrapper
      showCloseAction={showCloseAction}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      className={styles.slimModal}
    >
      <div className={styles.title}>Withdraw to 3rd party account</div>
      <Select
        labelClass={styles.profileBankInputLabel}
        className={styles.profileBankInput}
        label="Select Wallet"
        value={state.currency}
        onSelect={(value) => {
          
          setState((state) => ({
            ...state,
            currency: value.Currency.code,
            currencyId:value.Currency.id,
            accountNumber: "",
            bankCode: "",
            bvn: "",
            accountName: "",
            bankName: "",
            bankBranchCode: "",
            bankBranchName: "",
          }));
          getBankList({ country: value.Currency.code.substring(0,2) });
        }}
        name="select payment currency"
        options={balance.fiatWallets.map((item)=> ({
          render:`${item.Currency.name}`,
          value:item
        }))}
      />
      <Select
        name="bankCode"
        value={state.bankCode}
        onSelect={(value) => handleBankCode(value)}
        label="Bank"
        placeholder="Select your bank"
        options={bankList?.map((i) => ({
          value: `${i.code},${i.name}`,
          render: i.name,
        }))}
      />
      {state.currency === "GHS" && (
        <Select
          name="bankBranchName"
          labelClass={styles.profileBankInputLabel}
          className={styles.profileBankInput}
          value={`${state.bankBranchCode},${state.bankBranchName}`}
          onSelect={(value) => {
            setState((state) => ({
              ...state,
              bankBranchName: value.split(",")[1],
              bankBranchCode: value.split(",")[0],
            }));
          }}
          label="Bank Branch"
          placeholder="Select your bank branch"
          options={
            branchList &&
            branchList?.map((i) => ({
              value: `${i.branch_code},${i.branch_name}`,
              render: i.branch_name,
            }))
          }
        />
      )}
      <Input
        name="accountNumber"
        value={state.accountNumber}
        onChange={handleChange}
        label="Account Number"
        placeholder="e.g 01236548"
        pattern="\d{10}$"
        maxLength="10"
        hint="Please ensure to input the correct account number"
      />
      <Input
        name="accountName"
        value={state.accountName}
        onChange={handleChange}
        label="Account Name"
        placeholder="Enter your account name"
        readOnly={true}
        disabled
      />
      <Input
        className={styles.largeMarginLabel}
        label="Withdrawal amount"
        placeholder="Enter amount here"
        type="number"
        value={acc.amount}
        min={500}
        onChange={(e) => setAcc({ ...acc, amount: e.target.value })}
        hint={state.currency && acc.amount ?
          <span>
            You will be charged <strong>{Money(fee, state.currency || "")}</strong> for this withdrawal.
          </span> : null
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
        maxlength={4}
        value={acc.pin}
        onChange={(e) => setAcc({ ...acc, pin: e.target.value })}
      />
      <Button
        onClick={() => handleFormSubmit()}
        disabled={
          !state.accountNumber ||
          !state.accountName ||
          !state.bankCode ||
          acc.amount < 500 ||
          !fee ||
          loading
        }
        className={styles.button}
        text="Withdraw"
        form="full"
      />
    </ModalWrapper>
  );
};

const mapStateToProps = (state) => ({
  loading: state.withdrawals.loading,
  bankList: state.bank.bankList,
  bankName: state.bank.bankDetails,
  bankLink: state.bank.bankList,
  balance: state.btc.balance
});

const mapDispatchToProps = (dispatch) => ({
  verifyBankAccount: (data) => {
    dispatch(verifyBankAccountDetails(data));
  },
  submitBankDetails: (data) => {
    dispatch(initialWithdrawalByUser(data));
  },
  getBankBranchList: (data) => {
    dispatch(getBankBranchByID(data));
  },
  getBankList: (data) => {
    dispatch(getBankListByCountry(data));
  },
  getBalance: () => {
    dispatch(getBTCWalletDetails())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WithDrawModal3rd);
