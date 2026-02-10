interface Transaction {
  id: number;
  description: string;
  amount: number;
  category_name: string;
}

function BreakdownCard({
  title,
  transactions,
}: {
  title: string;
  transactions: Transaction[];
}) {
  return (
    <div className="stat-card full-width">
      <div className="stat-label center-text">{title}</div>
      <table className="table-card">
        <thead>
          <tr>
            <th>Category</th>
            <th>Previous Month</th>
            <th>This Month</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.category_name}</td>
              <td>$0.00</td>
              <td>${t.amount}</td>
              <td>0.0%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BreakdownCard;
