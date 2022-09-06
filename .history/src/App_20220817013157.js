import { Layout } from "antd";
import React from "react";
import styled from "styled-components";

const { Header, Footer, Content } = Layout;
const StyledHeader = styled(Header)`
  position: 'fixed',
  zIndex: 1,
  width: '100%'`;

const App = () => (
  <>
    <Layout>
      <StyledHeader>Header</StyledHeader>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
);

export default App;
