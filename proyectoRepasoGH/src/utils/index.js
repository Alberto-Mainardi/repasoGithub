const urlUsuarios = "http://localhost:3000/usuarios";
import axios from 'axios';

    // CRUD USUARIOS

const traerUsuarios = async () => {
    try {
        let dataUsersAll = await axios.get(urlUsuarios);
        let {data} = dataUsersAll;
        let users = data;
        console.log(users);
        return users
    } catch (error) {
        console.error(error)
    }
}
export const ingresoUsuario = async (obj) => {
    let usuarios = await traerUsuarios();
    console.log(usuarios);
    let usuario = usuarios.find(user => {
        if (user.email == obj.email) {
            return user
        }
    });
    console.log(usuario);
    if (usuario?.email && usuario.password) {
        return usuario
    }
}