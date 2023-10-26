import tech from "../../assets/tech.jpg";
import "./Registration.css";

const Registration = () => {
  return (
    <div>
      <div className="container">
        <img src={tech} alt="Imagen de tecnología" className="background-image" />
        <h1 className="registration-title">Registro</h1>
      </div>
      <div className="welcome-rectangle">Virtual event</div>
    </div>
  );
};

export default Registration;