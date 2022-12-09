import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Team from './components/shared/Team';

const App = () => (
  <> 
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/team' element={<Team />} />
      <Route path='/*' element={<Nomatch />} />

    </Routes>
  
  </>

)


export default App;
