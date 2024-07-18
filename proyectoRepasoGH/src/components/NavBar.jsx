import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
          
          <Link to='/'>
              Home
          </Link>
          <NavLink to='/about'>
              Acerca de
          </NavLink>
          <NavLink to='/contact'>
              Contacto
          </NavLink>
          <NavLink to='/admin'>
              Admin
          </NavLink>
      </nav>
    )
  }
  
  export default NavBar