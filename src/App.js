import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ backgroundColor: "blue", padding: "10px", color: "white" }}>
          <h2 style={{ display: "inline", marginRight: "20px" }}>QUICK DEI</h2>
          <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
          <Link to="/login" style={{ color: "white", marginRight: "10px" }}>Login</Link>
          <Link to="/register" style={{ color: "white" }}>Register</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
