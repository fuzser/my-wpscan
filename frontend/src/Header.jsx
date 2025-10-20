import React from "react";

export default function Header() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "#1e1e1e",
    color: "#fff",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginLeft: "20px",
    fontWeight: "500",
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <header style={navStyle}>
      <div style={logoStyle}>My WPScan Tool</div>
      <nav>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/contact" style={linkStyle}>Contact Me</a>
      </nav>
    </header>
  );
}
