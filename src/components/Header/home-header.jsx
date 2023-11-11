import React, { useState } from "react";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
import "./navbar.css";
import banner from "../../assets/img/card/header_banner.png";
import logo from "../../assets/img/logo/logo.png";
import card_bg from "../../assets/img/card/header-bg.png";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon from react-icons library
import account from "../../assets/img/account.png";

function Header() {
  return (
    <div>
      <div class="container" style={{ maxWidth: "1400px" }}>
        <div
          class="page-banner home-banner"
          style={{ height: "auto", backgroundImage: `url(${card_bg})` }}
        >
          <div class="row align-items-center flex-wrap-reverse h-100">
            <div class=" banner-text-area col-md-8 wow fadeInLeft">
              <h3 className="subhead-banner">Welcome to India's first</h3>
              <h1 class=" head-banner mb-4">Online Sponsoring Platform</h1>
              <p class="para-banner">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                accusantium reprehenderit quos iusto. Earum in modi, dolorem
                dolore fuga obcaecati laudantium possimus aspernatur excepturi
                facere porro repellendus expedita et veniam jkvxdkvxkv
                xnjnxkjbkxnb nkvdbkxbkxnbkk.
              </p>
              <a href="#" class="link-banner btn btn-primary">
                Sponsor Now
              </a>
            </div>
            <div class="img-container col-md-4 wow zoomIn">
              <div class="img-fluid text-center">
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
