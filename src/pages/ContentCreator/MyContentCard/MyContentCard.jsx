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
import { Link, useNavigate } from "react-router-dom";
const MyContentCard = ({ cardData }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const navigate = useNavigate();

  const handleDetailsClick = (data) => {
    navigate("/mycontent-details", { state: { contentData: data } });
  };

  console.log("content card data", cardData);
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
                const sponsoring_items = data?.sponsoring_content_items || [];

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
                              src={apiurl + data.thumbnail1}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                          <div className="col-5">
                            <div
                              className="mt-3 box d-flex flex-column justify-content-center"
                              style={{
                                borderRight: "1px solid #acacac",
                                height: "88%",
                              }}
                            >
                              <h3 className="font-weight-bolder">
                                {data.title}{" "}
                              </h3>
                              <h4 className="font-weight-bold">
                                Platform:{" "}
                                <span className="font-weight-light">
                                  {data.content_platform}
                                </span>
                              </h4>
                              <h6 className="font-weight-bold">
                                {data.content_category} description:
                              </h6>
                              <p>
                                {data.description}
                                <b
                                  className="text-sm font-weight-bold"
                                  style={{
                                    color: "#055bb5",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => handleDetailsClick(data)}
                                >
                                  ...Read More
                                </b>
                              </p>
                            </div>
                          </div>

                          <div className="col-4 py-3 px-2">
                            <div className="box h-100 d-flex flex-column justify-content-around">
                              <h5 className=" font-weight-bold">
                                Channel Subs:&nbsp;
                                <span className="font-weight-light">
                                  {data.audience_expected}
                                </span>
                              </h5>
                              <h5 className="font-weight-bold">
                                Location:&nbsp;
                                <span className="font-weight-light">
                                  {data.location}
                                </span>
                              </h5>
                              {/* <h5 className="font-weight-bold">
                                Price:&nbsp;
                                <span className="font-weight-light">
                                  {data.price}
                                </span>
                              </h5> */}
                              <h5 className="font-weight-bold">
                                Video Preview:&nbsp;
                                <span className="font-weight-light">
                                  **Video Link Here**
                                </span>
                              </h5>
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
                                  onClick={() => handleDetailsClick(data)}
                                >
                                  <h4 className="mb-0 mt-2">
                                    <i className="bi bi-info-circle"></i>
                                  </h4>
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
                        <div className="col-8 pl-0"></div>
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

export default MyContentCard;
