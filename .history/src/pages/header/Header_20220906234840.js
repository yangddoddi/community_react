import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: no;
  }
`;

export const Header = () => {
  const logoutHandler = () => {
    axios.post("http://localhost8080/logout").catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="header_title">
            Community
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="header_title">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="header_title">
              Notice
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="header_title">
              Board
            </Nav.Link>
          </Nav>
          <Nav className="right">
            <Nav.Link as={Link} to="/" className="header_title">
              ContactMe
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="header_title">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
