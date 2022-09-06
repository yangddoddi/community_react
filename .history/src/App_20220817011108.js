import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import Layout from "antd/lib/layout/layout";
import { FooterC } from "./components/FooterC";
import "./App.scss";

function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <BrowserRouter>
      <Layout>
        <HeaderC />
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
        <FooterC />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
