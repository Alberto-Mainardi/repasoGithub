import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import ContextUser from '../components/ContextUser';

const AdminRoutes = ({children}) => {
    const {user} = useContext(ContextUser);
    const admin = user.admin;
    console.log(admin);
    if (admin) {
        console.log("Es admin");
        return (
            children
          )
    } else {
        console.log("No es admin");
        return(
            <Navigate to="/" />
        )
    }
}

export default AdminRoutes