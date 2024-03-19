import React from "react";

const CreatorUpcomingContent = ({ type, typeimg }) => {
  return (
    <>
      <div className="desktop-view mt-4">
        <h2 className="sponsor-text text-left">{type}</h2>
        <div className="container">
          {/* {cardData &&
            cardData
              .slice()
              .reverse()
              .map((data) => {
                return ( */}
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
                      src={typeimg}
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
                        Content 01
                      </h3>
                      <h4>Youtube</h4>
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
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem tempore dolor vitae similique perferendis ullam
                        non amet eveniet consequatur ab.
                      </p>
                    </div>
                  </div>

                  <div className="col-4" style={{ padding: "2% 1% 2% 0" }}>
                    <div className="box">
                      <h4 className="font-weight-bold">
                        Available Sponsor Options:
                      </h4>
                      <div className="d-flex justify-content-around text-lg mt-3">
                        {/* {data.content_id.sponsoring_content_items
                          // .filter((item) => item.is_sponsored) // Filter only items where is_sponsored is true
                        .map((item, index) => ( */}

                        <span
                          // key={index}
                          className={"badge rounded-pill px-2 py-1 bg-success"}
                        >
                          {type}
                          <i className="bi bi-check2-circle"></i>
                        </span>

                        {/* ))} */}
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
                      // onClick={() => handleSponsorClick(data)}
                    >
                      Check Out Content Details &nbsp;&nbsp; &gt;&gt;
                    </button>
                    <div className="container d-flex text-white text-center px-0 mt-2">
                      <div
                        className="box myevents-box text-white"
                        style={{ width: "100%" }}
                      >
                        <h6
                          style={{
                            borderBottom: "1px solid rgba(255, 255, 255, 0.30)",
                            padding: "2%",
                          }}
                        >
                          {type} Price
                        </h6>
                        <h5>
                          ₹50,000
                          {/* Display the sum of prices */}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* );
              })} */}
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
        <h2 className="sponsor-mobile-text">{type}</h2>
        <div className="container mb-4 px-0">
          {/* {cardData &&
            cardData
              .slice()
              .reverse()
              .map((data) => {
                return ( */}
          <div className="row">
            <div className="col-12">
              <div className="card myevents-card">
                <div className="post-thumb">
                  <img
                    src={typeimg}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                  />
                  <div className="text-overlay">
                    <h4 className="font-weight-bold mb-0">Content 01</h4>
                    <h5>Youtube</h5>
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
                          {/* {data.content_id.sponsoring_content_items
                            // .filter((item) => item.is_sponsored) // Filter only items where is_sponsored is true
                            .map((item, index) => ( */}
                          <span
                            // key={index}
                            className={
                              "badge rounded-pill px-2 py-1 bg-success"
                            }
                          >
                            {type}
                            <i className="bi bi-check2-circle"></i>
                          </span>
                          {/* ))} */}
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
                            {type} Price
                          </p>
                          <p className="mb-1">₹50,000</p>
                        </div>
                      </div>
                      <button
                        className="btn py-1 px-2 font-weight-bold"
                        style={{
                          width: "100%",
                          marginBottom: "2%",
                          color: "#004EA9",
                          backgroundColor: "white",
                          border: "2px solid #004EA9",
                          borderRadius: "10px",
                        }}
                        // onClick={() => handleSponsorClick(data)}
                      >
                        Check Out Content Details &nbsp;&nbsp; &gt;&gt;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* );
              })} */}
        </div>
      </div>
    </>
  );
};

export default CreatorUpcomingContent;
