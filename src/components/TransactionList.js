import React from "react";

export const TransactionList = () => {
  return (
    <>
      <h3>Historie</h3>
      <ul className="list">
        <li className="minus">
          Bargeld <span>-400€</span> <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
