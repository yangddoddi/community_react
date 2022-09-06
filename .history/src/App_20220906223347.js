import React, { useEffect, useState } from "react";
import { testAxios } from "./config/testAxios";

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
      <h1>{ip}</h1>
      <Rou
    </>
  );
};

export default App;
