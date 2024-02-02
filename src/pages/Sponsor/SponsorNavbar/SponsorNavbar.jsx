import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
// import banner from "../../assets/img/card/header_banner.png";
import logo from "../../../assets/img/logo/logo.png";
import noProfilepic from "../../../assets/img/emptyprofile2.jpg";
// import card_bg from "../../assets/img/card/header-bg.png";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon from react-icons library
// import account from "../../assets/img/account.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/authActions";
import SponsorClaendar from "../SponsorCalendar/SponsorCalendar";

const SponsorNavbar = () => {
  const [isSticky, setSticky] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const [openDropDown, setOpenDropDown] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light sticky" style={{ backgroundColor: '#004EA9' }} data-offset="500"> */}
      <Navbar
        className={`desktop-nav ${isSticky ? " sticky" : ""}`}
        style={{ backgroundColor: "#004EA9" }}
        expand="lg"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" />
          </Link>
          {/* <div className="wrapper">
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
                  style={{ width: "24px", height: "24px", margin: "auto" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                  />
                </svg>
              </button>
            </div>
          </div> */}
          {userDetails ? (
            <>
              <div className="box d-flex align-items-center justify-content-between">
                <Link
                  className="nav-link text-accent"
                  to="/favourites" // Use an absolute path
                  style={{
                    backgroundColor: "white",
                    margin: "1vh",
                    height: "40px",
                    width: "40px",
                    borderRadius: "50px",
                  }}
                >
                  <span
                    className="mai-heart "
                    style={{ fontSize: "28px", marginLeft: "-10px" }}
                  ></span>
                </Link>
                <div
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#calendarModal"
                  data-bs-whatever="@mdo"
                  style={{
                    backgroundColor: "white",
                    margin: "1vh",
                    height: "40px",
                    width: "40px",
                    color: "blue",
                    borderRadius: "50px",
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="mai-calendar"
                    style={{ fontSize: "28px", marginLeft: "-10px" }}
                  ></span>
                </div>
                <div
                  className="modal fade"
                  id="calendarModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <SponsorClaendar />
                </div>
                <div
                  className="nav-link"
                  style={{
                    backgroundColor: "white",
                    margin: "1vh",
                    height: "40px",
                    width: "40px",
                    borderRadius: "50px",
                    color: "black",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenDropDown(!openDropDown)}
                >
                  <span
                    className="mai-people"
                    style={{ fontSize: "28px", marginLeft: "-10px" }}
                  ></span>
                </div>
                <div className="dropdown">
                  {openDropDown ? (
                    <ul
                      className="dropdown-menu"
                      style={{
                        display: "block",
                        width: "100%",
                        left: "-75px",
                        top: "20px",
                        cursor: "pointer",
                      }}
                    >
                      <li>
                        <div className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </div>
                      </li>
                      <li>
                        <Link to={"/profile"}>
                          <div className="dropdown-item">My Account</div>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </>
          ) : (
            <Link to={"/login"} className="link-banner btn btn-primary">
              Register
            </Link>
          )}
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
              <Link to={"/events"} style={{ color: "white" }}>
                Sponsor Event
              </Link>
            </Nav.Link>
            <Nav.Link className="desktop-nav-item">
              <Link to={"/cc"} style={{ color: "white" }}>
                Sponsor Content Creators
              </Link>
            </Nav.Link>
            {/* <Nav.Link className="desktop-nav-item" href="#">
              Events Near You
            </Nav.Link> */}
            <Nav.Link className="desktop-nav-item" href="#">
              Top Events
            </Nav.Link>
            <Nav.Link className="desktop-nav-item" href="#">
              Top Content
            </Nav.Link>
            <Nav.Link className="desktop-nav-item" href="#">
              <Link to={"/sponsored_event"} style={{ color: "white" }}>
                Your Sponsored Event
              </Link>
            </Nav.Link>
            <Nav.Link className="desktop-nav-item" href="#">
              <Link to={"/sponsored_content"} style={{ color: "white" }}>
                Your Sponsored Content
              </Link>
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>

      <Navbar
        className={`mobile-nav ${isSticky ? "sticky" : ""}`}
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
          <a className="navbar-brand">
            <img src={logo} alt="Logo" />
          </a>
          <div className="box d-flex">
            <div
              className="nav-link"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{
                backgroundColor: "white",
                margin: "1vh",
                height: "40px",
                width: "40px",
                color: "blue",
                borderRadius: "50px",
                cursor: "pointer",
              }}
            >
              <span
                className="mai-calendar"
                style={{ fontSize: "28px", marginLeft: "-10px" }}
              ></span>
            </div>
            {/* MODAL */}
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <SponsorClaendar />
            </div>
            {/* MODAL-END */}
            <Link
              className="nav-link text-dark"
              to="/profile"
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
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-nav-overlay">
            <div
              className="box nav-profile-box w-100"
              style={{
                backgroundColor: "#004EA9",
              }}
            >
              <Container className="justify-content-end p-1">
                <div className="close-icon" onClick={toggleNavbar}>
                  <AiOutlineClose />
                </div>
              </Container>
              <div className="container nav-profile">
                <div
                  className="box"
                  style={{
                    border: "3px solid #004ea9",
                    borderRadius: "70px",
                    filter: "drop-shadow(0px 2px 15px rgba(0, 0, 0, 0.25))",
                  }}
                >
                  <img
                    src={noProfilepic}
                    alt="myprofile"
                    width="100"
                    height="100"
                    style={{ borderRadius: "50px" }}
                  />
                </div>
                <div className="box text-white">
                  <h3 className="mb-0 font-weight-bold">John Doe</h3>
                  <h6>Sponsor</h6>
                </div>
              </div>
            </div>
            <div className="mobile-nav-content mt-4">
              <Nav
                className="mobile-nav-items border-0"
                style={{ gap: "20px" }}
              >
                <Link to={"/sponsored_event"}>
                  <div className="mobile-nav-item">My Sponsored Event</div>
                </Link>
                <div className="mobile-nav-item" href="index.html">
                  Sponsor Content
                </div>
                <div className="mobile-nav-item" href="service.html">
                  Top Events
                </div>
                <div className="mobile-nav-item" href="#">
                  My Account
                </div>
                <div className="mobile-nav-item" href="#">
                  Payment Info
                </div>
                <div className="mobile-nav-item" href="#">
                  ChatBot
                </div>
              </Nav>
            </div>
            <div className="text-success">
              <hr
                className="my-0"
                style={{ border: "0", borderTop: "1px solid rgb(0,0,0,0.4)" }}
              />
            </div>
            <div className="container" style={{ paddingLeft: "10%" }}>
              <Nav className="mobile-nav-items border-0">
                <NavLink className="mobile-nav-item" href="about.html">
                  Help Center
                </NavLink>
                <NavLink className="mobile-nav-item" href="about.html">
                  Support
                </NavLink>
              </Nav>
            </div>
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default SponsorNavbar;
