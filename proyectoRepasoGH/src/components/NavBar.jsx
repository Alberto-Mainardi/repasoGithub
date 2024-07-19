import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react'
import ContextUser from '../components/ContextUser';
const NavBar = () => {


    const {user, setUser} = useContext(ContextUser);
    const logout = () => {
        setUser(
            {
                "id": null,
                "user": "",
                "password": "",
                "email": "",
                "admin":false
              }
        )
    }
    console.log(user.id);

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

          {user.id?<>
            <NavLink className="nav-link" onClick={logout}>
                Cerrar Sesión
            </NavLink>
            </>
            :<>

<NavLink to='/login'>
              Ingresar
          </NavLink>
            </>
            }
        
        {user.admin?<>
                <NavLink to='/admin'>
                Admin
                </NavLink>
            </>
            :<>
            </>
            }
          
      </nav>
    )
  }
  
  export default NavBar