import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Base />
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
