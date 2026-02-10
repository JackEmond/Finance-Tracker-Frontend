import { Link } from "react-router-dom";
import "./App.css"; // Reuse styles for now

function Navbar() {
  return (
    <>
      <header>
        <div className="header-content">
          <Link to="/" className="header-title">
            Finance Tracker
          </Link>
          <Link to="add-transaction" className="add-transaction-button">
            Add Transaction
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
