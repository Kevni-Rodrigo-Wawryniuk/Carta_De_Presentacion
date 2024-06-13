import './App.css'
import 'react';
import { Routes, Route } from 'react-router';
import { Presentacion_02s } from './pages/page';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/Carta_De_Presentacion/' element={<Presentacion_02s />} />
      </Routes>
    </>
  )
}

export default App
