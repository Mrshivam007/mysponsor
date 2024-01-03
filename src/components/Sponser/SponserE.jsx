import cardImg from "../../assets/img/payment-img.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponser.css";
import arrow from "../../assets/img/right-arrow.png";
import { Link, useHistory, useNavigate } from "react-router-dom";
import apiurl from "../../constant/config";
// import { cardData2 } from "../../data/data";
const SponserE = ({ line, cardData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one card at a time on mobile
    slidesToScroll: 1,
    prevArrow: null, // Hide the previous arrow
    nextArrow: null, // Hide the next arrow
  };
  console.log(cardData);


  const navigate = useNavigate();

  const handleSponsorClick = (data) => {
    navigate('/myevent-details', { state: { eventData: data } });
  };

  return (
    <>
      <h1 className="sponsor-text">{line}</h1>

      <h2 className="sponsor-mobile-text">{line}</h2>

      {/* Events Layer  */}

      <div className="container sponsor-container" id="sponser_layer">
        <div className="sponsor-desktop">
          <div className="row my-5">
            {/* <Slider {...settings}> */}
            {cardData &&
              cardData?.map((data) => (
                <div key={data.id} className="col-lg-3 col-md-6 py-3">
                  <div className="card-blog">
                    <div className="header">
                      <div className="post-thumb">
                        <img
                          src={apiurl + data.thumbnail1}
                          alt=""
                          style={{ width: "100%" }}
                          className="sponser_card_img"
                        />
                        <div className="text-overlay">
                          <p className="text-lg font-weight-bold mb-0">
                            {data.title}
                          </p>
                          <p>{data.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="body text-center" style={{ padding: "1%" }}>
                      <div className="row">
                        <div
                          className="col"
                          style={{ borderRight: "1px solid #cfcfcf" }}
                        >
                          <span className="text-sm post-title">
                            <a href="#">Price Band</a>
                          </span>
                          <div className="post-date">
                            <h6>
                              <i className="bi bi-cash text-success"></i>
                              <b> {data.price}</b>
                            </h6>
                          </div>
                        </div>
                        <div className="col">
                          <span className="text-sm post-title">
                            <a href="#">Audience</a>
                          </span>
                          <div className="post-date">
                            <h6>
                              <i className="bi bi-people-fill text-danger"></i>
                              <b> {data.audience_expected}</b>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary mx-auto rounded-0"
                      style={{
                        width: "100%",
                        backgroundColor: "#004EA9",
                        fontWeight: "bold",
                      }}
                      onClick={() => handleSponsorClick(data)}
                    >
                      Sponsor Now
                    </button>
                  </div>
                </div>
              ))}

            {/* </Slider> */}
            <div className="container d-flex justify-content-center">
              <Link to="/events">
                <button
                  className="btn btn-outline-primary mt-4"
                  style={{
                    borderRadius: "15px",
                    border: "2px solid #004EA9",
                    background: "#FFF",
                    boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.18)",
                    fontWeight: "bolder",
                    color: "#004EA9",
                  }}
                >
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="sponsor-mobile">
          {/* <div className="row my-5"> */}
          <div className="row" style={{ flexWrap: "nowrap" }}>
            <div
              className="col-lg-1"
              style={{ alignSelf: "center", width: "24%" }}
            >
              <div className="sponsor-card-indicator">
                EVENTS
                {/* hello */}
                <img
                  src={arrow}
                  style={{ transform: "rotate(90deg)" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4" style={{ width: "76%" }}>
              <Slider {...settings}>
                {/* {cardData &&
                  cardData.map((data) => (
                    <div key={data.id} className="col-10 py-3">
                      <div className="card-blog">
                        <div className="header">
                          <div className="post-thumb">
                            <img
                              src={data.img}
                              alt=""
                              style={{ width: "100%" }}
                              className="sponser_card_img"
                            />
                          </div>
                          <button
                            className="btn text-lg text-white font-weight-bold"
                            style={{
                              width: "90%",
                              borderRadius: "0px 0px 10px 10px",
                              margin: "0% 5% 5% 0%",
                              backgroundColor: "#004EA9",
                            }}
                          >
                            Sponsor
                          </button>
                        </div>
                      </div>
                    </div>
                  ))} */}
              </Slider>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <Link to="/events" style={{ width: "100%" }}>
              <button
                className="sponsor-btn btn btn-outline-light mt-2"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginBottom: "2vh",
                  width: "100%",
                  color: "#004EA9",
                  fontWeight: "bolder",
                }}
              >
                More Events
              </button>
            </Link>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default SponserE;
