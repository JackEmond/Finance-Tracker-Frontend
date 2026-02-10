import "./App.css";
import { useEffect, useState } from "react";
import BreakdownCard from "./BreakdownCard";

// Define the shape of your data (C# DTO equivalent)
interface Transaction {
  id: number;
  description: string;
  amount: number;
  category_name: string;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const positiveTransactions = transactions.filter((t) => t.amount > 0);
  const negativeTransactions = transactions.filter((t) => t.amount < 0);
  const totalIncome = positiveTransactions.reduce(
    (sum, t) => sum + Number(t.amount),
    0,
  );

  const totalExpenses = negativeTransactions.reduce(
    (sum, t) => sum + Number(t.amount),
    0,
  );
  const netBalance = Number(totalIncome) + Number(totalExpenses);

  // Get current month and year for display
  useEffect(() => {
    fetch("http://localhost:5000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <header>
        <div className="header-title">Finance Tracker</div>
      </header>

      {/* Net Balance Card */}
      <div className="summary-container">
        <div className="stat-card full-width">
          <div className="stat-label">Net Balance</div>
          <div className="net-balance-value">${netBalance}</div>
          <div className="balance-change">
            <div className="prev-amount">
              <b className="white">Prev:</b> 0.00
            </div>
            <div className="percent-change">0.0%</div>
          </div>
        </div>

        {/* Total Income Card */}
        <div className="stat-card">
          <div className="stat-label">Total Income</div>
          <div className="stat-value green">${totalIncome}</div>
          <div className="balance-change">
            <div className="prev-amount">
              <b className="white">Prev:</b> 0.00
            </div>
            <div className="percent-change">0.0%</div>
          </div>
        </div>

        {/* Total Expenses Card */}
        <div className="stat-card">
          <div className="stat-label">Total Expenses</div>
          <div className="stat-value red">${Math.abs(totalExpenses)}</div>
          <div className="balance-change">
            <div className="prev-amount">
              <b className="white">Prev:</b> 0.00
            </div>
            <div className="percent-change">0.0%</div>
          </div>
        </div>

        <BreakdownCard
          title="Expenses Breakdown"
          transactions={negativeTransactions}
        />
        <BreakdownCard
          title="Income Breakdown"
          transactions={positiveTransactions}
        />

        {/* Recent Transactions Card */}
        <div className="stat-card full-width">
          <div className="stat-label center-text">Recent Transactions</div>
          <table className="table-card">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td className={transaction.amount < 0 ? "red" : "green"}>
                    {transaction.amount < 0 ? "-" : "+"}$
                    {Math.abs(transaction.amount)}
                  </td>
                  <td>{transaction.category_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
