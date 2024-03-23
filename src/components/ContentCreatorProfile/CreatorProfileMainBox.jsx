import React, { useState } from "react";
import profilebg from "../../assets/img/profileBG.jpg";
import noProfilepic from "../../assets/img/emptyprofile2.jpg";
import short from "../../assets/img/creator_video/Introducing YouTube Shorts.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecommendationSection from "./Recommendation";
const CreatorProfileMainBox = (data) => {
  const [expanded, setExpanded] = useState(null);
  console.log("Profile data by prop ", data?.data?.recommendation);

  const RecommendationData = data?.data?.recommendation;

  const handleClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       dots: true,
    //       infinite: true,
    //       speed: 500,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
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
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="desktop-view">
        <div className="container p-0" style={{ maxWidth: "90%" }}>
          <div className="row py-5">
            <div className="col-5">
              <div className="slick-container">
                <Slider {...settings}>
                  {[1, 2].map(() => (
                    <div
                      className="bg-white shadow overflow-hidden"
                      style={{ borderRadius: "15px" }}
                    >
                      <div
                        className="p-3 cover"
                        // style={{
                        //   backgroundImage: `url(${profilebg})`,
                        // }}
                      >
                        <div className="media profile-head">
                          <div className="profile">
                            <img
                              src={noProfilepic}
                              alt="..."
                              width="180"
                              className="img-thumbnail"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="box p-3">
                        <div className="row">
                          <div className="col">
                            <div className="text-center media-body">
                              <h3 className="font-weight-bolder mt-0">
                                Mark Walberg
                              </h3>
                              {/* <h4>New York</h4> */}
                              <p className="mb-2">
                                Entertainment, Comedy, Stand Up, Health Care
                                Enthusiast
                              </p>
                              <div
                                className="box"
                                style={{
                                  backgroundColor: "#f2f2f2",
                                  borderRadius: "10px",
                                  padding: "3% 0%",
                                  margin: "4% 0",
                                }}
                              >
                                <div className="row">
                                  <div className="col-4">
                                    <h6 className="font-weight-bold">
                                      Followers
                                    </h6>
                                    <p>150M</p>
                                  </div>
                                  <div className="col-4">
                                    <h6 className="font-weight-bold">
                                      Following
                                    </h6>
                                    <p>500</p>
                                  </div>
                                  <div className="col-4">
                                    <h6 className="font-weight-bold">Views</h6>
                                    <p>100k</p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="box d-flex justify-content-between"
                                style={{ width: "100%" }}
                              >
                                <button className="btn btn-primary rounded-pill">
                                  Sponsor
                                </button>
                                <button className="btn btn-outline-primary rounded-pill">
                                  Check Out Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="box">
                    <video
                      src={short}
                      autoPlay
                      muted
                      loop
                      style={{ width: "100%", maxHeight: "79svh" }}
                    ></video>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-7">
              <div
                className="container"
                style={{
                  width: "100%",
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
                  style={{
                    width: "100%",
                    // flexWrap: "wrap",
                    padding: "0% 4%",
                  }}
                >
                  {["youtube", "instagram", "twitter", "facebook"].map(
                    (platform, index) =>
                      data?.data?.[platform] &&
                      data?.data?.[platform].length > 0 && (
                        <div
                          key={index}
                          className={`col ${
                            expanded === index ? "expanded" : ""
                          }`}
                          style={{
                            // padding: "5%",
                            marginBottom: "10px",
                          }}
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
                            {expanded === index && platform != "twitter" && (
                              <ul
                                style={{
                                  listStyleType: "none",
                                  padding: 0,
                                }}
                              >
                                {" "}
                                {/* Removed bullets and added padding */}
                                <li>
                                  <span style={{ fontWeight: "bold" }}>
                                    {platform === "youtube"
                                      ? "Subscribers"
                                      : "Followers"}
                                    :
                                  </span>{" "}
                                  {platform === "youtube"
                                    ? data.data?.[platform][0]?.subscribers
                                    : data.data?.[platform][0]?.followers}
                                </li>
                                <li>
                                  <span style={{ fontWeight: "bold" }}>
                                    Per Video Reach:
                                  </span>{" "}
                                  {data.data?.[platform][0]?.per_video_reach}
                                </li>
                                <li>
                                  <span style={{ fontWeight: "bold" }}>
                                    Category{" "}
                                    {/* {data.data[platform].postType}: */}
                                  </span>{" "}
                                  {/* {
                                            data.data?.[platform][0]
                                              ?.video_type
                                          } */}
                                  {platform === "youtube"
                                    ? data.data?.[platform][0]?.video_type
                                    : data.data?.[platform][0]?.post_type}
                                </li>
                              </ul>
                            )}
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
              <RecommendationSection recommendation={RecommendationData} />
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-view">
        <div className="container p-0" style={{ maxWidth: "90%" }}>
          <div className="row py-5">
            <div className="col-12 mx-auto p-0">
              <div className="slick-container" style={{ maxHeight: "71svh" }}>
                <Slider {...settings}>
                  {[1, 2].map(() => (
                    <div
                      className="bg-white shadow overflow-hidden"
                      style={{ borderRadius: "15px" }}
                    >
                      <div
                        className="p-3 cover"
                        // style={{
                        //   backgroundImage: `url(${profilebg})`,
                        // }}
                      >
                        <div className="media profile-head">
                          <div className="profile">
                            <img
                              src={noProfilepic}
                              alt="..."
                              width="180"
                              className="img-thumbnail"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="box p-3">
                        <div className="row">
                          <div className="col">
                            <div className="text-center media-body">
                              <h3 className="font-weight-bolder mt-0">
                                Mark Walberg
                              </h3>
                              {/* <h4>New York</h4> */}
                              <p className="mb-2">
                                Entertainment, Comedy, Stand Up, Health Care
                                Enthusiast
                              </p>
                              <div
                                className="box"
                                style={{
                                  backgroundColor: "#f2f2f2",
                                  borderRadius: "10px",
                                  padding: "3% 0%",
                                  margin: "4% 0",
                                }}
                              >
                                <div className="row">
                                  <div className="col-4">
                                    <h6 className="font-weight-bold">
                                      Followers
                                    </h6>
                                    <p>150M</p>
                                  </div>
                                  <div className="col-4">
                                    <h6 className="font-weight-bold">
                                      Following
                                    </h6>
                                    <p>500</p>
                                  </div>
                                  <div className="col-4">
                                    <h6 className="font-weight-bold">Views</h6>
                                    <p>100k</p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="box d-flex justify-content-between"
                                style={{ width: "100%" }}
                              >
                                <button className="btn btn-primary rounded-pill">
                                  Sponsor
                                </button>
                                <button className="btn btn-outline-primary rounded-pill">
                                  Check Out Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="box">
                    <video
                      src={short}
                      autoPlay
                      muted
                      loop
                      style={{ width: "100%", maxHeight: "71svh" }}
                    ></video>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorProfileMainBox;
