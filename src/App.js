import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {

  return (
    <div className="home">
            <Routes>
          <Route path="/" element={<Login />} />

          </Routes>
    </div>
  );
}

export default App;
