import React, { useEffect, useState } from "react";
import item from "../../assets/img/card/mobile-cards.jpg";
import backgroundimg from "../../assets/img/circle-bg.png";
import { Carousel, ProgressBar } from "react-bootstrap";
import "./Creator.css";
import RecommendationSection from "./Recommendation";
import CreatorPlatform from "./CreatorPlatform";
import Records from "./Records";
import CreatorUpcomingContent from "./CreatorUpcomingContent";
import { useLocation } from "react-router-dom";
import { fetchCreatorbyId } from "../../redux/actions/creatorAction";
import { useDispatch, useSelector } from "react-redux";
import ContentCard from "../../pages/LandingPage/Desktop_Sponsor_CC/ContentCard";
import profilebg from "../../assets/img/profileBG.jpg";
import noProfilepic from "../../assets/img/emptyprofile2.jpg";
import CreatorProfileMainBox from "./CreatorProfileMainBox";
import tag_ads_new from "../../assets/img/sponsoring_items/tag_ads_new.jpeg";
import tag_ads_img from "../../assets/img/sponsoring_items/#tag_ads.jpg";
import reels_sponsored_img from "../../assets/img/sponsoring_items/reel_sponsored.jpg";
import sponsored_by_img from "../../assets/img/sponsoring_items/sponsored_by.png";
import UpcomingContent from "./UpcomingContent";
import SuccessToast from "../Toast/Success";
// import Test from "./test";
const ContentCreatorProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const location = useLocation();
  const dispatch = useDispatch();
  const contentData = location.state?.creatorData || null;
  console.log("Creator Data ", contentData);
  const creator_id = contentData?.user_id?.id;
  const creatorById = useSelector((state) => state.creator);
  useEffect(() => {
    dispatch(fetchCreatorbyId(creator_id));
  }, []);
  console.log("creator by id ", creatorById.creatorById?.upcoming_content);
  const ContentData = creatorById.creatorById;
  const profileData = creatorById.creatorById?.profile_details;
  const upcoming_content = creatorById.creatorById?.upcoming_content;
  console.log("Profile Data", profileData);
  console.log("Creator Data", ContentData);
  const [expanded, setExpanded] = useState(null);
  const tag_ads = creatorById.creatorById?.sponsoring_items?.tags;
  const sponsored_by = creatorById.creatorById?.sponsoring_items?.sponsored_by;
  const reel_sponsored =
    creatorById.creatorById?.sponsoring_items?.reel_sponsored;

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

  const RecommendationData = [
    { id: 1, icon: "shop", title: "Lorem Ipsum", link: "#" },
    { id: 2, icon: "bar-chart-line", title: "Dolor Sitema", link: "#" },
    { id: 3, icon: "calendar-check", title: "Sed perspiciatis", link: "#" },
    { id: 4, icon: "brush", title: "Magni Dolores", link: "#" },
    { id: 5, icon: "database", title: "Nemo Enim", link: "#" },
    { id: 6, icon: "tag", title: "Eiusmod Tempor", link: "#" },
    { id: 7, icon: "files", title: "Midela Teren", link: "#" },
    { id: 8, icon: "tag", title: "Pira Neve", link: "#" },
    { id: 9, icon: "shop", title: "Dirada Pack", link: "#" },
    { id: 10, icon: "disc", title: "Moton Ideal", link: "#" },
    { id: 11, icon: "wifi", title: "Verdo Park", link: "#" },
    { id: 12, icon: "fingerprint", title: "Flavor Nivelanda", link: "#" },
    // Add more feature objects as needed
  ];

  const RcommendationData =
    creatorById.creatorById?.profile_details?.recommendation;
  console.log("Recommendation Data ", RcommendationData);

  const handleScroll = () => {
    // Scroll logic (similar to previous examples)
    const upcomingContentElement = document.querySelector(".UpcomingContent");
    if (upcomingContentElement) {
      upcomingContentElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("UpcomingContent element not found");
    }
  };

  return (
    <>
      <div
        className="bg-sponsor"
        style={{
          height: "auto",
          paddingBottom: "1%",
          backgroundImage: `url(${backgroundimg})`,
        }}
      >
        {/* DESKTOP VIEW  */}
        <div
          className="container payments-desktop desktop-view"
          style={{ maxWidth: "100%" }}
        >
          <CreatorProfileMainBox data={profileData} />
          <div className="pay-box my-md-0">
            {/* <div className="container">
              <div class="line-text">Recommendation According to Stats</div>
            </div>
            <RecommendationSection recommendation={RcommendationData} /> */}
            <div className="container">
              <div class="line-text">Creator Platform</div>
            </div>
            <CreatorPlatform data={profileData} />
            <div className="container">
              <div class="line-text">Live & Past Records</div>
            </div>
            {/* <Test /> */}
            <Records data={profileData} />
            <div className="container">
              <div class="line-text">Creator Upcoming Content</div>
            </div>
            <UpcomingContent
              // line={"Sponsor Content"}
              cardData={upcoming_content}
            />
            <div className="container">
              <div class="line-text">Available Sponsoring Items</div>
            </div>
            {tag_ads && (
              <CreatorUpcomingContent
                type={"#ads"}
                data={tag_ads}
                typeimg={tag_ads_new}
              />
            )}
            {reel_sponsored && (
              <CreatorUpcomingContent
                type={"reels sponsored"}
                data={reel_sponsored}
                typeimg={reels_sponsored_img}
              />
            )}
            {sponsored_by_img && (
              <CreatorUpcomingContent
                type={"sponsored by"}
                typeimg={sponsored_by_img}
                data={sponsored_by}
              />
            )}
          </div>
        </div>
        {/* DESKTOP VIEW END  */}

        {/* MOBILE VIEW */}
        <div className="container mobile-view">
          <CreatorProfileMainBox data={profileData} />
          <div
            className="container bg-white mt-5"
            style={{
              padding: "2%",
              borderRadius: "15px",
            }}
          >
            <h3 className="text-center">Stats</h3>
            <div className="row row-cols-2">
              {["youtube", "instagram", "twitter", "facebook"].map(
                (platform, index) =>
                  profileData?.[platform] &&
                  profileData?.[platform].length > 0 && (
                    <div
                      key={index}
                      className={`col ${expanded === index ? "expanded" : ""}`}
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
                            justifyContent: "center",
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
                                ? profileData?.[platform][0]?.subscribers
                                : profileData?.[platform][0]?.followers}
                            </li>
                            <li>
                              <span style={{ fontWeight: "bold" }}>
                                Per Video Reach:
                              </span>{" "}
                              {profileData?.[platform][0]?.per_video_reach}
                            </li>
                            <li>
                              <span style={{ fontWeight: "bold" }}>
                                Category {/* {data.data[platform].postType}: */}
                              </span>{" "}
                              {/* {
                                            data.[platform][0]
                                              ?.video_type
                                          } */}
                              {platform === "youtube"
                                ? profileData?.[platform][0]?.video_type
                                : profileData?.[platform][0]?.post_type}
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="box my-2">
            <h2 className="sponsor-mobile-text">
              Recommendations by the Creator
            </h2>
            <RecommendationSection recommendation={RcommendationData} />
          </div>
          <div className="box">
            <h2 className="sponsor-mobile-text">Platforms</h2>
            <CreatorPlatform data={profileData} />
          </div>
          <div className="box">
            <h2 className="sponsor-mobile-text">Live & Past Activity</h2>
            <Records data={profileData} />
          </div>
          <div className="box">
            <h2 className="sponsor-mobile-text">Creator Upcoming Content</h2>
            <UpcomingContent
              // line={"Sponsor Content"}
              cardData={upcoming_content}
            />
          </div>
          <div className="box">
            <h2 className="sponsor-mobile-text">Available Sponsoring Items</h2>
            {tag_ads && (
              <CreatorUpcomingContent
                type={"#ads"}
                data={tag_ads}
                typeimg={tag_ads_new}
              />
            )}
            {reel_sponsored && (
              <CreatorUpcomingContent
                type={"reels sponsored"}
                data={reel_sponsored}
                typeimg={reels_sponsored_img}
              />
            )}
            {sponsored_by_img && (
              <CreatorUpcomingContent
                type={"sponsored by"}
                typeimg={sponsored_by_img}
                data={sponsored_by}
              />
            )}
          </div>
        </div>
        {/* MOBILE VIEW END */}
      </div>
    </>
  );
};

export default ContentCreatorProfile;
