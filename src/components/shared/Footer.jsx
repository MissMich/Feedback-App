import React from "react";

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
