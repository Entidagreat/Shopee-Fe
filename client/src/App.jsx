import { Routes, Route, Navigate } from 'react-router-dom';
import Showcase from './pages/showcase';
import URegister from './pages/URegister';
import ULogin from './pages/ULogin';

function App() {

  return ( 
  <>
  <Routes>
    <Route path="/"element={<Showcase/>} />
    <Route path="/URegister"element={<URegister/>} />
    <Route path="/ULogin"element={<ULogin/>} />
    <Route path="*"element={<Navigate to="/" />} />
  </Routes>

   </>
   );
  
}

export default App;
