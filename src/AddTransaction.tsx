import "./AddTransaction.css";

function AddTransaction() {
  return (
    <div className="summary-container">
      <div className="stat-card full-width add-transaction-form">
        {/* Entry data to finance data. includes description type, subcategory and amount */}
        <div className="input-item">
          <label className="input-label">Description</label>
          <input
            type="text"
            placeholder="Description"
            className="input-field"
          />
        </div>
        <div className="input-item">
          <label className="input-label">Amount</label>
          <input type="number" placeholder="Amount" className="input-field" />
        </div>
        <div className="input-item">
          <label className="input-label">Type</label>
          <select className="input-field">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="input-item">
          <label className="input-label">Subcategory</label>
          <select className="input-field">
            <option value="salary">Salary</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <div className="input-item">
          <label className="input-label">Date</label>
          <input type="date" className="input-field" />
        </div>
        <input type="submit" className="submit-button" value="Add" />
      </div>
    </div>
  );
}

export default AddTransaction;
