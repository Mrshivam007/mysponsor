import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo.png";
import "./footer.css";

const SponsorFooter = () => {
  return (
    <>
      <footer
        className="text-white text-center text-lg-start"
        style={{ backgroundColor: "#004EA9" }}
      >
        {/* <!-- Grid container --> */}
        <div
          className="container p-2"
          style={{
            maxWidth: "95%",
            borderBottom: "1px solid rgba(255, 255, 255, 0.30)",
          }}
        >
          {/* <!--Grid row--> */}
          <div className="row align-items-center w-100 mx-auto">
            {/* <!--Grid column--> */}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-left mb-md-4 text-md-center ">
              <h5 className="footer-logo">
                <img
                  src={logo}
                  style={{ width: "80%", height: "100%", objectFit: "cover" }}
                />
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
            {/* Grid column end */}
            {/* <!--Grid column--> */}
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0 text-lg-left text-md-center footer-desktop-links">
              <h5 className="text-capitalize">Events</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to={"/events"} className="text-white text-sm">
                    Sponser Events
                  </Link>
                </li>
                <li style={{ margin: "4% 0 4% 0" }}>
                  <Link  className="text-white text-sm">
                    Events near you
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-white text-sm">
                    Top Events
                  </Link>
                </li>
              </ul>
            </div>
            {/* Grid column end */}
            {/* <!--Grid column--> */}
            {/* <div className="col-lg-2 col-md-4 mt-0 mb-4 mb-md-0 text-lg-left text-md-center footer-desktop-links">
              <h5 className="text-capitalize">Listing</h5>

              <ul className="list-unstyled">
                <li>
                  <Link href="#!" className="text-white text-sm">
                    List your event
                  </Link>
                </li>
                <li style={{ margin: "4% 0 4% 0" }}>
                  <Link href="#!" className="text-white text-sm">
                    List content creator
                  </Link>
                </li>
              </ul>
              <br />
            </div> */}
            {/* Grid column end */}
            {/* <!--Grid column--> */}
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0 text-lg-left text-md-center footer-desktop-links">
              <h5 className="text-capitalize">Content creators</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to={"/cc"} className="text-white text-sm">
                    Sponsor content creators
                  </Link>
                </li>
                <li style={{ margin: "4% 0 4% 0" }}>
                  <Link className="text-white text-sm">
                    Creators near you
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="text-white text-sm">
                    Top content creators
                  </Link>
                </li>
              </ul>
            </div>
            {/* Grid column end */}
            <div className="container">
              <Link to="/events">
                <button
                  className="mob-footer-btn btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Sponsor Events
                </button>
              </Link>
              <Link to="/cc">
                <button
                  className="mob-footer-btn btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Sponsor Content
                </button>
              </Link>
              <button
                className="mob-footer-btn btn btn-primary"
                style={{ width: "100%" }}
              >
                About Us
              </button>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- New Row --> */}
        <div className="container mx-auto my-3 footer-desktop-links">
          <div className="row">
            <div
              className="col-lg-6 col-md-6"
              style={{ borderRight: "1px solid rgba(255, 255, 255, 0.30)" }}
            >
              <p className="text-center text-xl mb-0">
                <Link href="#!" className="text-white">
                  About
                </Link>
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="text-center text-xl mb-0">
                <Link href="#!" className="text-white">
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- New Row--> */}

        {/* <!-- Copyright --> */}
        <div className="ext-center p-3" style={{ backgroundColor: "#3372BC" }}>
          Copyrights reserved by{" "}
          <Link className="text-white" href="https://mdbootstrap.com/">
            Mysponsor.co
          </Link>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
};

export default SponsorFooter;
