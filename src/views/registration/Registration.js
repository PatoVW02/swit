import Banner from "../../assets/tech.jpg";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="Registration">
      <header>
        <div className="header-container-registration">
          <div className="image-overlay-registration">
            <img
              className="header-image-registration"
              src={Banner}
              alt="Registration Banner"
            />
          </div>
          <h1 className="header-title-registration">Registro</h1>
        </div>
      </header>

      <div className="centered-form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfwupogW8jl75O7h2XnFgqUVwbWTnnngTbRjsRBdTTHCgDMnA/viewform?usp=sf_link"
          width="100%"
          height="950"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        ></iframe>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Registration;
