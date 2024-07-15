import './App.css'
import Inicio from './pages/Inicio'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/Inicio.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<Inicio/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </Router>
    </>


  )
}

export default App
