import { Link } from "react-router-dom";
import "./App.css"; // Reuse styles for now

function Navbar() {
  return (
    <>
      <header>
        <div className="header-content">
          <div className="header-title">Finance Tracker</div>
          <Link to="/" className="add-transaction-button">
            Add Transaction
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
