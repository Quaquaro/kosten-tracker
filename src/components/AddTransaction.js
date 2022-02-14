import React from "react";

export const AddTransaction = () => {
  return (
    <>
      <h3>Füge eine neue Transaktion hinzu</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Gebe Text ein..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Betrag <br />
            (Negativ - Ausgabe, Positiv - Einkommen)
          </label>
          <input type="number" placeholder="Gebe den Betrag ein..." />
        </div>
        <button className="btn">Transaktion hinzufügen</button>
      </form>
    </>
  );
};
