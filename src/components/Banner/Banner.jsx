// import bg_img from "../../assets/img/bg_pattern.svg";
import img1 from "../../assets/img/Banner/img1.png";
import img2 from "../../assets/img/Banner/img2.png";
import img3 from "../../assets/img/Banner/img3.png";
import img4 from "../../assets/img/Banner/img4.png";
import Slider from "react-slick";
import { fetchEvent } from "../../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import "./banner.css";
import { useEffect, useState } from "react";
import apiurl from "../../constant/config";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const EventDetails = useSelector((state) => state.event);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    dispatch(fetchEvent());
  }, []);
  console.log("Event", EventDetails);

  const handleSponsorClick = (data) => {
    navigate("/myevent-details", { state: { eventData: data } });
  };

  const cardData = EventDetails.eventDetails?.upcoming_event;

  return (
    <>
      <h2 className="banner-mobile-text">Events</h2>
      <Slider {...settings}>
        {cardData &&
          cardData?.map((data) => (
            <div className="page-section banner-info">
              <div
                className="wrap banner-wrap bg-image"
                style={{
                  height: "auto",
                  backgroundImage: `linear-gradient(270deg, rgb(0, 0, 0, 0)40%, rgb(0, 0, 0, 0.7)100%),url(${
                    apiurl + data.thumbnail1
                  })`,
                }}
              >
                <div className="container" style={{ marginLeft: "4%" }}>
                  <div className="row align-items-center">
                    <div className="col-lg-10 py-3 pr-lg-5 wow fadeInUp">
                      <h2 className="banner-heading title-section">
                        {/* Rollin out loud - Miami 2023 */}
                        {data.title}
                      </h2>
                      <h2 className="mobile-banner-heading title-section">
                        Rollin out loud <br />
                        <span style={{ fontSize: "15px" }}>
                          Miami 2023
                        </span>{" "}
                      </h2>

                      <p className="banner-para">
                        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio officia non voluptatum vitae nulla odio tenetur
                    tempora ipsam vero quisquam unde consectetur similique. */}
                        {data.description}
                      </p>
                      <a className="banner-btn btn btn-primary">
                        <span
                          className="banner-btn-text"
                          onClick={() => handleSponsorClick(data)}
                        >
                          Sponsor Now
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {/* <div className="page-section banner-info">
          <div
            className="wrap banner-wrap bg-image"
            style={{ height: "auto", backgroundImage: `url(${img2})` }}
          >
            <div className="container" style={{ marginLeft: "4%" }}>
              <div className="row align-items-center">
                <div className="col-lg-10 py-3 pr-lg-5 wow fadeInUp">
                  <h2 className="banner-heading title-section">
                    Rollin out loud - Miami 2023
                  </h2>
                  <h2 className="mobile-banner-heading title-section">
                    Rollin out loud <br />
                    <span style={{ fontSize: "15px" }}>Miami 2023</span>{" "}
                  </h2>

                  <p className="banner-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio officia non voluptatum vitae nulla odio tenetur
                    tempora ipsam vero quisquam unde consectetur similique.
                  </p>
                  <a href="#" className="banner-btn btn btn-primary">
                    <span className="banner-btn-text">Sponsor Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="page-section banner-info">
          <div
            className="wrap banner-wrap bg-image"
            style={{ height: "auto", backgroundImage: `url(${img3})` }}
          >
            <div className="container" style={{ marginLeft: "4%" }}>
              <div className="row align-items-center">
                <div className="col-lg-10 py-3 pr-lg-5 wow fadeInUp">
                  <h2 className="banner-heading title-section">
                    Rollin out loud - Miami 2023
                  </h2>
                  <h2 className="mobile-banner-heading title-section">
                    Rollin out loud <br />
                    <span style={{ fontSize: "15px" }}>Miami 2023</span>{" "}
                  </h2>
                  <p className="banner-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio officia non voluptatum vitae nulla odio tenetur
                    tempora ipsam vero quisquam unde consectetur similique.
                  </p>
                  <a href="#" className="banner-btn btn btn-primary">
                    <span className="banner-btn-text">Sponsor Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="page-section banner-info">
          <div
            className="wrap banner-wrap bg-image"
            style={{ height: "auto", backgroundImage: `url(${img4})` }}
          >
            <div className="container" style={{ marginLeft: "4%" }}>
              <div className="row align-items-center">
                <div className="col-lg-10 py-3 pr-lg-5 wow fadeInUp">
                  <h2 className="banner-heading title-section">
                    Rollin out loud - Miami 2023
                  </h2>
                  <h2 className="mobile-banner-heading title-section">
                    Rollin out loud <br />
                    <span style={{ fontSize: "15px" }}>Miami 2023</span>{" "}
                  </h2>
                  <p className="banner-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio officia non voluptatum vitae nulla odio tenetur
                    tempora ipsam vero quisquam unde consectetur similique.
                  </p>
                  <a href="#" className="banner-btn btn btn-primary">
                    <span className="banner-btn-text">Sponsor Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="page-section banner-info">
                <div className="wrap bg-image" style={{ height: 'auto', backgroundImage: `url(${bg_img})` }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 py-3 pr-lg-5 wow fadeInUp">
                                <h2 className="title-section">SEO to Improve Brand <br /> Visibility</h2>
                                <p>We're an experienced and talented team of passionate consultants who breathe with search engine marketing.</p>
                                <a href="#" className="btn btn-primary" style={{ marginTop: '-26px' }}>Read More</a>
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
