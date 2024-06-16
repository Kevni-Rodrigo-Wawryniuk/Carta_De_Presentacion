import './App.css'
import 'react';
import { Routes, Route } from 'react-router';
import { Presentaciones } from './pages/page';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/Carta_De_Presentacion/' element={<Presentaciones />} />
      </Routes>
    </>
  )
}

export default App
