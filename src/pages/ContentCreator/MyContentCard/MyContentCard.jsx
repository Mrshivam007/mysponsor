import React, { useEffect } from "react";
import apiurl from "../../../constant/config";
import { Link, useNavigate } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const MyContentCard = ({ cardData, heading }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const navigate = useNavigate();

  const handleDetailsClick = (data) => {
    navigate("/mycontent-details", { state: { contentData: data } });
  };

  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      This Content is Admin Approved
    </Tooltip>
  );

  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      This Content is Waiting for Admin Approval
    </Tooltip>
  );

  console.log("content card data", cardData);
  return (
    <>
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
                              src={apiurl + data.thumbnail1}
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
                              Video Preview:&nbsp;
                              <span className="font-weight-light">
                                **Video Link Here**
                              </span>
                            </h5> */}
                            <div>
                              {data.is_approval ? (
                                <h4>
                                  <i className="bi bi-check-circle-fill text-success"></i>{" "}
                                  Approved
                                </h4>
                              ) : (
                                <h4>
                                  <i className="bi bi-clock-fill text-danger"></i>{" "}
                                  Pending
                                </h4>
                              )}
                            </div>
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
        <h2 className="sponsor-mobile-text">{heading}</h2>
        <div className="container mb-4">
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
                  <div className="col-12">
                    <div className="card myevents-card">
                      <div className="post-thumb" style={{ height: "40svh" }}>
                        <img
                          src={apiurl + data.thumbnail1}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                          }}
                        />
                        {/* <div
                          className="content-text-overlay"
                          style={{ justifyContent: "start", alignItems: "end" }}
                        >
                          <div className="heart d-flex justify-content-between mb-2">
                            <div>
                              {data.is_approval ? (
                                <h4>
                                  <i className="bi bi-check-circle-fill text-success"></i>
                                  {" "}Approved
                                </h4>
                              ) : (
                                <h4>
                                  <i className="bi bi-clock-fill text-danger"></i>
                                  {" "}Pending
                                </h4>
                              )}
                            </div>
                          </div>
                        </div> */}
                        <div className="content-text-overlay">
                          <div className="heart d-flex justify-content-end mb-2">
                            <div>
                              {data.is_approval ? (
                                <OverlayTrigger
                                  placement="bottom-end"
                                  delay={{ show: 250, hide: 400 }}
                                  overlay={renderTooltip1}
                                >
                                  <h2>
                                    <i className="bi bi-check-circle-fill text-success"></i>{" "}
                                    {/* Approved */}
                                  </h2>
                                </OverlayTrigger>
                              ) : (
                                <OverlayTrigger
                                  placement="bottom-end"
                                  delay={{ show: 250, hide: 400 }}
                                  overlay={renderTooltip2}
                                >
                                  <h2>
                                    <i className="bi bi-clock-fill text-danger"></i>{" "}
                                    {/* Pending */}
                                  </h2>
                                </OverlayTrigger>
                              )}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-weight-bold mb-0">
                              {data.title}
                            </h4>
                            <h5>{data.location}</h5>
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <div className="container text-white text-center d-flex justify-content-between px-0 mb-2">
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
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MyContentCard;
