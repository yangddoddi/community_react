import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Community</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/posts/notice">Notice</Nav.Link>
            <Nav.Link href="/posts/board">Board</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/posts">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
