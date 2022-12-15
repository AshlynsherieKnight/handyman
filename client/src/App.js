import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Team from './components/shared/Team';
import Comments from './components/comments/Comments';
import Workers from './components/workers/Workers';
import Services from './components/services/Services';

const App = () => (
  <> 
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/team' element={<Team />} />
      <Route path='/workers' element={<Workers />} />
      <Route path='/:workerID/services' element={<Services />} />
      <Route path='/:serviceId/comments' element={<Comments />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  
  </>

)


export default App;
