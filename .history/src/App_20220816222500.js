import "./App.css";
import React, { useState, useEffect } from "react";
import { testAxios } from "./config/testAxios";

function App() {
  // IP 주소 변경
  const [ip, setIp] = useState("");
  // IP 주소 설정
  const callback = (data) => {
    setIp(data);
  };
  // 렌더링 시 실행
  useEffect(() => {
    testAxios("/ip", callback);
  }, []);

  return <div className="App">{ip}에 연결 성공!</div>;
}

export default App;
