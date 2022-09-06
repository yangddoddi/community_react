import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: noe;
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
          <Navbar.Brand>
            <StyledLink to="/" className="header_title">
              Commnunity
            </StyledLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <StyledLink to="/" className="nav_btn">
                Home
              </StyledLink>
            </Nav.Link>
            <Nav.Link>
              <StyledLink to="/posts/notice" className="nav_btn">
                Notice
              </StyledLink>
            </Nav.Link>
            <Nav.Link>
              <StyledLink to="/posts/board" className="nav_btn">
                Board
              </StyledLink>
            </Nav.Link>
          </Nav>
          <Nav className="right">
            <Nav.Link>
              <Link to="/contact" className="nav_btn">
                ContactMe
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" className="nav_btn" onClick={logoutHandler}>
                Logout
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
