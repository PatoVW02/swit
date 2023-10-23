import React from "react";
import Header from "./navbar";
import Footer from "./footer";
import "./layout.css"; // Import your CSS file for styling

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="content-container">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
