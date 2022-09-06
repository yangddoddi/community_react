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
  margin: "24px 16px 0";
`;

const MenuStyled = styled(Menu)`
  padding-top: 60px;
`;

const HeaderStyled = styled(Header)`
  padding: 0;
`;

const App = () => {
  const items = [
    { label: "notice", key: "1" },
    { label: "board", key: "2" },
    { label: "board", key: "3" },
    { label: "board", key: "4" },
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
        <MenuStyled
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <HeaderStyled className="site-layout-sub-header-backgrond" />
        <ContentStyled>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const App = () => (
  <div>
    <h4>Middle size table</h4>
    <Table columns={columns} dataSource={data} size="middle" />
    <h4>Small size table</h4>
    <Table columns={columns} dataSource={data} size="small" />
  </div>
);
          </div>
        </ContentStyled>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Yang eun chan @ 2022
        </Footer>
      </Layout>
    </LayoutStyled>
  );
};

export default App;
