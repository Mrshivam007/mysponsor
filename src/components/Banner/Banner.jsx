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
                  backgroundImage: `linear-gradient(270deg, rgb(0, 0, 0, 0)40%, rgb(0, 0, 0, 0.7)100%),url(${apiurl + data.thumbnail1
                    })`,
                }}
              >
                <div className="container" style={{ marginLeft: "4%" }}>
                  <div className="row align-items-center">
                    <div className="col-lg-10 py-3 pr-lg-5 wow fadeInUp">
                      <h2 className="banner-heading title-section">
                        {data.title}
                      </h2>
                      <h2 className="mobile-banner-heading title-section">
                        {data.title}
                        <br />
                        <span style={{ fontSize: "15px" }}>
                        {data.location}
                        </span>{" "}
                      </h2>
                      <p className="banner-para">
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
      </Slider>
    </>
  );
};

export default Banner;
