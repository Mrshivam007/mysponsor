import bg_img from "../../assets/img/bg_pattern.svg";
import img1 from "../../assets/img/Banner/img1.png";
import img2 from "../../assets/img/Banner/img2.png";
import img3 from "../../assets/img/Banner/img3.png";
import img4 from "../../assets/img/Banner/img4.png";
import Slider from "react-slick";
import "./banner.css";

const Banner = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the slider
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-play the slider
    autoplaySpeed: 3000, // Auto-play speed in milliseconds
  };

  return (
    <>
      <h2 className="banner-mobile-text">Events</h2>
      <Slider {...settings}>
        <div class="page-section banner-info">
          <div
            class="wrap banner-wrap bg-image"
            style={{ height: "auto", backgroundImage: `url(${img1})` }}
          >
            <div class="container" style={{ marginLeft: "4%" }}>
              <div class="row align-items-center">
                <div class="col-lg-10 py-3 pr-lg-5 wow fadeInUp">
                  <h2 class="banner-heading title-section">
                    Rollin out loud - Miami 2023
                  </h2>
                  <h2 class="mobile-banner-heading title-section">
                    Rollin out loud <br />
                    <spam style={{ fontSize: "15px" }}>Miami 2023</spam>{" "}
                  </h2>

                  <p className="banner-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio officia non voluptatum vitae nulla odio tenetur
                    tempora ipsam vero quisquam unde consectetur similique.
                  </p>
                  <a href="service.html" className="banner-btn btn btn-primary">
                    <span className="banner-btn-text">Sponsor Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-section banner-info">
          <div
            class="wrap banner-wrap bg-image"
            style={{ height: "auto", backgroundImage: `url(${img2})` }}
          >
            <div class="container" style={{ marginLeft: "4%" }}>
              <div class="row align-items-center">
                <div class="col-lg-10 py-3 pr-lg-5 wow fadeInUp">
                  <h2 class="banner-heading title-section">
                    Rollin out loud - Miami 2023
                  </h2>
                  <h2 class="mobile-banner-heading title-section">
                    Rollin out loud <br />
                    <spam style={{ fontSize: "15px" }}>Miami 2023</spam>{" "}
                  </h2>

                  <p className="banner-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio officia non voluptatum vitae nulla odio tenetur
                    tempora ipsam vero quisquam unde consectetur similique.
                  </p>
                  <a href="service.html" className="banner-btn btn btn-primary">
                    <span className="banner-btn-text">Sponsor Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-section banner-info">
          <div
            class="wrap banner-wrap bg-image"
            style={{ height: "auto", backgroundImage: `url(${img3})` }}
          >
            <div class="container" style={{ marginLeft: "4%" }}>
              <div class="row align-items-center">
                <div class="col-lg-10 py-3 pr-lg-5 wow fadeInUp">
                  <h2 class="banner-heading title-section">
                    Rollin out loud - Miami 2023
                  </h2>
                  <h2 class="mobile-banner-heading title-section">
                    Rollin out loud <br />
                    <spam style={{ fontSize: "15px" }}>Miami 2023</spam>{" "}
                  </h2>
                  <p className="banner-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio officia non voluptatum vitae nulla odio tenetur
                    tempora ipsam vero quisquam unde consectetur similique.
                  </p>
                  <a href="service.html" className="banner-btn btn btn-primary">
                    <span className="banner-btn-text">Sponsor Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-section banner-info">
          <div
            class="wrap banner-wrap bg-image"
            style={{ height: "auto", backgroundImage: `url(${img4})` }}
          >
            <div class="container" style={{ marginLeft: "4%" }}>
              <div class="row align-items-center">
                <div class="col-lg-10 py-3 pr-lg-5 wow fadeInUp">
                  <h2 class="banner-heading title-section">
                    Rollin out loud - Miami 2023
                  </h2>
                  <h2 class="mobile-banner-heading title-section">
                    Rollin out loud <br />
                    <spam style={{ fontSize: "15px" }}>Miami 2023</spam>{" "}
                  </h2>
                  <p className="banner-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio officia non voluptatum vitae nulla odio tenetur
                    tempora ipsam vero quisquam unde consectetur similique.
                  </p>
                  <a href="service.html" className="banner-btn btn btn-primary">
                    <span className="banner-btn-text">Sponsor Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="page-section banner-info">
                <div class="wrap bg-image" style={{ height: 'auto', backgroundImage: `url(${bg_img})` }}>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 py-3 pr-lg-5 wow fadeInUp">
                                <h2 class="title-section">SEO to Improve Brand <br /> Visibility</h2>
                                <p>We're an experienced and talented team of passionate consultants who breathe with search engine marketing.</p>
                                <a href="service.html" className="btn btn-primary" style={{ marginTop: '-26px' }}>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      </Slider>
    </>
  );
};

export default Banner;
