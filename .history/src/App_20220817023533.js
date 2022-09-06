import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import React from "react";
import styled from "styled-components";
const { Header, Content, Footer, Sider } = Layout;

const LayoutStyled = styled(Layout)`
  height: 100%;
`;

const ContentStyled = styled(Content)`
  height: 100%;
`;

const App = () => {
  const items = [
    { label: "item 1", key: "1" },
    { label: "item 2", key: "2" },
  ];

  return (
    <LayoutStyled>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
          }}
        />
        <ContentStyled
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            content
          </div>
        </ContentStyled>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </LayoutStyled>
  );
};

export default App;
