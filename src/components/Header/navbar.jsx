import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./navbar.css"
import banner from "../../assets/img/card/header_banner.png"
import logo from "../../assets/img/logo/logo.png";
import card_bg from "../../assets/img/card/header-bg.png"
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon from react-icons library



function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* <nav class="navbar navbar-expand-lg navbar-light sticky" style={{ backgroundColor: '#004EA9' }} data-offset="500"> */}
            <Navbar className='desktop-nav' expand="lg" style={{ backgroundColor: "#004EA9" }}>
                <div class="container" >
                    <a href="#" class="navbar-brand"><img src={logo} /></a>
                    <div class="wrapper">
                        <div class="searchBar">
                            <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
                            <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                                <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                                    <path fill="white" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <a class="nav-link" href="contact.html" style={{ backgroundColor: 'white', margin: '1vh', height: '40px', width: '40px', borderRadius: '50px', }}><span class="mai-heart" style={{ fontSize: '28px', marginLeft: '-10px' }}></span></a>
                    <a class="nav-link" href="contact.html" style={{ backgroundColor: 'white', margin: '1vh', height: '40px', width: '40px', borderRadius: '50px', }}><span class="mai-people" style={{ fontSize: '28px', marginLeft: '-10px' }}></span></a>
                    <a class="nav-link" href="contact.html" style={{ backgroundColor: 'white', margin: '1vh', height: '40px', width: '40px', borderRadius: '50px', }}><span class="mai-calendar" style={{ fontSize: '28px', marginLeft: '-10px' }}></span></a>
                </div>
            </Navbar>
            <Navbar className='desktop-nav' expand="lg" style={{ backgroundColor: "#083C79" }}>
                <div class="container" style={{ placeContent: 'center' }}>
                    <Nav>
                        <Nav.Link className='desktop-nav-item' href="index.html">Sponsor Event</Nav.Link>
                        <Nav.Link className='desktop-nav-item' href="about.html">Sponsor Content Creators</Nav.Link>
                        <Nav.Link className='desktop-nav-item' href="service.html">Events Near You</Nav.Link>
                        <Nav.Link className='desktop-nav-item' href="blog.html">Top Events</Nav.Link>
                        <Nav.Link className='desktop-nav-item' href="contact.html">Top Content Creator</Nav.Link>
                        <Nav.Link className='desktop-nav-item' href="contact.html">List your event</Nav.Link>
                    </Nav>
                </div>
            </Navbar>

            <Navbar className='mobile-nav' expand="lg" style={{ display: 'flex', flexDirection: 'column', backgroundColor: "#004EA9" }}>
                <div className="container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
                    <a href="#" className="navbar-brand" style={{ height: '52px', marginTop: '3%' }}><img src={logo} alt="Logo" /></a>
                </div>

                {isOpen && (
                    <div className="mobile-nav-overlay">
                        <div className="mobile-nav-content">
                            <Nav className="mobile-nav-items">
                                <Nav.Link className="mobile-nav-item" href="index.html">Sponsor Event</Nav.Link>
                                <Nav.Link className="mobile-nav-item" href="about.html">Sponsor Content Creators</Nav.Link>
                                <Nav.Link className="mobile-nav-item" href="service.html">Events Near You</Nav.Link>
                                <Nav.Link className="mobile-nav-item" href="blog.html">Top Events</Nav.Link>
                                <Nav.Link className="mobile-nav-item" href="contact.html">Top Content Creator</Nav.Link>
                                <Nav.Link className="mobile-nav-item" href="contact.html">List your event</Nav.Link>
                            </Nav>
                            <div className="close-icon" onClick={toggleNavbar}>
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                )}
            </Navbar>
            <div class="container" style={{ maxWidth: '1400px' }}>
                <div class="page-banner home-banner" style={{ height: 'auto', backgroundImage: `url(${card_bg})` }}>
                    <div class="row align-items-center flex-wrap-reverse h-100">
                        <div class=" banner-text-area col-md-8 wow fadeInLeft">
                            <h3 className='subhead-banner'>Welcome to India's first</h3>
                            <h1 class=" head-banner mb-4">Online Sponsoring Platform</h1>
                            <p class="para-banner">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium reprehenderit quos iusto. Earum in modi, dolorem dolore fuga obcaecati laudantium possimus aspernatur excepturi facere porro repellendus expedita et veniam jkvxdkvxkv xnjnxkjbkxnb nkvdbkxbkxnbkk.</p>
                            <a href="#" class="link-banner btn btn-primary">Sponsor Now</a>
                        </div>
                        <div class="img-container col-md-4 wow zoomIn">
                            <div class="img-fluid text-center">
                                <img className='header-card-logo' src={banner} alt="" style={{}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
