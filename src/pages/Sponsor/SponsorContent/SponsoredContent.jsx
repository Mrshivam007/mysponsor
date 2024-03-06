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

const SponsoredContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  const sponsor_id = userDetails.user_id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSponsoredItem());
  }, []);
  const [successMessage, setSuccessMessage] = useState("");
  const contentDetails = useSelector((state) => state.sponsor);
  console.log("getting data ", contentDetails);
  console.log("user details", auth);
  const cardData = contentDetails?.SponsoredItem?.sponsor_content;
  console.log("Content details", contentDetails);
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve success message from sessionStorage
    const message1 = sessionStorage.getItem("successMessage");
    // Clear success message from sessionStorage
    sessionStorage.removeItem("successMessage");

    if (message1) {
      setSuccessMessage(message1);
    }
  }, []);

  const isLoading = () => {
    return contentDetails?.loading;
  };

  const handleSponsorClick = (data) => {
    navigate("/sponsored_content_details", { state: { eventData: data } });
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
            <EventsHeader title={"Your Sponsored Content!"} logo={listevents} />
            <h1></h1>
            {successMessage && <SuccessToast message={successMessage} />}

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
                              <div
                                className="col-3 p-3"
                                style={{ height: "32vh" }}
                              >
                                <img
                                  src={data.content_id.thumbnail1}
                                  alt=""
                                  style={{
                                    width: "100%",
                                    height: "28vh",
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
                                  <h4 className="font-weight-bold">
                                    Event Sponsored for:
                                  </h4>
                                  <div className="d-flex justify-content-around text-lg mt-3">
                                    {data.content_id.sponsoring_content_items
                                      // .filter((item) => item.is_sponsored) // Filter only items where is_sponsored is true
                                      .map((item, index) => (
                                        <span
                                          key={index}
                                          className={
                                            "badge rounded-pill px-2 py-1 bg-success"
                                          }
                                        >
                                          {item.sponsoring_content_items}
                                          <i className="bi bi-check2-circle"></i>
                                        </span>
                                      ))}
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
                                      {/* {data.content_id.sponsoring_content_items
                                        .filter((item) => item.is_sponsored)
                                        .reduce(
                                          (total, item) =>
                                            total + parseInt(item.price, 10),
                                          0
                                        )
                                        .toLocaleString()}{" "} */}
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
              <h2 className="sponsor-mobile-text">My Sponsored Content</h2>
              <div className="container mb-4">
                {cardData &&
                  cardData.slice().reverse().map((data) => {
                    return (
                      <div className="row">
                        <div className="col-12">
                          <div className="card myevents-card">
                            <div className="post-thumb">
                              <img
                                src={data.content_id.thumbnail1}
                                alt=""
                                style={{ width: "100%" }}
                              />
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
                                      Content Sponsored for:
                                    </h4>
                                    <div className="d-flex justify-content-around text-lg">
                                      {data.content_id.sponsoring_content_items
                                        // .filter((item) => item.is_sponsored) // Filter only items where is_sponsored is true
                                        .map((item, index) => (
                                          <span
                                            key={index}
                                            className={
                                              "badge rounded-pill px-2 py-1 bg-success"
                                            }
                                          >
                                            {item.sponsoring_content_items}
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

export default SponsoredContent;
