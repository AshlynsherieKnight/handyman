import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const HNavbar = () => (
  <>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand>HandyMan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to='/'>
          <li>Home</li>
          </Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to='/workers'>
              <li>Workers</li>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to='/team'>
              <li>Team</li>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  </>
)

export default HNavbar;