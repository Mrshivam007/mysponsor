import React from "react";
import "./navbar.css";
import card_bg from "../../assets/img/card/header-bg.png";

function Header({ title, logo }) {
  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "1400px", marginBottom: "5%" }}
      >
        <div
          className="page-banner home-banner"
          style={{
            height: "auto",
            backgroundImage: `url(${card_bg})`,
            boxShadow: "0px 10px 40px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="row align-items-center flex-wrap-reverse h-100">
            <div className="img-container col-md-12 wow zoomIn ">
              <div className="img-fluid text-center">
                <img
                  className="header-card-logo"
                  src={logo}
                  alt=""
                  style={{ width: "50%", height: "auto", margin: "4% auto" }}
                />
              </div>
              <h1
                className="text-white text-center"
                style={{ fontWeight: "900" }}
              >
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
