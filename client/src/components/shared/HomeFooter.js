import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const HomeFooter = () => (
  <>
    <br />
    <br />
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="">
            <Row>
              <Col><p>© 2022 HandyMan</p></Col>
              <Col><p>Privacy-Terms</p></Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)

export default HomeFooter;