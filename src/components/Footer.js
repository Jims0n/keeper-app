import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {year} Botterfly, Inc</p>
    </footer>
  );
}

export default Footer;
