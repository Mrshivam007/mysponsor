import React from "react";
import cardimg from "../../../assets/img/payment-img.jpg";
import apiurl from "../../../constant/config";
const SponsorpayCard = (data) => {
  console.log("Sponsor Pay", data);
  return (
    <>
      <div className="desktop-view mt-4">
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
                  <div className="col-6 col-md-4 col-lg-3 p-3">
                    <img
                      src={apiurl + data?.data?.thumbnail1}
                      alt=""
                      style={{
                        width: "100%",
                        height: "-webkit-fill-available",
                      }}
                    />
                  </div>
                  <div className="col-6 col-md-8 col-lg-9 mt-2">
                    <div className="box">
                      <h3 className="mb-0 mt-3 font-weight-bolder d-flex justify-content-between">
                        {data?.data?.title}
                      </h3>
                      <h4>{data?.data?.location}</h4>
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
                      <p>
                      {data?.data?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-view">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-3">
              <div className="card p-2" style={{ borderRadius: "10px" }}>
                <div
                  className="row g-0"
                  style={{ width: "auto", height: "100%" }}
                >
                  <div
                    className="col-5 cc-img-container d-flex"
                    style={{ maxWidth: "40%" }}
                  >
                    <img
                      src={cardimg}
                      className="img-fluid rounded-start cc-img m-0"
                      alt=""
                    />
                  </div>
                  <div className="col-7 d-flex align-items-center">
                    <div
                      className="card-body cc-card-body text-md"
                      style={{ paddingLeft: "10%" }}
                    >
                      <h5 className="card-title font-weight-bold d-inline text-xl">
                        Mr. Beast
                      </h5>
                      <br />
                      <span className="card-text">Platform: Youtube</span>
                      <br />
                      <span className="card-text">
                        <i className="bi bi-cash text-success"></i>
                        &nbsp;&nbsp; Video
                      </span>
                      <br />
                      <p className="card-text">
                        <i className="bi bi-people-fill text-danger"></i>
                        &nbsp;&nbsp; 100k
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorpayCard;
