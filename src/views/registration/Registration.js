import tech from "../../assets/tech.jpg";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="contenedor">
      <img src={tech} alt="Imagen de bienvenida" className="imagen-fondo" />
      <h1 className="RegistrationTitle">Registro</h1>
    </div>
  );
};

export default Registration;