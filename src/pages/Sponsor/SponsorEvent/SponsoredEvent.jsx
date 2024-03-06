import React, { useEffect, useState } from "react";
import bgimage from "../../../assets/img/circle-bg.png";
import cardImg from "../../../assets/img/my_events_img.png";
import listevents from "../../../assets/img/list_events.png";
import { EventsHeader, Footer, NavBar } from "../../../components";
import { fetchSponsoredItem } from "../../../redux/actions/sponsorAction";
import { useDispatch, useSelector } from "react-redux";
import apiurl from "../../../constant/config";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import SuccessToast from "../../../components/Toast/Success";

const SponsoredEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  const sponsor_id = userDetails.user_id;
  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.sponsor);
  useEffect(() => {
    dispatch(fetchSponsoredItem());
  }, []);
  console.log("user details", auth);
  console.log("Event details", eventDetails);
  const cardData = eventDetails.SponsoredItem?.sponsor_event;
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Retrieve success message from sessionStorage
    const message1 = sessionStorage.getItem("successMessage");
    const message2 = sessionStorage.getItem("deletionMessage");
    // Clear success message from sessionStorage
    sessionStorage.removeItem("successMessage");

    if (message1) {
      setSuccessMessage(message1);
    }
  }, []);

  const isLoading = () => {
    return eventDetails?.loading;
  };

  const navigate = useNavigate();

  const handleSponsorClick = (data) => {
    navigate("/sponsored_event_details", { state: { eventData: data } });
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
            <EventsHeader title={"Your Sponsored Event!"} logo={listevents} />
            {successMessage && <SuccessToast message={successMessage} />}
            <h1></h1>
            <div className="desktop-view mt-4">
              <div className="container">
                {cardData &&
                  cardData.slice().reverse().map((data) => {
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
                                    height: "223px",
                                    padding: "4%",
                                  }}
                                >
                                  <img
                                    src={apiurl + data.event_id.thumbnail1}
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
                                    {data.event_id.title}
                                  </h3>
                                  <h4>{data.event_id.location}</h4>
                                  {/* <div className="star d-flex">
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
                                  </div> */}
                                  <p>{data.event_id.description}</p>
                                </div>
                              </div>

                              <div className="col-4 py-3 px-2">
                                <div className="box h-100 d-flex flex-column justify-content-around">
                                  <h4 className="font-weight-bold">
                                    Event Sponsored for:
                                  </h4>
                                  <div className="d-flex justify-content-around text-lg">
                                    {data.sponsoring_items
                                      // .filter((item) => item.is_sponsored) // Filter only items where is_sponsored is true
                                      .map((item, index) => (
                                        <span
                                          key={index}
                                          className={
                                            "badge rounded-pill px-2 py-1 bg-success"
                                          }
                                        >
                                          {item.sponsoring_items}
                                          <i className="bi bi-check2-circle"></i>
                                        </span>
                                      ))}
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
                                      <h5>
                                        ₹
                                        {data.amount}
                                        {/* Display the sum of prices */}
                                      </h5>
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
              <div style={{ paddingBottom: "2vh" }}>
                <button
                  className="btn text-white py-1 px-4 font-weight-bold d-none d-md-block"
                  style={{
                    margin: "auto",
                    backgroundColor: "#004EA9",
                    borderRadius: "10px",
                  }}
                >
                  Load More
                </button>
              </div>
            </div>

            <div className="mobile-view text-md">
              <h2 className="sponsor-mobile-text">My Events</h2>
              <div className="container mb-4">
              {cardData &&
                  cardData.slice().reverse().map((data) => {
                    return (
                      <div className="row">
                        <div className="col-12">
                          <div className="card myevents-card">
                            <div
                              className="post-thumb"
                              style={{ height: "40svh" }}
                            >
                              <img
                                src={apiurl + data.event_id.thumbnail1}
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "10px",
                                }}
                              />
                              <div
                                className="text-overlay"
                                style={{ borderRadius: "0 0 10px 10px" }}
                              >
                                <h4 className="font-weight-bold mb-0">
                                  {data.event_id.title}
                                </h4>
                                <h5>{data.event_id.location}</h5>
                              </div>
                            </div>
                            <div className="container">
                              <div className="row d-flex">
                                <div className="col-12">
                                  <div className="box">
                                    <h4 className="font-weight-bold">
                                      Event Sponsored for:
                                    </h4>
                                    <div className="d-flex justify-content-around text-lg">
                                      {data.sponsoring_items
                                        // .filter((item) => item.is_sponsored) // Filter only items where is_sponsored is true
                                        .map((item, index) => (
                                          <span
                                            key={index}
                                            className={
                                              "badge rounded-pill px-2 py-1 bg-success"
                                            }
                                          >
                                            {item.sponsoring_items}
                                            <i className="bi bi-check2-circle"></i>
                                          </span>
                                        ))}
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
                                      <p className="mb-1">
                                        ₹
                                       {data.amount}
                                      </p>
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

export default SponsoredEvent;
