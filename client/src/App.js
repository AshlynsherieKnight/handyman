import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Team from './components/shared/Team';
import Workers from './components/workers/Workers';


const App = () => (
  <> 
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<Nomatch />} />
      <Route path='/team' element={<Team />} />
      <Route path='/workers' element={<Workers />} />


    </Routes>
  
  </>

)


export default App;
