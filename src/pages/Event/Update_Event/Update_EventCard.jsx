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
const Update_EventCard = ({ cardData }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  console.log(userDetails);

  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.event);

  const navigate = useNavigate();

  const handleUpdation = (data) => {
    navigate("/update_event", { state: { eventData: data } });
    window.location.reload()
  };
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
          <div className="container">
            {cardData &&
              cardData.slice().reverse().map((data) => {
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
                          <div className="col-3 p-0">
                            <div
                              className="img-container mx-auto"
                              style={{
                                width: "fit-content",
                                height: "200px",
                                padding: "4%",
                              }}
                            >
                              <img
                                src={data.thumbnail1}
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "10px",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-5">
                            <div
                              className="mt-3 box d-flex flex-column"
                              style={{
                                borderRight: "1px solid #acacac",
                                height: "88%",
                              }}
                            >
                              <h3 className="font-weight-bolder">
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
                              <p>{data.description}</p>
                            </div>
                          </div>

                          <div className="col-4 p-3">
                            <div className="box h-100 d-flex flex-column justify-content-around">
                              <div className="heart d-flex justify-content-between mb-2">
                                <span>
                                  <h4 className="d-inline">
                                    <i className="bi bi-cash text-success"></i>
                                    &nbsp;&nbsp; {totalSponsoringPrice}
                                  </h4>
                                </span>
                                {/* <img
                                  src={heart}
                                  alt=""
                                  style={{
                                    width: "10%",
                                    fill: "#FFF",
                                    filter:
                                      "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                                  }}
                                /> */}
                              </div>
                              <h4>
                                <i className="bi bi-people-fill text-danger"></i>
                                &nbsp;&nbsp; {data.audience_expected}
                              </h4>

                              <div className="container text-white text-center d-flex justify-content-between px-0">
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
                                  <h5>₹ {totalSponsoringPrice}</h5>
                                </div>
                                <div
                                  className="box myevents-box"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handleUpdation(data)}
                                >
                                  <h4 className="mt-2 mb-0">
                                    <i className="bi bi-arrow-clockwise"></i>
                                  </h4>
                                  <p>Update Event</p>
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
              cardData.slice().reverse().map((data) => (
                <div className="row">
                  <div className="col-12">
                    <div className="card myevents-card">
                      <div className="post-thumb">
                        <img
                          src={data.thumbnail1}
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
                              <p>
                                <i className="bi bi-trash "></i>
                              </p>
                              <p>Update this Event</p>
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
        
      </div>
    </>
  );
};

export default Update_EventCard;
