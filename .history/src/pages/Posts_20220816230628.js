import React, { useEffect, useState } from "react";
import { testAxios } from "../config/testAxios";
import axios from "axios";

export const Posts = () => {
  const [test, setTest] = useState("");
  const apiTest = (d) => {
    setTest(d);
  };

  useEffect(() => {
    testAxios("test", apiTest);
  });

  return (
    <div>
      <h1> 하위 ㅋㅋ </h1>
      <h2> {test} </h2>
    </div>
  );
};
