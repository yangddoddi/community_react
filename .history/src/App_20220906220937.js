import React from "react";
import { testAxios } from "./config/testAxios";

const App = () => {
  const aa = testAxios;

  return (
    <>
      <h1>{aa}</h1>
    </>
  );
};

export default App;
