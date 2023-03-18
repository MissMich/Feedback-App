import React from "react";
// import '../index.css'
// import PropTypes from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor : bgColor, 
    color:textColor
  }
  return (
    <header style = {headerStyles}>
      <div className="container">
        <h1 className="">{text}</h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0,0.5)",
  textColor: "#ff6a95",
};

// Header.propTypes = {
//   text: PropTypes.string,
// }
export default Header;
