import React, { useEffect } from "react";
import calendar from "../../../assets/img/calendar.svg";
import camera from "../../../assets/img/camera.svg";
import listevents from "../../../assets/img/list_events.png";
import bgimage from "../../../assets/img/circle-bg.png";
import cardImg1 from "../../../assets/img/list_events_card1.jpg";
import cardImg2 from "../../../assets/img/list_events_card2.jpg";
import cardImg3 from "../../../assets/img/list_events_card3.jpg";
import { EventsHeader, Footer, NavBar } from "../../../components";
import { Link } from "react-router-dom";
import YourContent from "../YourContent/YourContent";
const ContentHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  return (
    <>
      <div
        className="list-events-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <NavBar />
        {/* ---DESKTOP VIEW---  */}
        <div className="desktop-view">
          <EventsHeader title={"List Content"} logo={listevents} />
          <YourContent />
        </div>
        {/* ---DESKTOP VIEW END--- */}
        {/* ---MOBILE VIEW--- */}

        <div className="mobile-view">
          <h2 className="sponsor-mobile-text">Get your content listed</h2>
          <div className="page-section">
        <div className="container choice-container">
          <div className="row" style={{ flexWrap: "nowrap" }}>
            <div className="col-lg-6">
              <Link to="/your_content">
                <div
                  className="card-service wow fadeInUp choice-card"
                  style={{
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="body choice-body choice-1 text-left">
                    <h2 className="font-weight-bolder mb-0">Content</h2>
                    <div className="card_line"></div>
                    <p className="choice-para mt-2 text-left">
                      We help you define your SEO objective & develop a
                      realistic strategy with you
                    </p>
                    <button
                      to="/your_content"
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
                    className="header choice-img mb-0"
                  >
                    <img src={calendar} alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link to="/sponsored_contents">
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
                      Sponsored Content
                    </h2>
                    <div className="card_line"></div>
                    <p className="choice-para mt-2 text-left">
                      We help you define your SEO objective & develop a
                      realistic strategy with you
                    </p>
                    <button
                      to="/cc"
                      className="choice-btn btn text-white py-1 font-weight-bold"
                    >
                      Explore now
                    </button>
                  </div>
                  <div className="header choice-img mb-0">
                    <img src={camera} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </div>
        {/* ---MOBILE VIEW END--- */}
        <div className="container">
          <div className="list-events-box">
            <h2>
              List your Content and get sponsored worldwide by different sponsors
            </h2>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card list-events-card">
                <img
                  src={cardImg1}
                  alt="..."
                  style={{
                    padding: "5%",
                    borderRadius: "25px",
                  }}
                />
                <div className="card-body" style={{ padding: "0 0 0 5%" }}>
                  <h5 className="card-text font-weight-bold">
                    Want your content sponsored?
                  </h5>
                  <button className="btn text-white py-1 font-weight-bold mb-3">
                    <Link to={"create_content"} style={{ color: "white" }}>
                      List any Content
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 my-md-0 my-3">
              <div className="card list-events-card">
                <img
                  src={cardImg2}
                  alt="..."
                  style={{
                    padding: "5%",
                    borderRadius: "25px",
                  }}
                />
                <div className="card-body" style={{ padding: "0 0 0 5%" }}>
                  <h5 className="card-text font-weight-bold">
                    Update your listed content
                  </h5>
                  <button className="btn text-white py-1 font-weight-bold mb-3">
                    <Link
                      to={"update_UpcomingContent"}
                      style={{ color: "white" }}
                    >
                      Update Content
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card list-events-card">
                <img
                  src={cardImg3}
                  alt="..."
                  style={{
                    padding: "5%",
                    borderRadius: "25px",
                  }}
                />
                <div className="card-body" style={{ padding: "0 0 0 5%" }}>
                  <h5 className="card-text font-weight-bold">
                    Delete Your content
                  </h5>
                  <button className="btn text-white py-1 font-weight-bold mb-3">
                    <Link to={"delete_content"} style={{ color: "white" }}>
                      Delete Content
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContentHome;
