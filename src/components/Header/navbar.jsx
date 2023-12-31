import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./navbar.css"
import banner from "../../assets/img/banner_image_1.svg"
import logo from "../../assets/img/lgoo.png";
import card_bg from "../../assets/img/card_bg.png";


function navbar() {
    return (
        <div>
            {/* <nav class="navbar navbar-expand-lg navbar-light sticky" style={{ backgroundColor: '#004EA9' }} data-offset="500"> */}
            <Navbar bg="light" expand="lg" style={{display: 'flex', flexDirection: 'column', backgroundColor:"#004EA9"}}>
                <div class="container" >
                    <a href="#" class="navbar-brand"><img src={logo} /></a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                    <a class="nav-link" href="contact.html" style={{ backgroundColor: 'white', margin: '1vh', borderRadius: '50px' }}><span class="mai-heart"></span></a>
                    <a class="nav-link" href="contact.html" style={{ backgroundColor: 'white', margin: '1vh', borderRadius: '50px' }}><span class="mai-calendar"></span></a>
                    <a class="nav-link" href="contact.html" style={{ backgroundColor: 'white', margin: '1vh', borderRadius: '50px' }}><span class="mai-person"></span></a>
                </div>                
                <div class="container" style={{}}>


                    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: 'center'}}>
                        <Nav>
                            <Nav.Link href="index.html">Sponsor Event</Nav.Link>
                            <Nav.Link href="about.html">Sponsor Content Creators</Nav.Link>
                            <Nav.Link href="service.html">Events Near You</Nav.Link>
                            <Nav.Link href="blog.html">Top Events</Nav.Link>
                            <Nav.Link href="contact.html">Top Content Creator</Nav.Link>
                            <Nav.Link href="contact.html">List your event</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div class="container" style={{ maxWidth: '1400px' }}>
                <div class="page-banner home-banner" style={{ height: 'auto', backgroundImage: `url(${card_bg})` }}>
                    <div class="row align-items-center flex-wrap-reverse h-100">
                        <div class=" banner-text-area col-md-6 wow fadeInLeft">
                            <h3  className='subhead-banner' style={{ fontFamily: 'math', fontWeight: '600', marginBottom: '0px' }}>Welcome to India's first</h3>
                            <h1 class=" head-banner mb-4" style={{ fontFamily: 'math', fontWeight: '600', marginBottom: '0px' }}>Online Sponsoring Platform</h1>
                            <p class="para-banner text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium reprehenderit quos iusto. Earum in modi, dolorem dolore fuga obcaecati laudantium possimus aspernatur excepturi facere porro repellendus expedita et veniam.</p>
                            <a href="#" class="link-banner btn btn-primary">Sponsor Now</a>
                        </div>
                        <div class="img-container col-md-6 py-5 wow zoomIn">
                            <div class="img-fluid text-center">
                                <img src={banner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default navbar;
