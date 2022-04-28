import './App.css';
import PaginaInicial from './components/PaginaInicial/PaginaInicial';
import LandingWork from './components/LandingWork/LandingWork';
import LandingTheTeam from './components/LandingTheTeam/LandingTheTeam';
import SubirProductos from './components/SubirProductos/SubirProductos';
import Meeting from './components/Meeting/Meeting';
import LogIn from './components/LogIn/LogIn';
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {

  const login = useSelector(c => c.login)

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<PaginaInicial/>} />
        <Route exact path='/work' element={<LandingWork/>}/>
        <Route exact path='/team' element={<LandingTheTeam/>}/>
        <Route exact path='/meting' element={<Meeting/>}/>
        <Route exact path='/admin' element={login.length === 0 ? <LogIn/> : <SubirProductos/>} />
      </Routes>
    </div>
  );
}

export default App;
