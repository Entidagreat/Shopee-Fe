import { Routes, Route, Navigate } from 'react-router-dom';
import Showcase from './pages/showcase';
import URegister from './pages/URegister';
import ULogin from './pages/ULogin';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';

function App() {

  return ( 
    <>
    <NavBar/>
  <Container>
  <Routes>
    <Route path="/"element={<Showcase/>} />
    <Route path="/URegister"element={<URegister/>} />
    <Route path="/ULogin"element={<ULogin/>} />
    <Route path="*"element={<Navigate to="/" />} />
  </Routes>
   </Container>
    </>
   );
  
}

export default App;
