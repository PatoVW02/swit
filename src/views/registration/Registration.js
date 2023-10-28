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

      <div className="centered-form" style={{ marginTop: '30px' }}> {/* Contenedor para centrar el iframe */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd57AA1e-oKdev3fPk2UNVODxYqIEE9kHEVqCe8pXcqhnpnPg/viewform?usp=sf_link"
          width="50%"
          height="950"  // Ajusta la altura según tus necesidades
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        ></iframe>
      </div>
    </div>
  );
};

export default Registration;