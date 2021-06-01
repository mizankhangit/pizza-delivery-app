import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid"
      style={{ background: "#eee", padding: "20px" }}
    >
      <div className="container">
        <div className="text-center">
          {" "}
          Copyright {new Date().getFullYear()}. All right reserved by mizankhan
        </div>
      </div>
    </div>
  );
};

export default Footer;
