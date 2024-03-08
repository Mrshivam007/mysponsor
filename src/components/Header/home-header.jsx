import React from "react";
import "./navbar.css";
import banner from "../../assets/img/card/header_banner.png";
import card_bg from "../../assets/img/card/header-bg.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="container" style={{ maxWidth: "1400px" }}>
        <div
          className="page-banner home-banner"
          style={{ height: "auto", backgroundImage: `url(${card_bg})` }}
        >
          <div className="row align-items-center flex-wrap-reverse h-100">
          <div className=" banner-text-area col-md-8 wow fadeInLeft fade-up">
              <h3 className="subhead-banner">Welcome to India's first</h3>
              <h1 className="head-banner mb-4">Online Sponsoring Platform</h1>
              <p className="para-banner">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                accusantium reprehenderit quos iusto. Earum in modi, dolorem
                dolore fuga obcaecati laudantium possimus aspernatur excepturi
                facere porro repellendus expedita et veniam jkvxdkvxkv
                xnjnxkjbkxnb nkvdbkxbkxnbkk.
              </p>
              <Link to={"/choice"}  className="link-banner btn btn-primary">
                Sponsor Now
              </Link>
            </div>
            <div className="img-container col-md-4 wow zoomIn fade-up">
              <div className="img-fluid text-center">
                <img
                  className="header-card-logo"
                  src={banner}
                  alt=""
                  style={{}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
