import "../../assets/css/bootstrap.css"
import "../../assets/css/maicons.css"
import "../../assets/css/theme.css"
import "./navbar.css"
import banner from "../../assets/img/banner_image_1.svg"
import logo from "../../assets/img/lgoo.png";
import card_bg from "../../assets/img/card_bg.png";

const Navbar = () => {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg navbar-light sticky" style={{ backgroundColor: '#004EA9' }} data-offset="500">
                    <div class="container">
                        <a href="#" class="navbar-brand"><img src={logo} /></a>

                        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* <div class="navbar-collapse collapse" id="navbarContent"> */}
                        {/* <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="service.html">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="blog.html">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="btn btn-primary ml-lg-2" href="#">Free Analytics</a>
                                </li>
                            </ul> */}
                        <div class="wrapper">
                            {/* <div class="label">Submit your search</div> */}
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

                    {/* </div> */}
                </nav>
                <nav class="navbar navbar-expand-lg navbar-light sticky" style={{ backgroundColor: '#083C79' }} data-offset="500">
                    <div class="container" style={{ placeContent: 'center' }}>
                        {/* <a href="#" class="navbar-brand">Seo<span class="text-primary">Gram.</span></a>  */}

                        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* <div class="navbar-collapse collapse" id="navbarContent"> */}
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" style={{ color: 'white' }} href="index.html">Sponsor Event</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style={{ color: 'white' }} href="about.html">Sponsor Content Creators</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style={{ color: 'white' }} href="service.html">Events Near You</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style={{ color: 'white' }} href="blog.html">Top Events</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style={{ color: 'white' }} href="contact.html">Top Content Creator</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style={{ color: 'white' }} href="contact.html">List you event</a>
                            </li>
                        </ul>


                    </div>

                    {/* </div> */}
                </nav>

                <div class="container" style={{ maxWidth: '1400px' }}>
                    <div class="page-banner home-banner" style={{ height: 'auto', backgroundImage: `url(${card_bg})` }}>
                        <div class="row align-items-center flex-wrap-reverse h-100">
                            <div class="col-md-6 py-5 wow fadeInLeft">
                                <h3 style={{ color: 'white', fontFamily: 'math', fontWeight: '600', marginBottom: '0px' }}>Welcome to India's first</h3>
                                <h1 class="mb-4" style={{ color: 'white', fontFamily: 'math', fontWeight: '600', marginBottom: '0px' }}>Online Sponsoring Plateform</h1>
                                <p class="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium reprehenderit quos iusto. Earum in modi, dolorem dolore fuga obcaecati laudantium possimus aspernatur excepturi facere porro repellendus expedita et veniam.</p>
                                <a href="#" class="btn btn-primary" style={{ backgroundColor: 'white', color:'blue', fontWeight: 'bold', borderRadius: '16px'}}>Sponsor Now</a>
                            </div>
                            <div class="col-md-6 py-5 wow zoomIn">
                                <div class="img-fluid text-center">
                                    <img src={banner} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>


        </>
    );
}

export default Navbar;