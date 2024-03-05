import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Your Website. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#0b0909",
  color: "#fff",
  textAlign: "center",
  padding: "1rem",
};

export default Footer;
