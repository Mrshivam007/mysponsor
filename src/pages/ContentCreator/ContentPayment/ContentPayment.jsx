import React, { useEffect } from "react";
import bgimage from "../../../assets/img/circle-bg.png";
import cardImg from "../../../assets/img/my_events_img.png";
import listevents from "../../../assets/img/list_events.png";
import { EventsHeader, Footer, NavBar } from "../../../components";
import { fetchSponsoredItem } from "../../../redux/actions/sponsorAction";
import { useDispatch, useSelector } from "react-redux";
import apiurl from "../../../constant/config";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
const ContentPayment = () => {
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  const sponsor_id = userDetails.user_id;
  const dispatch = useDispatch();
  const contentDetails = useSelector((state) => state.sponsor);
  useEffect(() => {
    dispatch(fetchSponsoredItem());
  }, []);
  console.log("user details", auth);
  const cardData = contentDetails.SponsoredItem?.sponsor_content;
  console.log("Content details", cardData);
  const navigate = useNavigate();

  const handleSponsorClick = (data) => {
    navigate("/sponsored_content_details", { state: { eventData: data } });
  };

  const isLoading = () => {
    return contentDetails?.loading;
  };

  return (
    <>
      {isLoading() ? (
        <Loading />
      ) : (
        <>
          <div
            className="list-events-bg"
            style={{
              width: "100%",
              height: "auto",
              backgroundImage: `url(${bgimage})`,
            }}
          >
            <EventsHeader
              title={"Your Contents Payment Status"}
              logo={listevents}
            />
            <div className="desktop-view mt-4">
              <div className="container">
                {cardData &&
                  cardData.map((data) => {
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
                                  src={apiurl + data.content_id.thumbnail1}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "10px",
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
                                    {data.content_id.title}
                                  </h3>
                                  <h4>{data.content_id.location}</h4>
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
                                      <i className="bi bi-star-fill text-white"></i>
                                      &nbsp;
                                      <span className="text-sm text-muted">
                                        3482 reviews
                                      </span>
                                    </h5>
                                  </div>
                                  <p>{data.content_id.description}</p>
                                </div>
                              </div>

                              <div
                                className="col-4"
                                style={{ padding: "2% 1% 2% 0" }}
                              >
                                <div className="box">
                                  <div>
                                    <h4 className="font-weight-bold">
                                      Payment Status:
                                    </h4>
                                    {data.is_pay_approval ? (
                                      <>
                                        <h5>
                                          <span className="rounded-pill">
                                            <i className="bi bi-check-circle-fill text-success"></i>
                                            &nbsp;&nbsp; Approved
                                          </span>
                                        </h5>
                                        <p className="text-success">
                                          **Your Contents Payment has been
                                          successfully approved by the Admin **
                                        </p>
                                      </>
                                    ) : (
                                      <>
                                        <h5>
                                          <span className="rounded-pill">
                                            <i className="bi bi-x-circle-fill text-danger"></i>
                                            &nbsp;&nbsp; Not Approved
                                          </span>
                                        </h5>
                                        <p className="text-danger">
                                          **Your Contents Payment will be
                                          approved by the Admin in 2 to 3
                                          bussiness Days**
                                        </p>
                                      </>
                                    )}
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
                                  onClick={() => handleSponsorClick(data)}
                                >
                                  Check Out Sponsors Details &nbsp;&nbsp;
                                  &gt;&gt;
                                </button>
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

            <div className="mobile-view text-md">
              <h2 className="sponsor-mobile-text">
                My Contents Payment Status
              </h2>
              <div className="container mb-4">
                {cardData &&
                  cardData.map((data) => {
                    return (
                      <div className="row">
                        <div className="col-12">
                          <div className="card myevents-card">
                            <div className="post-thumb">
                              <img
                                src={apiurl + data.content_id.thumbnail1}
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "10px",
                                }}
                              />
                              <div
                                className="text-overlay"
                                style={{ height: "60%" }}
                              >
                                <h4 className="font-weight-bold mb-0">
                                  {data.content_id.title}
                                </h4>
                                <h5>{data.content_id.content_platform}</h5>
                              </div>
                            </div>
                            <div className="container">
                              <div className="row d-flex">
                                <div className="col-12">
                                  <div className="box">
                                    <div>
                                      <h4 className="font-weight-bold">
                                        Payment Status:
                                      </h4>
                                      {data.is_pay_approval ? (
                                        <>
                                          <h5>
                                            <span className="rounded-pill">
                                              <i className="bi bi-check-circle-fill text-success"></i>
                                              &nbsp;&nbsp; Approved
                                            </span>
                                          </h5>
                                          <p className="text-success">
                                            **Your Events Payment has been
                                            successfully approved by the Admin
                                            **
                                          </p>
                                        </>
                                      ) : (
                                        <>
                                          <h5>
                                            <span className="rounded-pill">
                                              <i className="bi bi-x-circle-fill text-danger"></i>
                                              &nbsp;&nbsp; Not Approved
                                            </span>
                                          </h5>
                                          <p className="text-danger">
                                            **Your Payment will be approved by
                                            the Admin in 2 to 3 bussiness Days**
                                          </p>
                                        </>
                                      )}
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
                                    onClick={() => handleSponsorClick(data)}
                                  >
                                    Check Out Sponsors Details &nbsp;&nbsp;
                                    &gt;&gt;
                                  </button>
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
          </div>
        </>
      )}
    </>
  );
};

export default ContentPayment;
