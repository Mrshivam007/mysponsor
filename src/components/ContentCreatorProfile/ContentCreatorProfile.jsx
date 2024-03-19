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
  console.log("Creator Data", ContentData);
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
          <CreatorProfileMainBox />
          <div className="pay-box my-md-0">
            <div className="container">
              <div class="line-text">Recommendation According to Stats</div>
            </div>
            <RecommendationSection recommendation={RecommendationData} />
            <div className="container">
              <div class="line-text">Creator Platform</div>
            </div>
            <CreatorPlatform />
            <div className="container">
              <div class="line-text">Live & Past Records</div>
            </div>
            {/* <Test /> */}
            <Records />
            <div className="container">
              <div class="line-text">Upcoming Contents from the Creator</div>
            </div>
            {/* <CreatorUpcomingContent /> */}
            <ContentCard
              // line={"Creator Upcoming Content"}
              cardData={creatorById.creatorById?.upcoming_content}
            />
          </div>
        </div>
        {/* DESKTOP VIEW END  */}

        {/* MOBILE VIEW */}
        <div className="container mobile-view">
          <CreatorProfileMainBox />
          <div
            className="container bg-white"
            style={{
              padding: "2%",
              borderRadius: "15px",
            }}
          >
            {/* <h3 className="text-center">Stats</h3> */}
            <div className="row row-cols-2">
              {Stats.map((data) => (
                <>
                  <div className="col" style={{ padding: "5%" }}>
                    <h5>
                    <i // Font Awesome icon
                      className={`fab fa-${data.platform.toLowerCase()}`}
                      style={{ marginRight: '10px', fontSize: '1.2rem' }}
                    ></i>
                    {data.platform}</h5>

                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="box my-2">
            <h2 className="sponsor-mobile-text">
              Recommendations by the Creator
            </h2>
            <RecommendationSection recommendation={RecommendationData} />
          </div>
          <div className="box">
            <h2 className="sponsor-mobile-text">Platforms</h2>
            <CreatorPlatform />
          </div>
          <div className="box">
            <h2 className="sponsor-mobile-text">Live & Past Activity</h2>
            <Records />
          </div>
          <div className="box">
            <h2 className="sponsor-mobile-text">
              Upcoming Contents by Creator
            </h2>
            <CreatorUpcomingContent />
          </div>
        </div>
        {/* MOBILE VIEW END */}
      </div>
    </>
  );
};

export default ContentCreatorProfile;
