import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const HomeHead = () => (
  <Container>
    <Card HomeHeader='bg-img intro-text'>
      <Card.Img
        src="https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
        alt="Home Background"
      />
      <Card.ImgOverlay>
        <h1>Welcome to Handyman!</h1>
      </Card.ImgOverlay>
    </Card>
  </Container>
)

export default HomeHead;