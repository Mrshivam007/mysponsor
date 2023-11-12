import sponser_card from "../../assets/img/blog/blog-1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponser.css";
import arrow from "../../assets/img/right-arrow.png";
import { Link } from "react-router-dom";
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
  // console.log(cardData);

  return (
    <>
      <div className="sponsor-line">
        <h1 className="sponsor-text" style={{ backgroundColor: "transparent" }}>
          {line}
        </h1>
      </div>
      <h2 className="sponsor-mobile-text">{line}</h2>

      {/* Events Layer  */}

      <div className="container sponsor-container" id="sponser_layer">
        <div className="sponsor-desktop">
          <div className="row my-5">
            {/* <Slider {...settings}> */}
            {cardData &&
              cardData.map((data) => (
                <div key={data.id} className="col-lg-3 col-md-6 py-3">
                  <div className="card-blog">
                    <div className="header">
                      <div className="post-thumb">
                        <img
                          src={sponser_card}
                          alt=""
                          style={{ width: "100%" }}
                          className="sponser_card_img"
                        />
                        <div className="text-overlay">
                          <p className="text-lg font-weight-bold mb-0">
                            {data.name}
                          </p>
                          <p>{data.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="body">
                      <div className="row">
                        <div
                          className="col"
                          style={{ borderRight: "1px solid #cfcfcf" }}
                        >
                          <h6 className="post-title">
                            <a href="blog-details.html">Price Band</a>
                          </h6>
                          <div className="post-date">
                            <i className="bi bi-cash text-success"></i>
                            <b> {data.price}</b>
                          </div>
                        </div>
                        <div className="col">
                          <h6 className="post-title">
                            <a href="blog-details.html">Audience</a>
                          </h6>
                          <div className="post-date">
                            <i className="bi bi-people-fill text-danger"></i>
                            <b> {data.people}</b>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary mx-auto rounded-0"
                      style={{ width: "100%" }}
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
                  style={{ borderRadius: "15px" }}
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
                <img src={arrow} style={{ transform: "rotate(90deg)" }} />
              </div>
            </div>
            <div className="col-lg-4" style={{ width: "76%" }}>
              <Slider {...settings}>
                {cardData &&
                  cardData.map((data) => (
                    <div key={data.id} className="col-lg-3 col-md-6 py-3">
                      <div className="card-blog">
                        <div className="header">
                          <div className="post-thumb">
                            <img
                              src={sponser_card}
                              alt=""
                              style={{ width: "100%" }}
                              className="sponser_card_img"
                            />
                            <div class="text-overlay">
                              <p className="text-lg font-weight-bold mb-0 ">
                                {data.name}
                              </p>
                              <p>{data.location}</p>
                            </div>
                          </div>
                        </div>
                        <div className="body sponsor-card-detail">
                          <div className="row">
                            <div
                              className="col"
                              style={{ borderRight: "1px solid #cfcfcf" }}
                            >
                              <h6 className="post-title">
                                <a href="blog-details.html">Price Band</a>
                              </h6>
                              <div className="post-date">
                                <i className="bi bi-cash text-success"></i>
                                <b> {data.price};</b>
                              </div>
                            </div>
                            <div className="col">
                              <h6 className="post-title">
                                <a href="blog-details.html">Audience</a>
                              </h6>
                              <div className="post-date">
                                <i className="bi bi-people-fill text-danger"></i>
                                <b> {data.people} </b>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          className="btn btn-primary mx-auto rounded-0"
                          style={{ width: "100%" }}
                        >
                          Sponser Now
                        </button>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <Link to="/events">
              <button
                className="sponsor-btn btn btn-outline-light mt-4"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginBottom: "2vh",
                  width: "100%",
                  color: "blue",
                }}
              >
                See More
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
