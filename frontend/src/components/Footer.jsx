import React from "react";

export default function Footer() {
  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    margin: "0 10px",
    fontSize: "14px",
  };

  const footerStyle = {
    marginTop: "50px",
    padding: "20px 0",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    borderTop: "1px solid #ddd",
    color: "#555",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <footer style={footerStyle}>
      <div>
        <a href="/terms" style={linkStyle}>Terms & Conditions</a>|
        <a href="/privacy" style={linkStyle}>Privacy Policy</a>
      </div>
      <div style={{ marginTop: "10px", fontSize: "13px" }}>
        © {new Date().getFullYear()} github@Fuzer. All rights reserved.
      </div>
    </footer>
  );
}
