import img1 from "../../../assets/img/choice/choice-card-1.png";
import img2 from "../../../assets/img/choice/choice-card-2.png";
import { Link } from "react-router-dom";
const YourEvent = () => {
  return (
    <>
      <div className="page-section">
        <div className="container">
          <div className="row" style={{ flexWrap: "nowrap" }}>
            <div className="col-lg-6">
              <Link to="/events">
                <div
                  className="card-service wow fadeInUp choice-card"
                  style={{
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="body choice-body choice-1 text-left">
                    <h2 className="font-weight-bolder mb-0">Your Event</h2>
                    <div className="card_line"></div>
                    <p className="choice-para mt-2 text-left">
                      We help you define your SEO objective & develop a
                      realistic strategy with you
                    </p>
                    <button
                      to="/events"
                      className="choice-btn btn text-white py-1 font-weight-bold"
                      style={{
                        float: "left",
                        backgroundColor: "#00448B",
                        borderRadius: "15px",
                      }}
                    >
                      Explore now
                    </button>
                  </div>
                  <div
                    className="header choice-img"
                    style={{ textAlign: "right" }}
                  >
                    <img src={img1} alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link to="/sponsored_events">
                <div
                  className="card-service wow fadeInUp choice-card"
                  style={{
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="body choice-body choice-2 text-left">
                    <h2 className="font-weight-bolder mb-0">
                      Sponsorsed Events
                    </h2>
                    <div className="card_line"></div>
                    <p className="choice-para mt-2 text-left">
                      We help you define your SEO objective & develop a
                      realistic strategy with you
                    </p>
                    <button
                      to="/cc"
                      className="choice-btn btn text-white py-1 font-weight-bold"
                      style={{
                        float: "left",
                        backgroundColor: "#00448B",
                        borderRadius: "15px",
                      }}
                    >
                      Explore now
                    </button>
                  </div>
                  <div
                    className="header choice-img"
                    style={{ textAlign: "right" }}
                  >
                    <img src={img2} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourEvent;
