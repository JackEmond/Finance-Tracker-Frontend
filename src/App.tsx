import "./App.css";
import { useEffect, useState } from "react";

// Define the shape of your data (C# DTO equivalent)
interface Transaction {
  id: number;
  description: string;
  amount: number;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

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
          <div className="stat-label center-text">Net Balance</div>
          <div className="net-balance-value">$0.00</div>
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
          <div className="stat-value green">$0.00</div>
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
          <div className="stat-value red">$0.00</div>
          <div className="balance-change">
            <div className="prev-amount">
              <b className="white">Prev:</b> 0.00
            </div>
            <div className="percent-change">0.0%</div>
          </div>
        </div>

        {/* Expense Breakdown Card */}
        <div className="stat-card full-width">
          <div className="stat-label center-text">Expense Breakdown</div>
          <table className="table-card">
            <tr>
              <th>Category</th>
              <th>Previous Month</th>
              <th>This Month</th>
              <th>Difference</th>
            </tr>
            <tr>
              <td>category name</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>0.0%</td>
            </tr>
          </table>
        </div>

        {/* Income BreakdownCard */}
        <div className="stat-card full-width">
          <div className="stat-label center-text">Income Breakdown</div>
          <table className="table-card">
            <tr>
              <th>Category</th>
              <th>Previous Month</th>
              <th>This Month</th>
              <th>Difference</th>
            </tr>
            <tr>
              <td>category name</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>0.0%</td>
            </tr>
          </table>
        </div>

        {/* Recent Transactions Card */}
        <div className="stat-card full-width">
          <div className="stat-label center-text">Recent Transactions</div>
          <table className="table-card">
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td className={transaction.amount < 0 ? "red" : "green"}>
                  {transaction.amount < 0 ? "-" : "+"}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td>{transaction.amount < 0 ? "Expense" : "Income"}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
