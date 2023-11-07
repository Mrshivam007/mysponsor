import logo from "../../assets/img/lgoo.png";
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer
        className="text-white text-center text-lg-start"
        style={{ backgroundColor: "#004EA9" }}
      >
        {/* <!-- Grid container --> */}
        <div
          className="container p-4"
          style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.30)" }}
        >
          {/* <!--Grid row--> */}
          <div className="row align-items-center justify-content-between ">
            {/* <!--Grid column--> */}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-left">
              <h5 className="mb-4 footer-logo">
                <img src={logo} style={{ width: "50%" }} />
              </h5>

              <h5 className="text-capitalize footer-heading">
                India's first online sponsoring platform
              </h5>
              <p className="footer-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>
            {/* <!--Grid column-->

      <!--Grid column--> */}
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0 text-left footer-desktop-links">
              <h5 className="text-capitalize">Events</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white text-sm">
                    Sponser Events
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-sm">
                    Events near you
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-sm">
                    Top Events
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column-->

      <!--Grid column--> */}
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0 text-left footer-desktop-links">
              <h5 className="text-capitalize">Content creators</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white text-sm">
                    Sponsor content creators
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-sm">
                    Creators near you
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-sm">
                    Top content creators
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
            <div className="col-lg-2 col-md-6 mt-0 mb-4 mb-md-0 text-left footer-desktop-links">
              <h5 className="text-capitalize">Listing</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white text-sm">
                    List your event
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white text-sm">
                    List content creator
                  </a>
                </li>
              </ul>
              <br />
            </div>
            
            <div className="container">
            <button className="mob-footer-btn btn btn-primary" style={{ width: "100%" }}>
              Browse Categories
            </button>
            <button className="mob-footer-btn btn btn-primary" style={{ width: "100%" }}>
              Browse Categories
            </button>
            <button className="mob-footer-btn btn btn-primary" style={{ width: "100%" }}>
              Browse Categories
            </button>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- New Row --> */}
        <div className="container mt-4 mb-4 footer-desktop-links">
          <div className="row">
            <div
              className="col-lg-6"
              style={{ borderRight: "1px solid rgba(255, 255, 255, 0.30)" }}
            >
              <p className="text-center text-xl">
                <a href="#!" className="text-white">
                  About
                </a>
              </p>
            </div>
            <div className="col-lg-6">
              <p className="text-center text-xl">
                <a href="#!" className="text-white">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- New Row--> */}

        {/* <!-- Copyright --> */}
        <div className="ext-center p-3" style={{ backgroundColor: "#3372BC" }}>
          Copyrights reserved by{" "}
          <a className="text-white" href="https://mdbootstrap.com/">
            Mysponsor.co
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
};

export default Footer;
