import React, { useState } from "react";
import profilebg from "../../assets/img/profileBG.jpg";
import noProfilepic from "../../assets/img/emptyprofile2.jpg";
import short from "../../assets/img/creator_video/Introducing YouTube Shorts.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecommendationSection from "./Recommendation";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./slide.css"

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const CreatorProfileMainBox = (data) => {
  const [expanded, setExpanded] = useState(null);
  console.log("Profile data by prop ", data?.data);

  const RecommendationData = data?.data?.recommendation;

  const UserData = data?.data?.user_id;
  const ProfileData = data?.data;

  const handleClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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

  const getNumberOfSocialMediaPlatforms = () => {
    let count = 0;
    if (ProfileData?.youtube?.length > 0) count++;
    if (ProfileData?.instagram?.length > 0) count++;
    if (ProfileData?.facebook?.length > 0) count++;
    return count;
  };

  // Determine the column class based on the number of available social media platforms
  const getColumnClass = () => {
    const count = getNumberOfSocialMediaPlatforms();
    switch (count) {
      case 1:
        return "col-12";
      case 2:
        return "col-6";
      default:
        return "col-6";
    }
  };

  return (
    <>
      <div className="desktop-view">
        <div className="container p-0" style={{ maxWidth: "90%" }}>
          <div className="row py-5">
            <div className="col-5">
              <div className="slick-container">
                {/* <Slider {...settings}> */}
                <Swiper
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={'auto'}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination]}
                  className="mySwiper"
                  style={{height: '88vh'}}
                >
                          <SwiperSlide>

                  <div
                    className="bg-white overflow-hidden slider-height"
                    style={{ borderRadius: "15px" }}
                  >
                    <div
                      className="p-3 cover"
                    // style={{
                    //   backgroundImage: `url(${profilebg})`,
                    // }}
                    >
                      <div className="media profile-head">
                        {/* {ProfileData?.channel_logo ? (
                          <div className="profile">
                            <img
                              src={ProfileData?.channel_logo}
                              alt="..."
                              width="180"
                              height="160"
                              className="img-thumbnail"
                            />
                          </div>
                        ) : ( */}
                          <div className="profile">
                            <img
                              src={noProfilepic}
                              alt="..."
                              width="180"
                              className="img-thumbnail"
                            />
                          </div>
                        {/* )} */}
                      </div>
                    </div>
                    <div className="box p-3">
                      <div className="row">
                        <div className="col">
                          <div className="text-center media-body">
                            <h3 className="font-weight-bolder mt-0">
                              {UserData?.first_name} {UserData?.last_name}&nbsp;
                              <i
                                class="bi bi-patch-check-fill"
                                style={{ color: "#007bff" }}
                              ></i>
                            </h3>
                            <h4 className="font-weight-bolder mt-0">
                              {ProfileData?.location}
                            </h4>
                            {/* <h4>New York</h4> */}
                            {/* <p className="mb-2">
                              Entertainment, Comedy, Stand Up, Health Care
                              Enthusiast
                            </p> */}
                            <div
                              className="box"
                              style={{
                                backgroundColor: "#f2f2f2",
                                borderRadius: "10px",
                                padding: "3% 0%",
                                margin: "4% 0",
                              }}
                            >
                              <h5>Socail Media</h5>
                              <section
                                id="features"
                                className="features"
                                style={{ padding: "0%" }}
                              >
                                <div className="container">
                                  <div className="row">
                                    {ProfileData?.youtube.length > 0 && (
                                      <div
                                        className={
                                          getColumnClass() + " col-md-6"
                                        }
                                      >
                                        <div className="card">
                                          <div
                                            className="card-body text-center"
                                            style={{ padding: "4%" }}
                                          >
                                            <i
                                              className="bi bi-youtube"
                                              style={{
                                                fontSize: "2rem",
                                                color: "#ff0000",
                                              }}
                                            ></i>
                                            <p style={{ fontSize: "14px" }}>
                                              <a href="#">YouTube</a>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    {ProfileData?.instagram.length > 0 && (
                                      <div
                                        className={
                                          getColumnClass() + " col-md-6"
                                        }
                                      >
                                        <div
                                          className="card"
                                          style={{
                                            backgroundImage:
                                              "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
                                            color: "#fff",
                                          }}
                                        >
                                          <div
                                            className="card-body text-center"
                                            style={{ padding: "4%" }}
                                          >
                                            <i
                                              className="bi bi-instagram"
                                              style={{ fontSize: "2rem" }}
                                            ></i>
                                            <p style={{ fontSize: "14px" }}>
                                              <a
                                                href="#"
                                                style={{ color: "#fff" }}
                                              >
                                                Instagram
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    {ProfileData?.facebook.length > 0 && (
                                      <div
                                        className={
                                          getColumnClass() + " col-md-6"
                                        }
                                      >
                                        <div
                                          className="card"
                                          style={{
                                            backgroundColor: "#1877F2",
                                            color: "#fff",
                                          }}
                                        >
                                          <div
                                            className="card-body text-center"
                                            style={{ padding: "4%" }}
                                          >
                                            <i
                                              className="bi bi-facebook"
                                              style={{ fontSize: "2rem" }}
                                            ></i>
                                            <p style={{ fontSize: "14px" }}>
                                              <a
                                                href="#"
                                                style={{ color: "#fff" }}
                                              >
                                                Facebook
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  {ProfileData?.instagram?.length > 0 ? (
                    <div
                      className="bg-white overflow-hidden slider-height"
                      style={{ borderRadius: "15px", height: "80vh" }}
                    >
                      <div
                        className="p-3 cover"
                      // style={{
                      //   backgroundImage: `url(${profilebg})`,
                      // }}
                      >
                        <div className="media profile-head">
                          {ProfileData?.insta_profile_pic ? (
                            <div className="profile">
                              <img
                                src={ProfileData?.insta_profile_pic}
                                alt="..."
                                width="180"
                                height="160"
                                className="img-thumbnail"
                              />
                            </div>
                          ) : (
                            <div className="profile">
                              <img
                                src={noProfilepic}
                                alt="..."
                                width="180"
                                className="img-thumbnail"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="box p-3">
                        <div className="row">
                          <div className="col">
                            <div className="text-center media-body">
                              <h3 className="font-weight-bolder mt-0">
                                {/* {UserData?.first_name} {" "} {UserData?.last_name} */}
                                {/* Shivam Soni */}
                                {ProfileData?.instagram[0]?.channel_name}
                              </h3>
                              {/* <h4>New York</h4> */}
                              <p className="mb-2">
                                {ProfileData?.instagram[0]?.description}
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
                                    <p>
                                      {ProfileData?.instagram[0]?.followers}
                                    </p>
                                  </div>
                                  <div className="col-4">
                                    <h6 className="font-weight-bold">
                                      Following
                                    </h6>
                                    <p>
                                      {ProfileData?.instagram[0]?.following}
                                    </p>
                                  </div>
                                  <div className="col-4">
                                    <h6 className="font-weight-bold">Posts</h6>
                                    <p>{ProfileData?.instagram[0]?.posts}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="box slider-height">
                    {ProfileData?.youtube_shorts ? (
                      <video
                        src={ProfileData.youtube_shorts}
                        autoPlay
                        muted
                        loop
                        style={{ width: "100%", maxHeight: "79vh" }}
                      ></video>
                    ) : (
                      <video
                        src={short}
                        autoPlay
                        muted
                        loop
                        style={{ width: "100%", maxHeight: "79vh" }}
                      ></video>
                    )}
                  </div>
                  </SwiperSlide>
                  </Swiper>
                  {/* </Slider> */}
              </div>
            </div>
            <div className="col-7">
              <div className="container mt-4">
                <div class="line-text">Creator Stats</div>
              </div>
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
                          className={`col ${expanded === index ? "expanded" : ""
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
                                placeContent: "center",
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
                                  padding: 0,
                                  paddingLeft: "20px", // Adding left padding for bullet points
                                }}
                              >
                                <li style={{ listStyleType: "disc" }}>
                                  {" "}
                                  {/* Use disc as bullet points */}
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
                                <li style={{ listStyleType: "disc" }}>
                                  {" "}
                                  {/* Use disc as bullet points */}
                                  <span style={{ fontWeight: "bold" }}>
                                    Per Video Reach:
                                  </span>{" "}
                                  {data.data?.[platform][0]?.per_video_reach}
                                </li>
                                <li style={{ listStyleType: "disc" }}>
                                  {" "}
                                  {/* Use disc as bullet points */}
                                  <span style={{ fontWeight: "bold" }}>
                                    Category:
                                  </span>{" "}
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
              <div className="container mt-4">
                <div class="line-text">Recommendation</div>
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
                  <div
                    className="bg-white overflow-hidden slider-height"
                    style={{ borderRadius: "15px" }}
                  >
                    <div
                      className="p-3 cover"
                    // style={{
                    //   backgroundImage: `url(${profilebg})`,
                    // }}
                    >
                      <div className="media profile-head">
                        {ProfileData?.channel_logo ? (
                          <div className="profile">
                            <img
                              src={ProfileData?.channel_logo}
                              alt="..."
                              width="180"
                              height="160"
                              className="img-thumbnail"
                            />
                          </div>
                        ) : (
                          <div className="profile">
                            <img
                              src={noProfilepic}
                              alt="..."
                              width="180"
                              className="img-thumbnail"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="box p-3">
                      <div className="row">
                        <div className="col">
                          <div className="text-center media-body">
                            <h3 className="font-weight-bolder mt-0">
                              {UserData?.first_name} {UserData?.last_name}&nbsp;
                              <i
                                class="bi bi-patch-check-fill"
                                style={{ color: "#007bff" }}
                              ></i>
                            </h3>
                            <h className="font-weight-bolder mt-0">
                              {ProfileData?.location}
                            </h>
                            {/* <h4>New York</h4> */}
                            {/* <p className="mb-2">
                              Entertainment, Comedy, Stand Up, Health Care
                              Enthusiast
                            </p> */}
                            <div
                              className="box"
                              style={{
                                backgroundColor: "#f2f2f2",
                                borderRadius: "10px",
                                padding: "3% 0%",
                                margin: "4% 0",
                              }}
                            >
                              <h5>Socail Media</h5>
                              <section
                                id="features"
                                className="features"
                                style={{
                                  padding: "0%",
                                  backgroundColor: "unset",
                                }}
                              >
                                <div className="container">
                                  <div className="row">
                                    {ProfileData?.youtube.length > 0 && (
                                      <div
                                        className={
                                          getColumnClass() + " col-md-6"
                                        }
                                      >
                                        <div className="card">
                                          <div
                                            className="card-body text-center"
                                            style={{ padding: "4%" }}
                                          >
                                            <i
                                              className="bi bi-youtube"
                                              style={{
                                                fontSize: "2rem",
                                                color: "#ff0000",
                                              }}
                                            ></i>
                                            <p style={{ fontSize: "14px" }}>
                                              <a href="#">YouTube</a>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    {ProfileData?.instagram.length > 0 && (
                                      <div
                                        className={
                                          getColumnClass() + " col-md-6"
                                        }
                                      >
                                        <div
                                          className="card"
                                          style={{
                                            backgroundImage:
                                              "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
                                            color: "#fff",
                                          }}
                                        >
                                          <div
                                            className="card-body text-center"
                                            style={{ padding: "4%" }}
                                          >
                                            <i
                                              className="bi bi-instagram"
                                              style={{ fontSize: "2rem" }}
                                            ></i>
                                            <p style={{ fontSize: "14px" }}>
                                              <a
                                                href="#"
                                                style={{ color: "#fff" }}
                                              >
                                                Instagram
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    {ProfileData?.facebook.length > 0 && (
                                      <div
                                        className={
                                          getColumnClass() + " col-md-6"
                                        }
                                      >
                                        <div
                                          className="card"
                                          style={{
                                            backgroundColor: "#1877F2",
                                            color: "#fff",
                                          }}
                                        >
                                          <div
                                            className="card-body text-center"
                                            style={{ padding: "4%" }}
                                          >
                                            <i
                                              className="bi bi-facebook"
                                              style={{ fontSize: "2rem" }}
                                            ></i>
                                            <p style={{ fontSize: "14px" }}>
                                              <a
                                                href="#"
                                                style={{ color: "#fff" }}
                                              >
                                                Facebook
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {ProfileData?.instagram?.length > 0 ? (
                    <div
                      className="bg-white overflow-hidden slider-height"
                      style={{ borderRadius: "15px" }}
                    >
                      <div
                        className="p-3 cover"
                      // style={{
                      //   backgroundImage: `url(${profilebg})`,
                      // }}
                      >
                        <div className="media profile-head">
                          {ProfileData?.insta_profile_pic ? (
                            <div className="profile">
                              <img
                                src={ProfileData?.insta_profile_pic}
                                alt="..."
                                width="180"
                                height="160"
                                className="img-thumbnail"
                              />
                            </div>
                          ) : (
                            <div className="profile">
                              <img
                                src={noProfilepic}
                                alt="..."
                                width="180"
                                className="img-thumbnail"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="box p-3">
                        <div className="row">
                          <div className="col">
                            <div className="text-center media-body">
                              <h3 className="font-weight-bolder mt-0">
                                {/* {UserData?.first_name} {" "} {UserData?.last_name} */}
                                {/* Shivam Soni */}
                                {ProfileData?.instagram[0]?.channel_name}
                              </h3>
                              {/* <h4>New York</h4> */}
                              <p className="mb-2">
                                {ProfileData?.instagram[0]?.description}
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
                                    <p>
                                      {ProfileData?.instagram[0]?.followers}
                                    </p>
                                  </div>
                                  <div className="col-4">
                                    <h6 className="font-weight-bold">
                                      Following
                                    </h6>
                                    <p>
                                      {ProfileData?.instagram[0]?.following}
                                    </p>
                                  </div>
                                  <div className="col-4">
                                    <h6 className="font-weight-bold">Posts</h6>
                                    <p>{ProfileData?.instagram[0]?.posts}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div className="box slider-height">
                    {ProfileData?.youtube_shorts ? (
                      <video
                        src={ProfileData.youtube_shorts}
                        autoPlay
                        muted
                        loop
                        style={{ width: "100%", maxHeight: "79vh" }}
                      ></video>
                    ) : (
                      <video
                        src={short}
                        autoPlay
                        muted
                        loop
                        style={{ width: "100%", maxHeight: "79vh" }}
                      ></video>
                    )}
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
