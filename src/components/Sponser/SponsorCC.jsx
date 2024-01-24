import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponser.css";
import { Link } from "react-router-dom";
const SponserCC = ({ line, cardData }) => {
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
              <div className="col-lg-6 col-sm-12 mb-3" key={data.id}>
                <div
                  className="card"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "18px",
                    boxShadow: "0px 2px 10px -2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-4 col-md-5 col-sm-4 cc-img-container">
                      <img
                        className="img-fluid rounded-start cc-img"
                        src={""}
                        alt=""
                      />
                    </div>
                    <div className="col-6 col-md-5 col-sm-6 px-lg-0">
                      <div className="card-body cc-card-body">
                        <h5 className="card-title font-weight-bold d-inline">
                          {data.name}
                        </h5>
                        <br />
                        <span className="card-text">
                          Platform: {data.platform}
                        </span>
                        <br />
                        <span className="card-text">
                          <i className="bi bi-cash text-success"></i>
                          &nbsp;&nbsp; {data.price}
                        </span>
                        <br />
                        <p className="card-text">
                          <i className="bi bi-people-fill text-danger"></i>
                          &nbsp;&nbsp; {data.people}
                        </p>
                      </div>
                    </div>
                    <div className=" col-2 col-md-2 col-sm-2 pl-lg-0">
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
