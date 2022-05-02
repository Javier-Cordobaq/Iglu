import './App.css';
import PaginaInicial from './components/PaginaInicial/PaginaInicial';
import LandingWork from './components/LandingWork/LandingWork';
import LandingTheTeam from './components/LandingTheTeam/LandingTheTeam';
import DashBoard from './components/DashBoard/DashBoard';
import Meeting from './components/Meeting/Meeting';
import LogIn from './components/LogIn/LogIn';
import SubirProyectos from './components/SubirProyectos/SubirProyectos';
import SubirTrabajos from './components/SubirTrabajos/SubirTrabajos';
import TablaProjects from './components/TablaProjects/TablaProjects';
import DetailProyectos from './components/DetailProyectos/DetailProyectos';
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
        <Route exact path='/detail/:_id' element={<DetailProyectos/>}/>
        <Route exact path='/admin' element={ login === true ?  <DashBoard/> :<LogIn/> } />
        <Route exact path='/subirproyectos' element={ login === true ? <SubirProyectos/> :<LogIn/> } />
        <Route exact path='/subirtrabajos' element={ login === true ? <SubirTrabajos/> :<LogIn/> } />
        <Route exact path='/proyectos' element={ login === true ? <TablaProjects/> :<LogIn/> } />
      </Routes>
    </div>
  );
}

export default App;
