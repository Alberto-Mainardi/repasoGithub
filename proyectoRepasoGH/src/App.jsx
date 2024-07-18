import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Admin from '../../../repaso-react/src/views/Admin';
import Home from './views/Home';
import Contact from './views/Contact';
import About from './views/About';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/admin' element={<Admin/>} />
          </Routes>
        
      </BrowserRouter>
      <h1>REPASO DE GITHUB</h1>
    </>
  )
}

export default App
