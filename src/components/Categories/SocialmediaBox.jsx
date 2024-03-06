import "./categories.css";
import youtube from "../../assets/img/youtube.jpg";
import twitch from "../../assets/img/twitch.jpg";
import facebook from "../../assets/img/Facebook.png";
import instagram from "../../assets/img/instagram.jpg";
import snapchat from "../../assets/img/snapchat.jpg";
import tiktok from "../../assets/img/tiktok.jpg";
import { Link } from "react-router-dom";

const SocialmediaBox = (cardData) => {
  if (!cardData || !Array.isArray(cardData.cardData)) {
    return null;
  }

  const availablePlatforms = cardData.cardData.map(data => data.content_platform);
  const uniquePlatforms = [...new Set(availablePlatforms)]; // Filter out duplicates

  const numPlatforms = uniquePlatforms.length;

  let colWidth;
  if (numPlatforms === 1) {
    colWidth = "col-12"; // if only one platform, span the entire width
  } else if (numPlatforms === 2) {
    colWidth = "col-6"; // if two platforms, each spans half the width
  } else {
    colWidth = "col-4"; // if more than two platforms, each spans one-third of the width
  }

  return (
    <>
      <h1 className="category-text">Sponsor Different Platform</h1>

      <h2 className="cat-mobile-text">Sponsor Different Platform</h2>

      {/* Category cards for desktop */}
      {/* <div className="container socialmedia-desktop-container">
        <div className="box1">
          <div className="row socialmedia-row">
            {availablePlatforms.includes('Youtube') && (
              <div className="col-6 col-sm-4 socialmedia-card1">
                <div
                  className="card-service platform-container fadeInUp"
                  style={{ maxWidth: "100%", backgroundColor: "#FF6762" }}
                >
                  <Link to={"/youtube"}>
                    <div className="platform-img d-flex justify-content-center">
                      <img
                        src={youtube}
                        alt=""
                        style={{ width: "60%", height: "auto", margin: "8%" }}
                      />
                    </div>
                  </Link>
                </div>
                <h3 className=" text-center font-weight-bolder ">Youtube</h3>
              </div>
            )}
            {availablePlatforms.includes('tweet') && (

              <div className="col-6 col-sm-4 socialmedia-card1">
                <div
                  className="card-service platform-container fadeInUp"
                  style={{
                    maxWidth: "100%",
                    backgroundColor: "#5A3E85",
                  }}
                >
                  <div className="platform-img d-flex justify-content-center">
                    <img
                      src={twitch}
                      alt=""
                      style={{ width: "48%", height: "auto", margin: "8%" }}
                    />
                  </div>
                </div>
                <h3 className=" text-center font-weight-bolder ">Twitch</h3>
              </div>
            )}
            {availablePlatforms.includes('instagram') && (

              <div className="col-6 col-sm-4 socialmedia-card1">
                <div
                  className="card-service platform-container fadeInUp"
                  style={{
                    maxWidth: "100%",
                    background: "linear-gradient(112deg ,#3871C9 , #FF6942 )",
                  }}
                >
                  <Link to={"/instagram"}>
                    <div className="platform-img d-flex justify-content-center">
                      <img
                        src={instagram}
                        alt=""
                        style={{ width: "50%", height: "auto", margin: "8%" }}
                      />
                    </div>
                  </Link>
                </div>
                <h3 className=" text-center font-weight-bolder ">Instagram</h3>
              </div>
            )}
          </div>

          <div className="row socialmedia-row">
            {availablePlatforms.includes('tiktok') && (
              <div className="col-6 col-sm-4 socialmedia-card1">
                <div
                  className="card-service platform-container fadeInUp"
                  style={{
                    maxWidth: "100%",
                    backgroundColor: "#69C9D0",
                  }}
                >
                  <div className="platform-img d-flex justify-content-center">
                    <img
                      src={tiktok}
                      alt=""
                      style={{ width: "47%", height: "auto", margin: "8%" }}
                    />
                  </div>
                </div>
                <h3 className=" text-center font-weight-bolder ">TikTok</h3>
              </div>
            )}

            {availablePlatforms.includes('Facebook') && (

              <div className="col-6 col-sm-4 socialmedia-card1">
                <div
                  className="card-service platform-container fadeInUp"
                  style={{
                    maxWidth: "100%",
                    backgroundColor: "#3C5A99",
                  }}
                >
                  <Link to={"/facebook"}>
                    <div className="platform-img d-flex justify-content-center">
                      <img
                        src={facebook}
                        alt=""
                        style={{ width: "48%", height: "auto", margin: "8%" }}
                      />
                    </div>
                  </Link>
                </div>
                <h3 className=" text-center font-weight-bolder ">Facebook</h3>
              </div>
            )}
            {availablePlatforms.includes('Snapchat') && (

              <div className="col-6 col-sm-4 socialmedia-card1">
                <div
                  className="card-service platform-container fadeInUp"
                  style={{
                    maxWidth: "100%",
                    background: "#FFFC1E",
                  }}
                >
                  <div className="platform-img d-flex justify-content-center">
                    <img
                      src={snapchat}
                      alt=""
                      style={{ width: "50%", height: "auto", margin: "8%" }}
                    />
                  </div>
                </div>
                <h3 className=" text-center font-weight-bolder ">Snapchat</h3>
              </div>
            )}
          </div>
        </div>
      </div> */}

      <div className="container socialmedia-desktop-container">
        <div className="box1">
          <div className="row socialmedia-row">
            {uniquePlatforms.map((platform, index) => (
              <div key={index} className={`col-sm-4 socialmedia-card1 ${colWidth}`}>
                <Link to={getPlatformLink(platform)}>
                  <div
                    className="card-service platform-container fadeInUp"
                    style={{ maxWidth: "100%", backgroundColor: getBackgroundColor(platform) }}
                  >
                    <div className="platform-img d-flex justify-content-center">
                      <img
                        src={getPlatformImage(platform)}
                        alt=""
                        style={{ width: "100%", height: "30vh", margin: "8%" }}
                      />
                    </div>
                  </div>
                  <h3 className=" text-center font-weight-bolder ">{platform}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Category cards for mobile view*/}
      <div className="container socialmedia-mobile-container">
        <div className="box1">
          <div className="row socialmedia-row">
            {uniquePlatforms.map((platform, index) => (
              <div key={index} className={`col-6 col-sm-4 socialmedia-card1`}>
                <Link to={getPlatformLink(platform)}>
                  <div
                    className="card-service platform-container fadeInUp"
                    style={{ maxWidth: "100%", backgroundColor: getBackgroundColor(platform), borderRadius: "20px" }}
                  >
                    <div className="platform-img d-flex justify-content-center">
                      <img
                        src={getPlatformImage(platform)}
                        alt=""
                        style={{ width: "100%", height: "112px", margin: "8%" }}
                      />
                    </div>
                  </div>
                  <h3 className="text-center font-weight-bolder">{platform}</h3>
                </Link>
              </div>
            ))}
          </div>
          {/* <h4 className="font-weight-bolder px-3 pt-3 mb-0">More Creators</h4> */}
        </div>
      </div>

    </>
  );
};

const getPlatformLink = (platform) => {
  switch (platform.toLowerCase()) {
    case 'youtube':
      return "/youtube";
    case 'twitch':
      return "/twitch";
    case 'instagram':
      return "/instagram";
    case 'facebook':
      return "/facebook";
    case 'tiktok':
      return "/tiktok";
    case 'snapchat':
      return "/snapchat";
    // Add cases for other platforms
    default:
      return null;
  }
};

const getPlatformImage = (platform) => {
  switch (platform.toLowerCase()) {
    case 'youtube':
      return youtube;
    case 'twitch':
      return twitch;
    case 'instagram':
      return instagram;
    case 'facebook':
      return facebook;
    case 'tiktok':
      return tiktok;
    case 'snapchat':
      return snapchat;
    // Add cases for other platforms
    default:
      return null;
  }
};

const getBackgroundColor = (platform) => {
  // Define background colors for each platform here
  switch (platform.toLowerCase()) {
    case 'youtube':
      return "#FF6762";
    case 'twitch':
      return "#5A3E85";
    case 'instagram':
      return "linear-gradient(112deg ,#3871C9 , #FF6942 )";
    case 'facebook':
      return "#3C5A99";
    case 'tiktok':
      return "#3C5A99";
    case 'snapchat':
      return "#FFFC1E";

    // Add cases for other platforms
    default:
      return "";
  }
};


export default SocialmediaBox;
