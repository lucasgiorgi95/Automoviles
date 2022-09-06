import Home from './components/Home'
import Detalle from './components/Detalle';
import { Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Detail/:id" element={<Detalle />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
