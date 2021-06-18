import React from "react";
import { EmptyEntryWithTitle } from "../../pages/transactions/components";
import { date } from "../../utils/helper";
import styles from "./styles.module.scss";

const Table = ({ data = [], keys = [], schema, renderRight, action, type, onClickActionEmpty, EmptyActionText }) => {
  return (
    <div className={styles.table}>
      <div className={styles.table__top}>
        <h2 className={styles.table__title}>Recent {type} Transactions</h2>
      </div>
      <div className={styles.table__main}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((i, key) => {
                return (
                  <tr key={key}>
                    {keys.map(index => <td key={index}>{index === "createdAt" ? date(i[index]) : i[index]}</td>)}
                    <td>View Details</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">
                  <EmptyEntryWithTitle title={type} action={action} onClick={onClickActionEmpty} actionText={EmptyActionText} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
