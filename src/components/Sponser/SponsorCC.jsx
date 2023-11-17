import ccimg_card from "../../assets/img/mrbeast.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponser.css";
import { Link } from "react-router-dom";
// import { cardData2 } from "../../data/data";
const SponserCC = ({ line, cardData }) => {
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
      {/* Content Creator Layer */}

      <h1 className="sponsor-text">{line}</h1>

      <h2 className="sponsor-mobile-text">{line}</h2>

      <div
        className="sponsor-second-container container"
        style={{ marginTop: "4rem" }}
      >
        <div className="row">
          {cardData &&
            cardData.map((data) => (
              <div className="col-lg-6 col-sm-12 mb-3">
                <div
                  class="card"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "18px",
                  }}
                >
                  <div class="row g-0">
                    <div class="col-4 col-md-5 col-sm-4 cc-img-container">
                      <img
                        src={ccimg_card}
                        class="img-fluid rounded-start cc-img"
                        alt=""
                      />
                    </div>
                    <div class="col-6 col-md-5 col-sm-6 px-lg-0">
                      <div class="card-body cc-card-body">
                        <h5 class="card-title font-weight-bold d-inline">
                          {data.name}
                        </h5>
                        <br />
                        <span class="card-text">Platform: {data.platform}</span>
                        <br />
                        <span class="card-text">
                          <i className="bi bi-cash text-success"></i>
                          &nbsp;&nbsp; {data.price}
                        </span>
                        <br />
                        <p class="card-text">
                          <i className="bi bi-people-fill text-danger"></i>
                          &nbsp;&nbsp; {data.people}
                        </p>
                      </div>
                    </div>
                    <div class=" col-2 col-md-2 col-sm-2 pl-lg-0">
                      <button
                        className="btn btn-primary btn-block"
                        style={{
                          height: "100%",
                          borderRadius: "0px 18px 18px 0px",
                          backgroundColor: "#004EA9",
                        }}
                      >
                        <span className="text-xl">&gt;</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div
          className="container d-flex justify-content-center"
          style={{ paddingBottom: "4vh" }}
        >
          <Link to="/cc">
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
    </>
  );
};

export default SponserCC;
