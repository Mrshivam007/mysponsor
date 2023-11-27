import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
// import banner from "../../assets/img/card/header_banner.png";
import logo from "../../assets/img/logo/logo.png";
// import card_bg from "../../assets/img/card/header-bg.png";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon from react-icons library
// import account from "../../assets/img/account.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light sticky" style={{ backgroundColor: '#004EA9' }} data-offset="500"> */}
      <Navbar
        className={`desktop-nav${isSticky ? " sticky" : ""}`}
        style={{ backgroundColor: "#004EA9" }}
        expand="lg"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" />
          </Link>
          <div className="wrapper">
            <div className="searchBar">
              <input
                id="searchQueryInput"
                type="text"
                name="searchQueryInput"
                placeholder="Search"
              />
              <button
                id="searchQuerySubmit"
                type="submit"
                name="searchQuerySubmit"
              >
                <svg
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <a
            className="nav-link"
            href="#"
            style={{
              backgroundColor: "white",
              margin: "1vh",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
          >
            <span
              className="mai-heart"
              style={{ fontSize: "28px", marginLeft: "-10px" }}
            ></span>
          </a>
          <a
            className="nav-link"
            href="#"
            style={{
              backgroundColor: "white",
              margin: "1vh",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
          >
            <span
              className="mai-people"
              style={{ fontSize: "28px", marginLeft: "-10px" }}
            ></span>
          </a>
          <a
            className="nav-link"
            href="#"
            style={{
              backgroundColor: "white",
              margin: "1vh",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
          >
            <span
              className="mai-calendar"
              style={{ fontSize: "28px", marginLeft: "-10px" }}
            ></span>
          </a>
        </div>
      </Navbar>
      <Navbar
        className="desktop-nav"
        expand="lg"
        style={{ backgroundColor: "#083C79" }}
      >
        <div className="container" style={{ placeContent: "center" }}>
          <Nav>
            <Nav.Link className="desktop-nav-item">
              <Link to={"/events"} style={{color: 'white'}}>
                Sponsor Event
              </Link>
            </Nav.Link>
            <Nav.Link className="desktop-nav-item">
              <Link to={"/cc"} style={{color: 'white'}}>
                Sponsor Content Creators
              </Link>
            </Nav.Link>
            <Nav.Link className="desktop-nav-item" href="#">
              Events Near You
            </Nav.Link>
            <Nav.Link className="desktop-nav-item" href="#">
              Top Events
            </Nav.Link>
            <Nav.Link className="desktop-nav-item" href="#">
              Top Content Creator
            </Nav.Link>
            <Nav.Link className="desktop-nav-item" href="#">
              List your event
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>

      <Navbar
        className={`mobile-nav${isSticky ? " sticky" : ""}`}
        expand="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#004EA9",
        }}
      >
        <div className="container">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleNavbar}
          />
          <a
            className="navbar-brand"
            style={{ height: "52px", marginTop: "3%" }}
          >
            <img src={logo} alt="Logo" />
          </a>
          <a
            className="nav-link"
            href="#"
            style={{
              backgroundColor: "white",
              margin: "1vh",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
            }}
          >
            <span
              className="mai-calendar"
              style={{ fontSize: "28px", marginLeft: "-10px" }}
            ></span>
          </a>
        </div>

        {isOpen && (
          <div className="mobile-nav-overlay">
            <div className="mobile-nav-content">
              <Container className="justify-content-start">
                <div className="close-icon" onClick={toggleNavbar}>
                  <AiOutlineClose />
                </div>
              </Container>
              <Nav className="mobile-nav-items border-0 ">
                <NavLink className="mobile-nav-item nav-link" href="index.html">
                  Sponsor Event
                </NavLink>
                <NavLink className="mobile-nav-item" href="about.html">
                  Sponsor Content Creators
                </NavLink>
                <NavLink className="mobile-nav-item" href="service.html">
                  Events Near You
                </NavLink>
                <NavLink className="mobile-nav-item" href="blog.html">
                  Top Events
                </NavLink>
                <NavLink className="mobile-nav-item" href="#">
                  Top Content Creator
                </NavLink>
                <NavLink className="mobile-nav-item" href="#">
                  List your event
                </NavLink>
              </Nav>
            </div>
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
