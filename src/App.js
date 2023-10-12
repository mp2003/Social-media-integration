// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="home">
      <Routes>
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Login} />
      </Routes>
      </div>
  );
}

export default App;
