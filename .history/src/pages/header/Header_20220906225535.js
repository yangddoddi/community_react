import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";
import axios from "axios";

export const Header = () => {
  const logoutHandler = () => {
    axios;
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Community</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Nav.Link href="/posts/notice">Notice</Nav.Link>
            <Nav.Link href="/posts/board">Board</Nav.Link>
          </Nav>
          <Nav className="right">
            <Nav.Link href="/posts">Contact</Nav.Link>
            <Nav.Link href="/logout" onClick={logoutHandler}>
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
