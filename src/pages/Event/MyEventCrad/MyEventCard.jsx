import React, { useEffect } from "react";
import info from "../../../assets/img/info.svg";
import heart from "../../../assets/img/heart2.svg";
import cardImg from "../../../assets/img/my_events_img.png";
import bgimage from "../../../assets/img/circle-bg.png";
import card_bg from "../../../assets/img/card/header-bg.png";
import { Footer, NavBar } from "../../../components";
import { fetchEvent } from "../../../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import apiurl from "../../../constant/config";
import { useNavigate } from "react-router-dom";
const MyEventCard = ({ cardData }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.event);
  useEffect(() => {
    dispatch(fetchEvent());
  }, []);

  const navigate = useNavigate();

  const handleSponsorClick = (data) => {
    navigate("/myevent-details", { state: { eventData: data } });
  };
  return (
    <>
      <div
        className="myevents-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <div className="desktop-view">
          <div className="container">
            {cardData &&
              cardData.map((data) => {
                let totalSponsoringPrice = 0;
                const sponsoring_items = data?.sponsoring_items || [];

                sponsoring_items.forEach((item) => {
                  if (item && item.price) {
                    totalSponsoringPrice += parseFloat(item.price);
                  }
                });

                return (
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
                              s
                              src={apiurl + data.thumbnail1}
                              alt=""
                              style={{ width: "100%" }}
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
                                {data.title}{" "}
                              </h3>
                              <h4>{data.location}</h4>
                              <div className="star d-flex">
                                <h5>
                                  <i class="bi bi-star-fill text-warning"></i>
                                  &nbsp;
                                  <i class="bi bi-star-fill text-warning"></i>
                                  &nbsp;
                                  <i class="bi bi-star-fill text-warning"></i>
                                  &nbsp;
                                  <i class="bi bi-star-fill text-warning"></i>
                                  &nbsp;
                                  <i class="bi bi-star-fill text-white"></i>
                                  &nbsp;
                                  <span className="text-sm text-muted">
                                    3482 reviews
                                  </span>
                                </h5>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi laudantium iusto eum
                                totam! Porro saepe culpa dignissimos veritatis
                                mollitia voluptate.
                              </p>
                            </div>
                          </div>

                          <div className="col-4 p-4">
                            <div className="box">
                              <div className="heart d-flex justify-content-between mb-2">
                                <span>
                                  <h4 className="d-inline">
                                    <i className="bi bi-cash text-success"></i>
                                    &nbsp;&nbsp; {totalSponsoringPrice}
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
                                &nbsp;&nbsp; {data.audience_expected}
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
                                <div
                                  className="box myevents-box"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handleSponsorClick(data)}
                                >
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
                  </div>
                );
              })}
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
            {cardData &&
              cardData.map((data) => (
                <div className="row">
                  <div className="col-12">
                    <div className="card myevents-card">
                      <div className="post-thumb">
                        <img
                          src={apiurl + data.thumbnail1}
                          alt=""
                          style={{ width: "100%" }}
                        />
                        <div className="text-overlay">
                          <h4 className="font-weight-bold mb-0">
                            {data.title}
                          </h4>
                          <h5>{data.location}</h5>
                        </div>
                      </div>
                      <div className="row d-flex align-items-center">
                        <div className="col-4" style={{ padding: "0 0 0 8%" }}>
                          <div className="box">
                            <h4 className="text-sm font-weight-bold">
                              <i className="bi bi-cash text-success"></i>
                              &nbsp; {data.price}&lt;
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
                            <div
                              className="box myevents-box"
                              style={{ cursor: "pointer" }}
                            >
                              <p className="">
                                <img
                                  src={info}
                                  alt=""
                                  style={{ width: "20%" }}
                                />
                              </p>
                              <p>View Details</p>
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
        <Footer />
      </div>
    </>
  );
};

export default MyEventCard;
