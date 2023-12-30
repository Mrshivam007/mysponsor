import React, { useEffect, useState } from "react";
import fav_logo from "../../../assets/img/favorite.png";
import bgimage from "../../../assets/img/circle-bg.png";
import { EventsHeader, Footer} from "../../../components";
import { Tab, Tabs } from "react-bootstrap";
import { fetchFavoriteEvent } from "../../../redux/actions/sponsorAction";
import SponsorNavbar from "../SponsorNavbar/SponsorNavbar";
import { useDispatch, useSelector } from "react-redux";
import FavouriteEventCard from "./FavouriteEventCard";
const Favourite = () => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const eventDetails = useSelector(state => state.sponsor)
  useEffect(() => {
      dispatch(fetchFavoriteEvent())
  }, [])
  console.log("Favorite Event Details", eventDetails);
  return (
    <>
      <div
        className="events-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <SponsorNavbar />
        <EventsHeader title={"Your Favourites are Here !!!"} logo={fav_logo} />
        <FavouriteEventCard cardData={eventDetails?.favoriteEvent} />
        {/* <div className="container mx-2">
          <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="all" title="All">
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
                            src={""}
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
                              Event Title
                            </h3>
                            <h4>New Delhi</h4>
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
                            <p>This is Event Description </p>
                          </div>
                        </div>

                        <div className="col-4 py-3 px-2">
                          <div className="box">
                            <div className="heart d-flex justify-content-between mb-2">
                              <span>
                                <h4 className="d-inline">
                                  <i className="bi bi-cash text-success"></i>
                                  &nbsp;&nbsp; Price
                                </h4>
                              </span>
                              <span
                                className="bg-white"
                                style={{
                                  borderRadius: "20px",
                                  padding: "8px 7px 2px 8px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="bi bi-suit-heart-fill"
                                  onClick={() => setFavorite(!favorite)}
                                  style={
                                    favorite
                                      ? {
                                          color: "gray",
                                          filter:
                                            "drop-shadow(rgba(0, 0, 0, 0.5) 1px 3px 3px)",
                                        }
                                      : {
                                          color: "#ff0068",
                                          filter:
                                            "drop-shadow(rgba(0, 0, 0, 0.5) 1px 3px 3px)",
                                        }
                                  }
                                ></i>
                              </span>
                            </div>
                            <h4>
                              <i className="bi bi-people-fill text-danger"></i>
                              &nbsp;&nbsp; 300
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
                                <h5>₹ 100</h5>
                              </div>
                              <div
                                className="box myevents-box"
                                style={{ cursor: "pointer" }}
                              >
                                <h5 className="pt-1">
                                  <img
                                    src={""}
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
              </div>
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
                            s
                            src={""}
                            alt=""
                            style={{ width: "100%", borderRadius: "15px" }}
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
                            <h3 className="mt-3 font-weight-bolder d-flex justify-content-between">
                              Content Title
                            </h3>
                            <h4 className="font-weight-bold">
                              Platform:{" "}
                              <span className="font-weight-light">Youtube</span>
                            </h4>
                            <h6 className="font-weight-bold">
                              Category description:
                            </h6>
                            <p>
                              This is Description
                              <b
                                className="text-sm font-weight-bold"
                                style={{
                                  color: "#055bb5",
                                  cursor: "pointer",
                                }}
                              >
                                ...Read More
                              </b>
                            </p>
                          </div>
                        </div>

                        <div className="col-4 py-3 px-2">
                          <div className="box">
                            <h5 className=" font-weight-bold d-flex justify-content-between align-items-center">
                              <span>
                                Channel Subs:&nbsp;
                                <span className="font-weight-light">100</span>
                              </span>
                              <span
                                className="bg-white"
                                style={{
                                  borderRadius: "20px",
                                  padding: "8px 7px 2px 8px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="bi bi-suit-heart-fill"
                                  onClick={() => setFavorite(!favorite)}
                                  style={
                                    favorite
                                      ? {
                                          color: "gray",
                                          filter:
                                            "drop-shadow(rgba(0, 0, 0, 0.5) 1px 3px 3px)",
                                        }
                                      : {
                                          color: "#ff0068",
                                          filter:
                                            "drop-shadow(rgba(0, 0, 0, 0.5) 1px 3px 3px)",
                                        }
                                  }
                                ></i>
                              </span>
                            </h5>
                            <h5 className="font-weight-bold">
                              Location:&nbsp;
                              <span className="font-weight-light">Raipur</span>
                            </h5>
                            <h5 className="font-weight-bold">
                              Video Preview:&nbsp;
                              <span className="font-weight-light">
                                **Video Link Here**
                              </span>
                            </h5>
                            <div className="container text-white text-center d-flex justify-content-between px-0 mt-3">
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
                                <h5>₹ 1000</h5>
                              </div>
                              <div
                                className="box myevents-box"
                                style={{ cursor: "pointer" }}
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
              </div>
            </Tab>
            <Tab eventKey="events" title="Events">
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
                            src={""}
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
                              Event Title
                            </h3>
                            <h4>New Delhi</h4>
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
                            <p>This is Event Description </p>
                          </div>
                        </div>

                        <div className="col-4 py-3 px-2">
                          <div className="box">
                            <div className="heart d-flex justify-content-between mb-2">
                              <span>
                                <h4 className="d-inline">
                                  <i className="bi bi-cash text-success"></i>
                                  &nbsp;&nbsp; Price
                                </h4>
                              </span>
                              <span
                                className="bg-white"
                                style={{
                                  borderRadius: "20px",
                                  padding: "8px 7px 2px 8px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="bi bi-suit-heart-fill"
                                  onClick={() => setFavorite(!favorite)}
                                  style={
                                    favorite
                                      ? {
                                          color: "gray",
                                          filter:
                                            "drop-shadow(rgba(0, 0, 0, 0.5) 1px 3px 3px)",
                                        }
                                      : {
                                          color: "#ff0068",
                                          filter:
                                            "drop-shadow(rgba(0, 0, 0, 0.5) 1px 3px 3px)",
                                        }
                                  }
                                ></i>
                              </span>
                            </div>
                            <h4>
                              <i className="bi bi-people-fill text-danger"></i>
                              &nbsp;&nbsp; 300
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
                                <h5>₹ 100</h5>
                              </div>
                              <div
                                className="box myevents-box"
                                style={{ cursor: "pointer" }}
                                // onClick={() => handleSponsorClick(data)}
                              >
                                <h5 className="pt-1">
                                  <img
                                    src={""}
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
              </div>
            </Tab>
            <Tab eventKey="content" title="Contents">
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
                            s
                            src={""}
                            alt=""
                            style={{ width: "100%", borderRadius: "15px" }}
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
                            <h3 className="mt-3 font-weight-bolder d-flex justify-content-between">
                              Content Title
                            </h3>
                            <h4 className="font-weight-bold">
                              Platform:{" "}
                              <span className="font-weight-light">Youtube</span>
                            </h4>
                            <h6 className="font-weight-bold">
                              Category description:
                            </h6>
                            <p>
                              This is Description
                              <b
                                className="text-sm font-weight-bold"
                                style={{
                                  color: "#055bb5",
                                  cursor: "pointer",
                                }}
                              >
                                ...Read More
                              </b>
                            </p>
                          </div>
                        </div>

                        <div className="col-4 py-3 px-2">
                          <div className="box">
                            <h5 className=" font-weight-bold d-flex justify-content-between align-items-center">
                              <span>
                                Channel Subs:&nbsp;
                                <span className="font-weight-light">100</span>
                              </span>
                              <span
                                className="bg-white"
                                style={{
                                  borderRadius: "20px",
                                  padding: "8px 7px 2px 8px",
                                  cursor: "pointer",
                                }}
                              >
                                <i
                                  className="bi bi-suit-heart-fill"
                                  onClick={() => setFavorite(!favorite)}
                                  style={
                                    favorite
                                      ? {
                                          color: "gray",
                                          filter:
                                            "drop-shadow(rgba(0, 0, 0, 0.5) 1px 3px 3px)",
                                        }
                                      : {
                                          color: "#ff0068",
                                          filter:
                                            "drop-shadow(rgba(0, 0, 0, 0.5) 1px 3px 3px)",
                                        }
                                  }
                                ></i>
                              </span>
                            </h5>
                            <h5 className="font-weight-bold">
                              Location:&nbsp;
                              <span className="font-weight-light">Raipur</span>
                            </h5>
                            <h5 className="font-weight-bold">
                              Video Preview:&nbsp;
                              <span className="font-weight-light">
                                **Video Link Here**
                              </span>
                            </h5>
                            <div className="container text-white text-center d-flex justify-content-between px-0 mt-3">
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
                                <h5>₹ 1000</h5>
                              </div>
                              <div
                                className="box myevents-box"
                                style={{ cursor: "pointer" }}
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
              </div>
            </Tab>
          </Tabs>
        </div> */}
        {/* <MyEventCard />
        <ContentCard /> */}
        <Footer />
      </div>
    </>
  );
};

export default Favourite;
