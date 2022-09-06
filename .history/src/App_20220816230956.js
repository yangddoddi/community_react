import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
