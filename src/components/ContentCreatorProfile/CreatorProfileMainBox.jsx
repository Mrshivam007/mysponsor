import React, { useState } from "react";
import profilebg from "../../assets/img/profileBG.jpg";
import noProfilepic from "../../assets/img/emptyprofile2.jpg";
import { ProgressBar } from "react-bootstrap";
const CreatorProfileMainBox = () => {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  const Stats = [
    {
      platform: "Youtube",
      progress: 40,
      variant: "danger",
      label: "40%",
      subscribers: 100000,
      followers: 5000,
      perVideo: "10k Views",
      postType: "Video",
      category: "Gaming",
    },
    {
      platform: "Instagram",
      progress: 60,
      variant: "primary",
      label: "60%",
      subscribers: 200000,
      followers: 8000,
      perVideo: "5k Likes",
      postType: "Image",
      category: "Lifestyle",
    },
    {
      platform: "Twitter",
      progress: 75,
      variant: "info",
      label: "75%",
      subscribers: 300000,
      followers: 12000,
      perVideo: "2k Retweets",
      postType: "Tweet",
      category: "News",
    },
    {
      platform: "Facebook",
      progress: 30,
      variant: "",
      label: "30%",
      subscribers: 50000,
      followers: 3000,
      perVideo: "2k Shares",
      postType: "Post",
      category: "Entertainment",
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
                          display: 'flex', // Added flexbox for layout
                          flexDirection: 'column', // Items stacked vertically
                          alignItems: 'center', // Center items horizontally
                        }}
                      >
                        <h3 className="text-center">Stats</h3>
                        <div className="row row-cols-2" style={{ flexWrap: 'wrap', padding: '0% 4%' }}>
                          {Stats.map((data, index) => (
                            <div
                              key={index}
                              className={`col ${expanded === index ? 'expanded' : ''}`}
                              style={{ padding: "5%", marginBottom: '10px' }}
                            >
                              <div className="content">
                                <h5
                                  onClick={() => handleClick(index)}
                                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                >
                                  <i // Font Awesome icon
                                    className={`fab fa-${data.platform.toLowerCase()}`}
                                    style={{ marginRight: '10px', fontSize: '1.2rem' }}
                                  ></i>
                                  {data.platform}
                                </h5>
                                {expanded === index && (
                                  <ul style={{ listStyleType: 'none', padding: 0 }}> {/* Removed bullets and added padding */}
                                    <li>
                                      <span style={{ fontWeight: 'bold' }}>Subscribers:</span> {data.subscribers}
                                    </li>
                                    <li>
                                      <span style={{ fontWeight: 'bold' }}>Followers:</span> {data.followers}
                                    </li>
                                    <li>
                                      <span style={{ fontWeight: 'bold' }}>Per {data.postType}:</span> {data.perVideo}
                                    </li>
                                    <li>
                                      <span style={{ fontWeight: 'bold' }}>Category:</span> {data.category}
                                    </li>
                                  </ul>
                                )}
                              </div>
                            </div>
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
