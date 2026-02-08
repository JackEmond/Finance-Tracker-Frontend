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
          <div className="net-balance-value">$3796.35</div>
          <div className="balance-change">
            <div className="prev-amount">
              <b className="white">Prev:</b> 3,112.09
            </div>
            <div className="percent-change green">+31.7%</div>
          </div>
        </div>

        {/* Total Income Card */}
        <div className="stat-card">
          <div className="stat-label">Total Income</div>
          <div className="stat-value green">$5,200.00</div>
          <div className="balance-change">
            <div className="prev-amount">
              <b className="white">Prev:</b> 4,800.00
            </div>
            <div className="percent-change green">+8.3%</div>
          </div>
        </div>

        {/* Total Expenses Card */}
        <div className="stat-card">
          <div className="stat-label">Total Expenses</div>
          <div className="stat-value red">$1,403.65</div>
          <div className="balance-change">
            <div className="prev-amount">
              <b className="white">Prev:</b> 1,687.91
            </div>
            <div className="percent-change red">-16.8%</div>
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
              <td>Food</td>
              <td>$450.00</td>
              <td>$500.00</td>
              <td className="green">+11.1%</td>
            </tr>
            <tr>
              <td>Rent</td>
              <td>$800.00</td>
              <td>$750.00</td>
              <td className="red">-6.3%</td>
            </tr>
            <tr>
              <td>Utilities</td>
              <td>$153.65</td>
              <td>$200.00</td>
              <td className="red">-23.2%</td>
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
              <td>Salary</td>
              <td>$4,000.00</td>
              <td>$4,200.00</td>
              <td className="green">+5.0%</td>
            </tr>
            <tr>
              <td>Freelance</td>
              <td>$800.00</td>
              <td>$1,000.00</td>
              <td className="green">+25.0%</td>
            </tr>
            <tr>
              <td>Investments</td>
              <td>$400.00</td>
              <td>$0.00</td>
              <td className="red">-100.0%</td>
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
