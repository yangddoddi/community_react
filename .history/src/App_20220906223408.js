import React, { useEffect, useState } from "react";
import { testAxios } from "./config/testAxios";
import { MyRoutes } from "./router/Routes";

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
      <MyRoutes />
    </>
  );
};

export default App;
