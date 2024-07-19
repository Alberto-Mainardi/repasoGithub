import { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
useContext
import ContextUser from '../components/ContextUser';

function Login({ingresoUsuario}) {

  const {user, setUser} = useContext(ContextUser);
  const {register, handleSubmit, formState:{errors}, reset} = useForm();
  const ingresar = async (obj) => {
    try {
      // datos del formulario de ingreso enviado
      console.log(obj);
      let ingr = await ingresoUsuario(obj);
      // console.log(ingr);
      if (!ingr) {
        console.log("usuario incorrecto");
      } else {
        setUser(
          {
              "id": ingr.id,
              "user": ingr.user,
              "password": ingr.password,
              "email": ingr.email,
              "admin": ingr.admin
            }
      )
    reset()
    Swal.fire({
      title: "Sesión Iniciada Exitosamente!",
      text: "cool",
      icon: "success"
    });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="main d-flex justify-content-around align-items-center flex-wrap">
    <Form onSubmit={handleSubmit(ingresar)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
        {...register("email",
          {required:"El email es un campo obligatorio"}
        )}/>

        <Form.Text className="text-muted">
          {errors.email?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password"
        autoComplete='false'
        {...register("password",
          {required:"La contraseña es un campo obligatorio"}
        )} />
        <Form.Text className="text-muted">
          {errors.password?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuerdame." name="recuerdame"
        {...register("recuerdame")}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
    </main>
  );
}

export default Login;