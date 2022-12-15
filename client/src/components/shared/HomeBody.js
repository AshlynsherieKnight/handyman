import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import "../styles/Main.css";

const HomeBody = () => (
  <>
  <br />
  <br />
    <Container>
      <Row>
        <Col>
          <Image 
            src="https://images.unsplash.com/photo-1588619461335-b81119fee1b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFtbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            alt="Home Background"
            width='500px'
          />
        </Col>
        <Col>
          <Row>
            <h3>New Service: Handyman repairs!</h3>
          </Row>
          <Row>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Row>
          <Row>
            <Button href="/Team" variant="outline-dark" >Meet the Team</Button>
          </Row>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <Container>
      <Row className='text-center'>
        <h2>Services</h2>
        <h6>Call Us Now (123) 123-1234</h6>
      </Row>
      <br />
      <Row>
        <Col>
          <Card style={{ width: '18rem', height: '24rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1452794268575-9819db203a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            <Card.Body>
              <Card.Title>Landscaping</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button href="/Workers" variant="primary">Select a Worker</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '24rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1579417195379-5f6916d883a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1511&q=80" />
            <Card.Body>
              <Card.Title>Electrical</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content. 
              </Card.Text>
              <Button href="/Workers" variant="primary">Select a Worker</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '24rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            <Card.Body>
              <Card.Title>Plumbing</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button href="/Workers" variant="primary">Select a Worker</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
)

export default HomeBody;