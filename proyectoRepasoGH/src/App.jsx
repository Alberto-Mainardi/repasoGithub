import './App.css'
import { useState } from 'react';
import ContextUser from './components/ContextUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ingresoUsuario } from './utils/index'
import Admin from './views/Admin';
import Home from './views/Home';
import Contact from './views/Contact';
import About from './views/About';
import Login from './views/Login';
import AdminRoutes from './routes/AdminRoutes';


function App() {


  const [user, setUser] = useState(
    {
      "id": null,
      "user": "",
      "password": "",
      "email": "",
      "admin":false
    }
  )
console.log(user.id?true:false);
console.log(user);

  return (
    <ContextUser.Provider value={{user,setUser}}>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login ingresoUsuario={ingresoUsuario}/>}/>
            <Route path='/admin' element={
              <AdminRoutes>
                <Admin/>
              </AdminRoutes>
              } />
          </Routes>
        
      </BrowserRouter>
      <h1>REPASO DE GITHUB</h1>
    </ContextUser.Provider>
  )
}

export default App
