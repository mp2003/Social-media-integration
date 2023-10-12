// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    
      <Routes>
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Login} />
      </Routes>
  );
}

export default App;
