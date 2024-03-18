import React from "react";
import profilebg from "../../assets/img/profileBG.jpg";
import noProfilepic from "../../assets/img/emptyprofile2.jpg";
import { ProgressBar } from "react-bootstrap";
const CreatorProfileMainBox = () => {
  const Stats = [
    {
      platform: "Youtube",
      progress: 40,
      variant: "danger",
      label: "40%",
    },
    {
      platform: "Instagram",
      progress: 60,
      variant: "primary",
      label: "60%",
    },
    {
      platform: "Twitter",
      progress: 75,
      variant: "info",
      label: "75%",
    },
    {
      platform: "Facebook",
      progress: 30,
      variant: "",
      label: "30%",
    },
  ];
  return (
    <>
      <div className="desktop-view">
        <div className="container p-0" style={{ maxWidth: "90%" }}>
          <div className="row py-5">
            <div className="col-12 mx-auto p-0">
              <div
                className="bg-white shadow overflow-hidden"
                style={{ borderRadius: "15px" }}
              >
                <div
                  className="px-4 pt-0 pb-4 cover"
                  style={{
                    backgroundImage: `url(${profilebg})`,
                  }}
                >
                  <div className="media align-items-end profile-head">
                    <div className="profile mr-3">
                      <img
                        src={noProfilepic}
                        alt="..."
                        width="130"
                        className="mb-2 img-thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 mt-5">
                  <div className="row row-cols-2">
                    <div className="col">
                      <div className="media-body">
                        <h3 className="font-weight-bolder mt-0">
                          Mark Walberg
                        </h3>
                        <h4>New York</h4>
                        <p className="mb-2">
                          Entertainment, Comedy, Stand Up, Health Care
                          Enthusiast
                        </p>
                        <div
                          className="box d-flex justify-content-between"
                          style={{ width: "40%" }}
                        >
                          <button className="btn btn-primary rounded-pill">
                            Sponsor
                          </button>
                          <button className="btn btn-outline-primary rounded-pill">
                            Content
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="container"
                        style={{
                          width: "80%",
                          backgroundColor: "#f2f2f2",
                          padding: "2%",
                          borderRadius: "15px",
                        }}
                      >
                        <h3 className="text-center">Stats</h3>
                        <div className="row row-cols-2">
                          {Stats.map((data) => (
                            <>
                              <div className="col" style={{ padding: "5%" }}>
                                <h5>{data.platform}</h5>
                                <ProgressBar
                                  variant={data.variant}
                                  animated
                                  now={data.progress}
                                  label={data.label}
                                />
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-view">
        <div className="container p-0" style={{ maxWidth: "90%" }}>
          <div className="row py-5">
            <div className="col-12 mx-auto p-0">
              <div
                className="bg-white shadow overflow-hidden"
                style={{ borderRadius: "15px" }}
              >
                <div
                  className="px-4 pt-0 pb-4 cover"
                  style={{
                    backgroundImage: `url(${profilebg})`,
                  }}
                >
                  <div className="media align-items-end profile-head">
                    <div className="profile mr-3">
                      <img
                        src={noProfilepic}
                        alt="..."
                        width="130"
                        className="mb-2 img-thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 mt-5">
                  <div className="row">
                    <div className="col">
                      <div className="media-body">
                        <h3 className="font-weight-bolder mt-0">
                          Mark Walberg
                        </h3>
                        <h4>New York</h4>
                        <p className="mb-2">
                          Entertainment, Comedy, Stand Up, Health Care
                          Enthusiast
                        </p>
                        <div
                          className="box d-flex justify-content-between"
                          style={{ width: "80%" }}
                        >
                          <button className="btn btn-primary rounded-pill">
                            Sponsor
                          </button>
                          <button className="btn btn-outline-primary rounded-pill">
                            Content
                          </button>
                        </div>
                      </div>
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

export default CreatorProfileMainBox;
