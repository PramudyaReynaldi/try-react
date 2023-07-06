import React from "react";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} exact />
          <Route path="/register" element={<RegisterPage />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
