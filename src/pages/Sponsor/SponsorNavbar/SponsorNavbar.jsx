import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
import logo from "../../../assets/img/logo/logo.png";
import noProfilepic from "../../../assets/img/emptyprofile2.jpg";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon from react-icons library
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
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
                  data-bs-backdrop="false"
                  // tabindex="-1"
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
        ref={navRef}
      >
        <div className="container">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleNavbar}
          />
          <a className="navbar-brand">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Logo" />
            </Link>
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
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <SponsorClaendar />
            </div>
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
              <div className="container nav-profile" style={{ justifyContent: 'normal', gap: '2vh' }}>
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
                {/* <div className="box text-white">
                  <h3 className="mb-0 font-weight-bold">John Doe</h3>
                  <h6>Sponsor</h6>
                </div> */}
                <div className="box text-white">
                  <h3 className="mb-0 font-weight-bold">{userDetails.firstname}</h3>
                  <h6>{userDetails.lastname}</h6>
                </div>
              </div>
            </div>
            <div className="mobile-nav-content mt-4">
              <Nav
                className="mobile-nav-items border-0"
                style={{ gap: "20px" }}
              >
                <Link to={"/events"}>
                  <div className="mobile-nav-item" onClick={toggleNavbar}
                  >Sponsor Event</div>
                </Link>
                <Link to={"/cc"}>

                  <div className="mobile-nav-item" onClick={toggleNavbar}
                    href="index.html">
                    Sponsor Content
                  </div>
                </Link>
                <div className="mobile-nav-item" onClick={toggleNavbar}
                  href="service.html">
                  Top Events
                </div>
                <div className="mobile-nav-item" onClick={toggleNavbar}
                  href="#">
                  Top Content
                </div>
                <Link to={"/sponsored_event"}>

                  <div className="mobile-nav-item" onClick={toggleNavbar}
                    href="#">
                    Your Sponsored Event
                  </div>
                </Link>
                <Link to={"/sponsored_content"}>

                  <div className="mobile-nav-item" onClick={toggleNavbar}
                    href="#">
                    Your Sponsored Content
                  </div>
                </Link>
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
                <NavLink className="mobile-nav-item" onClick={toggleNavbar}
                  href="about.html">
                  Help Center
                </NavLink>
                <NavLink className="mobile-nav-item" onClick={toggleNavbar}
                  href="about.html">
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
