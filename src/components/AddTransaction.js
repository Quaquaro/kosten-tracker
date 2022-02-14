import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { nanoid } from "nanoid";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: nanoid(),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Füge eine neue Transaktion hinzu</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Gebe Text ein..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Betrag <br />
            (Negativ - Ausgabe, Positiv - Einkommen)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Gebe den Betrag ein..."
          />
        </div>
        <button className="btn">Transaktion hinzufügen</button>
      </form>
    </>
  );
};
