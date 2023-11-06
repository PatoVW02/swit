import Banner from "../../assets/tech.jpg";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="Registration">
      <header>
        <div className="header-container">
          <div className="image-overlay">
            <img className="header-image" src={Banner} alt="Registration Banner" />
          </div>
          <h1 className="header-title">Registration</h1>
        </div>
      </header>

      <div className="centered-form" style={{ marginTop: "30px" }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd57AA1e-oKdev3fPk2UNVODxYqIEE9kHEVqCe8pXcqhnpnPg/viewform?usp=sf_link"
          width="50%"
          height="950"
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
