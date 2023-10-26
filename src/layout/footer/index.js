import React from "react";
import "./footer.css"
import ITESM from "../../assets/ITESM.png"

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="left">
                <img src={ITESM} alt="Imagen de derechos reservados" className="imagen-footer" />
            </div>
            <div className="right">
                <p>Seminar with IT Pioneers and Leaders</p>
            </div>
    </footer>
    );
}

export default Footer;
