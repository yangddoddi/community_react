import { Layout } from "antd";
import React from "react";
import styled from "styled-components";
const { Header, Footer, Content } = Layout;
const App = () => (
  <>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
);

export default App;
