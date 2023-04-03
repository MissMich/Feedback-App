import React from "react";

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h1 className="">{text}</h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "#1d6a96",
  textColor: "#202142",
};

export default Header;
