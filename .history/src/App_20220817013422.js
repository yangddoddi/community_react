import { Layout, Breadcrumb, Menu } from "antd";
import React from "react";
import styled from "styled-components";

const { Header, Footer, Content } = Layout;
const StyledHeader = styled(Header)`
  position: 'fixed',
  zIndex: 1,
  width: '100%'`;

const StyledMenu = styled(Menu)`
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
        key: String(index + 1),
        label: nav ${index + 1},
        }))}`

const App = () => (
  <>
    <Layout>
      <StyledHeader>
        <Menu
      </StyledHeader>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
);

export default App;
