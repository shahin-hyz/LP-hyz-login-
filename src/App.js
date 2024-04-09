import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import StatementModal from "./components/Localpartner/StatementModal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          */LOCAL PARTNER/*
          <Route path="/StatementModal" element={<StatementModal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
