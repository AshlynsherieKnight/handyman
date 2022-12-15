import HomeFooter from './HomeFooter';
import { Container, Card, Col, Row } from 'react-bootstrap';
import Profiles from './Profiles';


const Team = () => (
  <>
    <Container>
      <Card border='light' className='text-center'>
        <h2>Meet the Team!</h2>
      </Card>
    </Container>
    <br />
    <Profiles />
    <HomeFooter />
  </>
)

export default Team;