import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import heart from "../../../assets/img/heart2.svg";
import apiurl from "../../../constant/config";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const EventMobileCard = ({ line, cardData }) => {
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  console.log(userDetails);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSponsorClick = (data) => {
    navigate("/myevent-details", { state: { eventData: data } });
  };

  const renderTooltip1 = (props) => (
    <Tooltip
      id="button-tooltip"
      {...props}
      // style={{ backgroundColor: "mediumseagreen" }}
    >
      This Event is Admin Approved
    </Tooltip>
  );

  const renderTooltip2 = (props) => (
    <Tooltip
      id="button-tooltip"
      {...props}
      // style={{ backgroundColor: "mediumseagreen" }}
    >
      This Event is Waiting for Admin Approval
    </Tooltip>
  );

  return (
    <>
      {/* <h2 className="sponsor-mobile-text">{line}</h2>
      <div className="container sponsor-cards-mobile">
        <div className="row row-cols-2 g-0">
          {cardData &&
            cardData.slice().reverse().map((data) => (
              <div className="col py-3" style={{paddingLeft: "8px", paddingRight: '8px'}}>
                <div className="card-blog">
                  <div className="header">
                    <div className="post-thumb" style={{height:"200px"}}>
                      <img
                        src={data.thumbnail1}
                        alt=""
                        style={{ width: "100%",height:"100%" }}
                        className="sponser_card_img"
                      />
                      <div className="text-overlay">
                        <p className="text-lg font-weight-bold mb-0">
                          {data.title}
                        </p>
                        <p className="text-sm">{data.location}</p>
                      </div>
                    </div>
                    <button
                      className="btn text-lg text-white font-weight-bold"
                      style={{
                        width: "90%",
                        borderRadius: "0px 0px 10px 10px",
                        margin: "0% 0% 5% 5%",
                        backgroundColor: "#004EA9",
                      }}
                      onClick={() => handleSponsorClick(data)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div> */}
      <div className="mobile-view text-md">
        <h2 className="sponsor-mobile-text">{line}</h2>
        <div className="container mb-4">
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
                  <div className="col-12">
                    <div className="card myevents-card">
                      <div className="post-thumb" style={{ height: "40svh" }}>
                        <img
                          src={data.thumbnail1}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                          }}
                        />
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
                            onClick={() => handleSponsorClick(data)}
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

export default EventMobileCard;
