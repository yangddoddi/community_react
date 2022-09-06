import React, { useEffect, useState } from "react";
import { testAxios } from "./config/testAxios";
import { Header } from "./pages/Header";
import { MyRoutes } from "./router/Routes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [ip, setIp] = useState("");
  const findIp = (data) => {
    setIp(data);
  };

  useEffect(() => {
    testAxios("test", findIp);
  });

  return (
    <>
      <Header />
      <MyRoutes />
    </>
  );
};

export default App;
