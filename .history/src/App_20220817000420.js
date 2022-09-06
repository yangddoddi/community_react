import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="bottom_box">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Posts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
