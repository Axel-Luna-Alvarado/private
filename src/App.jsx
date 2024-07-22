import './App.css'
import Inicio from './pages/Inicio'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Reserva } from './pages/Reserva'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/Inicio.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/dashboard/home' element={<Inicio />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Login />} />
          <Route path='/dashboard/reserva' element={<Reserva />} />
        </Routes>
      </Router>
    </>


  )
}

export default App
