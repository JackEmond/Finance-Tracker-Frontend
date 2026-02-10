import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./App.css";
import Navbar from "./Navbar";
import AddTransaction from "./AddTransaction";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="add-transaction" element={<AddTransaction />} />
      </Routes>
    </>
  );
}

export default App;
