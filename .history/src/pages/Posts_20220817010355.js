import React, { useEffect, useState } from "react";
import { testAxios } from "../config/testAxios";
import styles from "./Posts.module.scss";
import axios from "axios";
import { Content } from "antd/lib/layout/layout";
import { Breadcrumb } from "antd";

export const Posts = () => {
  const [test, setTest] = useState("");
  const apiTest = (d) => {
    setTest(d);
  };

  useEffect(() => {
    testAxios("test", apiTest);
  });

  return (
    <Content
      className="site-layout"
      style={{
        padding: "0 50px",
        marginTop: 64,
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        Content
      </div>
    </Content>
  );
};
