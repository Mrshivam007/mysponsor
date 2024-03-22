import React, { useState } from "react";
import profilebg from "../../assets/img/profileBG.jpg";
import noProfilepic from "../../assets/img/emptyprofile2.jpg";
import { ProgressBar } from "react-bootstrap";
const CreatorProfileMainBox = (data) => {
  const [expanded, setExpanded] = useState(null);
  console.log("Profile data by prop ", data?.data);

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
  const scrollToLocation = () => {
    // Scroll to a specific position within the window
    window.scrollTo({
      top: 1800,
      behavior: 'smooth'
    });
  };
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
                    backgroundImage: `url(${data.data?.cover_page ? data.data?.cover_page : profilebg
                      })`,
                    height: "34vh",
                  }}
                >
                  <div className="media align-items-end profile-head">
                    <div className="profile mr-3">
                      <img
                        src={
                          data.data?.profile_pic
                            ? data.data?.profile_pic
                            : noProfilepic
                        }
                        alt="..."
                        width="130"
                        className="mb-2 img-thumbnail"
                        style={{ height: "30vh" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 mt-5">
                  <div className="row row-cols-2">
                    <div className="col">
                      <div className="media-body">
                        <h3 className="font-weight-bolder mt-0">
                          {data.data?.user_id?.first_name}{" "}
                          {data.data?.user_id?.last_name}
                        </h3>
                        <h4>{data.data?.youtube[0]?.location}</h4>
                        <p className="mb-2">
                          {data.data?.recommendation &&
                            data.data?.recommendation
                              .map((item) => Object.keys(item)[0])
                              .join(", ")}
                        </p>
                        <div
                          className="box d-flex justify-content-between"
                          style={{ width: "40%" }}
                        >
                          <button className="btn btn-primary rounded-pill" onClick={scrollToLocation}>
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
                          display: "flex", // Added flexbox for layout
                          flexDirection: "column", // Items stacked vertically
                          alignItems: "center", // Center items horizontally
                        }}
                      >
                        <h3 className="text-center">Stats</h3>
                        <div
                          className="row row-cols-2"
                          style={{ flexWrap: "wrap", padding: "0% 4%" }}
                        >
                          {["youtube", "instagram", "twitter", "facebook"].map(
                            (platform, index) => (
                              <div
                                key={index}
                                className={`col ${expanded === index ? "expanded" : ""
                                  }`}
                                style={{ padding: "5%", marginBottom: "10px" }}
                              >
                                <div className="content">
                                  <h5
                                    onClick={() => handleClick(index)}
                                    style={{
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <i // Font Awesome icon
                                      className={`fab fa-${platform}`}
                                      style={{
                                        marginRight: "10px",
                                        fontSize: "1.2rem",
                                      }}
                                    ></i>
                                    {platform}
                                  </h5>
                                  {expanded === index &&
                                    platform !=
                                    "twitter" && (
                                      <ul
                                        style={{
                                          listStyleType: "none",
                                          padding: 0,
                                        }}
                                      >
                                        {" "}
                                        {/* Removed bullets and added padding */}
                                        <li>
                                          <span
                                            style={{ fontWeight: "bold" }}
                                          >
                                            {platform === "youtube"
                                              ? "Subscribers"
                                              : "Followers"}
                                            :
                                          </span>{" "}
                                          {platform === "youtube"
                                            ? data.data?.[platform][0]
                                              ?.subscribers
                                            : data.data?.[platform][0]
                                              ?.followers}
                                        </li>
                                        <li>
                                          <span
                                            style={{ fontWeight: "bold" }}
                                          >
                                            Per Video React:
                                          </span>{" "}
                                          {
                                            data.data?.[platform][0]
                                              ?.per_video_reach
                                          }
                                        </li>
                                        <li>
                                          <span
                                            style={{ fontWeight: "bold" }}
                                          >
                                            Category{" "}
                                            {/* {data.data[platform].postType}: */}
                                          </span>{" "}
                                          {/* {
                                            data.data?.[platform][0]
                                              ?.video_type
                                          } */}
                                           {platform === "youtube"
                                            ? data.data?.[platform][0]
                                              ?.video_type
                                            : data.data?.[platform][0]
                                              ?.post_type}
                                        </li>
                                      </ul>
                                    )}
                                </div>
                              </div>
                            )
                          )}
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
