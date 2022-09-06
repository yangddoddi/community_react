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
            <Nav.Link href="/posts">Notice</Nav.Link>
            <Nav.Link href="/posts">Board</Nav.Link>
            <Nav.Link href="/posts">Board</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
