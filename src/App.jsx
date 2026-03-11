import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/global.css"

import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <Routes>
        {/* Đường link mặc định (root) sẽ dẫn vào LoginPage */}
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

