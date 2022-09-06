import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
            <Nav.Link as={Link} to="/posts/notice" className="header_title">
              Notice
            </Nav.Link>
            <Nav.Link as={Link} to="/posts/board" className="header_title">
              Board
            </Nav.Link>
          </Nav>
          <Nav className="right">
            <Nav.Link as={Link} to="/contact" className="header_title">
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              className="header_title"
              onClick={logoutHandler}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
