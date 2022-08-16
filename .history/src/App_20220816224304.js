import "./App.css";
import React, { useState, useEffect } from "react";
import { testAxios } from "./config/testAxios";

function App() {
  // IP
  const [ip, setIp] = useState("");
  const findIp = (data) => {
    setIp(data);
  };

  useEffect(() => {
    testAxios("test", findIp);
  }, []);

  return <div className="App">{ip}</div>;
}

export default App;
