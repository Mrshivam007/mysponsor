import React from "react";
import bgimage from "../../../assets/img/circle-bg.png";
import cardImg from "../../../assets/img/my_events_img.png";
import listevents from "../../../assets/img/list_events.png";
import { EventsHeader, Footer, NavBar } from "../../../components";

const SponsoredEvent = () => {
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
        <EventsHeader title={"Your events got Sponsored!"} logo={listevents} />
        <h1></h1>
        <div className="desktop-view mt-4">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-4">
                <div
                  className="card"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#efefef",
                  }}
                >
                  <div className="row mx-0">
                    <div className="col-3 p-3">
                      <img
                        src={cardImg}
                        alt=""
                        style={{
                          width: "100%",
                          height: "-webkit-fill-available",
                        }}
                      />
                    </div>
                    <div className="col-5 mt-2">
                      <div
                        className="box"
                        style={{
                          borderRight: "1px solid #acacac",
                          height: "84%",
                        }}
                      >
                        <h3 className="mb-0 mt-3 font-weight-bolder d-flex justify-content-between">
                          Ganesh Chaturthi
                        </h3>
                        <h4>Durg,C.G.</h4>
                        <div className="star d-flex">
                          <h5>
                            <i className="bi bi-star-fill text-warning"></i>
                            &nbsp;
                            <i className="bi bi-star-fill text-warning"></i>
                            &nbsp;
                            <i className="bi bi-star-fill text-warning"></i>
                            &nbsp;
                            <i className="bi bi-star-fill text-warning"></i>
                            &nbsp;
                            <i className="bi bi-star-fill text-white"></i>&nbsp;
                            <span className="text-sm text-muted">
                              3482 reviews
                            </span>
                          </h5>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eligendi laudantium iusto eum totam! Porro saepe
                          culpa dignissimos veritatis mollitia voluptate.
                        </p>
                      </div>
                    </div>

                    <div className="col-4" style={{ padding: "2% 1% 2% 0" }}>
                      <div className="box">
                        <h4 className="font-weight-bold">
                          Event Sponsored for:
                        </h4>
                        <div className="d-flex justify-content-around text-lg mt-3">
                          <span
                            className="badge rounded-pill px-2 py-1"
                            style={{ backgroundColor: "#72dfa8 " }}
                          >
                            Banner <i className="bi bi-check2-circle"></i>
                          </span>
                          <span
                            className="badge rounded-pill px-2 py-1"
                            style={{
                              backgroundColor: "rgb(255 97 97)",
                            }}
                          >
                            LED Screen <i class="bi bi-x-lg"></i>
                          </span>
                          <span
                            className="badge rounded-pill px-2 py-1"
                            style={{ backgroundColor: "rgb(255 97 97)" }}
                          >
                            Bill Board <i class="bi bi-x-lg"></i>
                          </span>
                        </div>
                      </div>
                      <button
                        className="btn py-1 px-3 font-weight-bold d-none d-md-block"
                        style={{
                          width: "100%",
                          marginTop: "4%",
                          color: "#004EA9",
                          backgroundColor: "white",
                          border: "2px solid #004EA9",
                          borderRadius: "10px",
                        }}
                      >
                        Check Out Sponsors Details &nbsp;&nbsp; &gt;&gt;
                      </button>
                      <div className="container d-flex text-white text-center px-0 mt-2">
                        <div
                          className="box myevents-box text-white"
                          style={{ width: "100%" }}
                        >
                          <h6
                            style={{
                              borderBottom:
                                "1px solid rgba(255, 255, 255, 0.30)",
                              padding: "2%",
                            }}
                          >
                            Total amount sponsored
                          </h6>
                          <h5>₹ 50,000</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn text-white py-1 px-4 font-weight-bold d-none d-md-block"
            style={{
              margin: "2% auto",
              backgroundColor: "#004EA9",
              borderRadius: "10px",
            }}
          >
            Load More
          </button>
        </div>

        <div className="mobile-view text-md">
          <h2 className="sponsor-mobile-text">My Events</h2>
          <div className="container mb-4">
            <div className="row">
              <div className="col-12">
                <div className="card myevents-card">
                  <div className="post-thumb">
                    <img src={cardImg} alt="" style={{ width: "100%" }} />
                    <div className="text-overlay">
                      <h4 className="font-weight-bold mb-0"></h4>
                      <h5></h5>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row d-flex">
                      <div className="col-12">
                        <div className="box">
                          <h4 className="font-weight-bold">
                            Event Sponsored for:
                          </h4>
                          <div className="d-flex justify-content-between text-lg">
                            <span
                              className="badge rounded-pill px-2 py-1"
                              style={{ backgroundColor: "#72dfa8 " }}
                            >
                              Banner <i className="bi bi-check2-circle"></i>
                            </span>
                            <span
                              className="badge rounded-pill px-2 py-1"
                              style={{
                                backgroundColor: "rgb(255 97 97)",
                              }}
                            >
                              LED Screen <i class="bi bi-x-lg"></i>
                            </span>
                            <span
                              className="badge rounded-pill px-2 py-1"
                              style={{ backgroundColor: "rgb(255 97 97)" }}
                            >
                              Bill Board <i class="bi bi-x-lg"></i>
                            </span>
                          </div>
                        </div>

                        <div className="container text-lg text-white text-center d-flex my-2">
                          <div
                            className="box myevents-box"
                            style={{ width: "100%" }}
                          >
                            <p
                              className="mb-1"
                              style={{
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.30)",
                              }}
                            >
                              Total amount sponsored
                            </p>
                            <p className="mb-1">₹50,000</p>
                          </div>
                        </div>
                        <button
                          className="btn py-1 px-3 font-weight-bold"
                          style={{
                            width: "100%",
                            marginBottom: "2%",
                            color: "#004EA9",
                            backgroundColor: "white",
                            border: "2px solid #004EA9",
                            borderRadius: "10px",
                          }}
                        >
                          Check Out Sponsors Details &nbsp;&nbsp; &gt;&gt;
                        </button>
                      </div>
                    </div>
                  </div>
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

export default SponsoredEvent;
