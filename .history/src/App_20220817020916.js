import Layout from "./pages/Layout";
import React from "react";
import "antd/dist/antd.css";

const App = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <>
      <Layout />
    </>
  );
};

export default App;
