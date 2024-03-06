import React from "react";
import ccimg_card from "../../../assets/img/mrbeast.svg";
import { Link } from "react-router-dom";
const ContentCard = () => {
  return (
    <>
      <div className="desktop-view">
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
                    <img src={ccimg_card} alt="" style={{ width: "100%" }} />
                  </div>
                  <div className="col-5 mt-2">
                    <div
                      className="box"
                      style={{
                        borderRight: "1px solid #acacac",
                        height: "94%",
                      }}
                    >
                      <h3 className="mt-1 font-weight-bolder d-flex justify-content-between">
                        Mr. Beast
                      </h3>
                      <h4>Platform: Youtube</h4>
                      <h6 className="font-weight-bold">Video Description:</h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi laudantium iusto eum totam! Porro saepe culpa
                        dignissimos veritatis mollitia voluptate. Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit.
                        Perferendis sequi repellendus, laboriosam nesciunt
                        tempora et? Dolor aliquam expedita corrupti blanditi...{" "}
                        <b>Read More</b>
                      </p>
                    </div>
                  </div>

                  <div className="col-4 pr-1 py-3">
                    <div className="box">
                      <p>
                        <b>Channel Link: </b>
                        <a href="https://www.youtube.com/@MrBeast">
                          https://www.youtube.com/@MrBeast
                        </a>
                      </p>
                      <p>
                        <b>Video Link: </b>
                        <a href="https://www.youtube.com/watch?v=iogcY_4xGjo">
                          https://www.youtube.com/watch?v=iogcY_4xGjo
                        </a>
                      </p>
                      <Link to={"content_details"}>
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
                        >
                          View details about the content &nbsp;&nbsp; &gt;&gt;
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      {/* <div className="mobile-view text-md">
          <h2 className="sponsor-mobile-text">My Events</h2>
          <div className="container mb-4">
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
                      <h4 className="font-weight-bold mb-0">{data.title}</h4>
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
            </div>
          </div>
        </div> */}
    </>
  );
};

export default ContentCard;
