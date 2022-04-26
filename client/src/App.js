import './App.css';
import PaginaInicial from './components/PaginaInicial/PaginaInicial';
import LandingTheTeam from './components/LandingTheTeam/LandingTheTeam';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<PaginaInicial/>} />
        <Route exact path='/team' element={<LandingTheTeam/>}/>
      </Routes>
    </div>
  );
}

export default App;
