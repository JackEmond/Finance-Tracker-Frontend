import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
