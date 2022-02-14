import "./App.css";
import { Header } from "./components/Header.js";
import { Balance } from "./components/Balance.js";
import { IncomeExpenses } from "./components/IncomeExpenses.js";
function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;
