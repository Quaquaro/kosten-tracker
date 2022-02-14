import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { Transaction } from "./Transaction.js";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  console.log();
  return (
    <>
      <h3>Historie</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
