import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Füge eine neue Transaktion hinzu</h3>
      <form>
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
