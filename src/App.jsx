import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Book Dashboard</h1>
        <nav>
          <Link to="/">Dashboard</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
