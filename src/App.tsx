import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Auth from "./pages/Auth/Auth.page";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Auth></Auth>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
