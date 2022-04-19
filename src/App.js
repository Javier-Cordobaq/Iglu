import './App.css';
import PaginaInicial from './components/PaginaInicial/PaginaInicial';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<PaginaInicial/>} />
      </Routes>
    </div>
  );
}

export default App;
