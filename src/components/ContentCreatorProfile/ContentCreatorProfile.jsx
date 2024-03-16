import React, { useEffect } from "react";
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
// import Test from "./test";
const ContentCreatorProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const location = useLocation();
  const dispatch = useDispatch();
  const contentData = location.state?.creatorData || null;
  console.log("Creator Data ", contentData);
  const creator_id = contentData?.user_id?.id
  const creatorById = useSelector((state) => state.creator);
  useEffect(() => {
    dispatch(fetchCreatorbyId(creator_id));
  }, []);
  console.log("creator by id ", creatorById.creatorById?.upcoming_content);
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

  const RecommendationData = [
    { icon: "shop", title: "Lorem Ipsum", link: "#" },
    { icon: "bar-chart-line", title: "Dolor Sitema", link: "#" },
    { icon: "calendar-check", title: "Sed perspiciatis", link: "#" },
    { icon: "brush", title: "Magni Dolores", link: "#" },
    { icon: "database", title: "Nemo Enim", link: "#" },
    { icon: "tag", title: "Eiusmod Tempor", link: "#" },
    { icon: "files", title: "Midela Teren", link: "#" },
    { icon: "tag", title: "Pira Neve", link: "#" },
    { icon: "shop", title: "Dirada Pack", link: "#" },
    { icon: "disc", title: "Moton Ideal", link: "#" },
    { icon: "wifi", title: "Verdo Park", link: "#" },
    { icon: "fingerprint", title: "Flavor Nivelanda", link: "#" },
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
        <div className="container payments-desktop desktop-view">
          <div className="pay-box">
            <div className="row row-cols-2">
              <div className="col">
                <div
                  className="post-thumb mb-3"
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                    padding: "3%",
                  }}
                >
                  <Carousel controls={false}>
                    {/* {[
                    cardData.thumbnail1,
                    cardData.thumbnail2,
                    cardData.thumbnail3,
                  ].map((item, index) => ( */}
                    <Carousel.Item>
                      <img
                        //   key={index}
                        src={item}
                        alt=""
                        style={{
                          width: "100%",
                          height: "300px",
                          borderRadius: "10px",
                        }}
                      />
                    </Carousel.Item>
                    {/* ))} */}
                  </Carousel>
                </div>
              </div>
              <div className="col">
                <h2 className="mb-0 mt-3 font-weight-bolder d-flex justify-content-between">
                  Mr. Beast
                  {/* <img src={heart} alt="" style={{ width: "7%" }} /> */}
                </h2>
                <div
                  className="container bg-white"
                  style={{
                    marginTop: "5%",
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
          <div
            className="post-thumb mt-4"
            style={{
              borderRadius: "15px",
              boxShadow: "0px 2px 10px -2px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Carousel controls={false}>
              {/* {[
              cardData.thumbnail1,
              cardData.thumbnail2,
              cardData.thumbnail3,
            ].map((item, index) => ( */}
              <Carousel.Item>
                <img
                  //   key={index}
                  src={item}
                  alt=""
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
              {/* ))} */}
            </Carousel>
          </div>
          <h2 className="sponsor-mobile-text">Mr. Beast</h2>
          <div
            className="container bg-white"
            style={{
              marginTop: "5%",
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
