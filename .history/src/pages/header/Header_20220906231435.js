import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export const Header = () => {
  const logoutHandler = () => {
    axios.post("http://localhost8080/logout").catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="header_title">
              Commnunity
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="nav_btn">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/posts/notice" className="nav_btn">
                Notice
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/posts/board" className="nav_btn">
                Board
              </Link>
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
