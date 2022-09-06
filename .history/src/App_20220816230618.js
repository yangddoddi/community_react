import "./App.css";
import React, { useState, useEffect } from "react";
import { testAxios } from "./config/testAxios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
