import logo from './logo.svg';
import './App.css';
import Juan from './componentes/Juan';
import Mel from './componentes/Mel';
import Luna from './componentes/Luna';
import Andres from './componentes/Andres';
import Barra from './componentes/Barra';

function App() {
  return (
    <Router>

       <Barra/>
       <Routes>
        <Route path="/juan" element={Juan} />
        <Route path="/luna" element={Luna} />
        <Route path="/andres" element={<Andres/>} /> {/* Corregir el nombre del componente */}
        <Route path="/mel" element={<Mel/>} />

       </Routes>
    </Router>
  )
}

export default App;
