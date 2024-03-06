import React, { useEffect } from "react";
import "./myevents.css";
import info from "../../../assets/img/info.svg";
import heart from "../../../assets/img/heart2.svg";
import cardImg from "../../../assets/img/my_events_img.png";
import bgimage from "../../../assets/img/circle-bg.png";
import card_bg from "../../../assets/img/card/header-bg.png";
import { Footer, NavBar } from "../../../components";
const MyEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  return (
    <>
      <div
        className="myevents-bg"
        style={{
          width: "100%",
          height: "auto",
          paddingBottom: '1%',
          backgroundImage: `url(${bgimage})`,
        }}
      >
        
        <div className="desktop-view">
          <div
            className="container"
            style={{ maxWidth: "1400px", marginBottom: "5%" }}
          >
            <div
              className="page-banner home-banner p-3"
              style={{ height: "auto", backgroundImage: `url(${card_bg})` }}
            >
              <h1 className="text-white text-center font-weight-bold">
                My Events
              </h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {[1, 2, 3, 4, 5].map(() => (
                <div className="col-12 mb-4">
                  <div
                    className="card"
                    style={{ borderRadius: "20px", backgroundColor: "#efefef" }}
                  >
                    <div className="row mx-0">
                      <div className="col-3 p-3">
                        <img src={cardImg} alt="" style={{ width: "100%" }} />
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
                            Ganesh Chaturthi{" "}
                          </h3>
                          <h4>Durg, C.G.</h4>
                          <div className="star d-flex">
                            <h5>
                              <i class="bi bi-star-fill text-warning"></i>&nbsp;
                              <i class="bi bi-star-fill text-warning"></i>&nbsp;
                              <i class="bi bi-star-fill text-warning"></i>&nbsp;
                              <i class="bi bi-star-fill text-warning"></i>&nbsp;
                              <i class="bi bi-star-fill text-white"></i>&nbsp;
                              <span className="text-sm text-muted">
                                3482 reviews
                              </span>
                            </h5>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eligendi laudantium iusto eum totam! Porro
                            saepe culpa dignissimos veritatis mollitia
                            voluptate.
                          </p>
                        </div>
                      </div>

                      <div className="col-4 p-4">
                        <div className="box">
                          <div className="heart d-flex justify-content-between mb-2">
                            <span>
                              <h4 className="d-inline">
                                <i className="bi bi-cash text-success"></i>
                                &nbsp;&nbsp; $ 10,000
                              </h4>
                            </span>
                            <img
                              src={heart}
                              alt=""
                              style={{
                                width: "10%",
                                fill: "#FFF",
                                filter:
                                  "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                              }}
                            />
                          </div>
                          <h4>
                            <i className="bi bi-people-fill text-danger"></i>
                            &nbsp;&nbsp; 1 Million+
                          </h4>

                          <div className="container text-white text-center d-flex justify-content-between px-0 mt-5">
                            <div className="box myevents-box text-white">
                              <h6
                                style={{
                                  borderBottom:
                                    "1px solid rgba(255, 255, 255, 0.30)",
                                  padding: "2%",
                                }}
                              >
                                Your Bid
                              </h6>
                              <h5>₹ 50,000</h5>
                            </div>
                            <div className="box myevents-box">
                              <h5 className="pt-1">
                                <img
                                  src={info}
                                  alt=""
                                  style={{ width: "20%" }}
                                />
                              </h5>
                              <h5>View Details</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
        {/* MOBILE VIEW FOR CARDS */}
        <div className="mobile-view text-md">
          <h2 className="sponsor-mobile-text">My Events</h2>
          <div className="container mb-4">
            <div className="row">
              {[1, 2, 3, 4].map(() => (
                <div className="col-12">
                  <div className="card myevents-card">
                    <div className="post-thumb">
                      <img src={cardImg} alt="" style={{ width: "100%" }} />
                      <div className="text-overlay">
                        <h4 className="font-weight-bold mb-0">
                          Ganesh Chaturthi
                        </h4>
                        <h5>Durg, C.G.</h5>
                      </div>
                    </div>
                    <div className="row d-flex align-items-center">
                      <div className="col-4" style={{ padding: "0 0 0 8%" }}>
                        <div className="box">
                          <h4 className="text-sm font-weight-bold">
                            <i className="bi bi-cash text-success"></i>
                            &nbsp; $10,000&lt;
                          </h4>
                          <h4 className="text-sm font-weight-bold">
                            <i className="bi bi-people-fill text-danger"></i>
                            &nbsp; 1 Million+
                          </h4>
                        </div>
                      </div>
                      <div className="col-8 pl-0">
                        <div
                          className="container text-white text-center d-flex justify-content-between"
                          style={{ padding: "0 4% 4% 0" }}
                        >
                          <div className="box myevents-box">
                            <p
                              style={{
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.30)",
                                // padding: "2%",
                              }}
                            >
                              Your Bid
                            </p>
                            <p>₹50,000</p>
                          </div>
                          <div className="box myevents-box">
                            <p className="">
                              <img src={info} alt="" style={{ width: "20%" }} />
                            </p>
                            <p>View Details</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default MyEvents;
