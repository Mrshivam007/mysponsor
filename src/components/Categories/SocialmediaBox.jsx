import "./categories.css";
// import cat_card from "../../assets/img/cat_card.svg";
import youtube from "../../assets/img/youtube.jpg";
import twitch from "../../assets/img/twitch.jpg";
import facebook from "../../assets/img/Facebook.png";
import instagram from "../../assets/img/instagram.jpg";
import snapchat from "../../assets/img/snapchat.jpg";
import tiktok from "../../assets/img/tiktok.jpg";

const SocialmediaBox = () => {
  return (
    <>
      <h1 className="category-text">Sponsor Different Platform</h1>

      <h2 className="cat-mobile-text">Sponsor Different Platform</h2>

      {/* Category cards */}
      <div className="container socialmedia-desktop-container">
        <div className="box1">
          <div className="row socialmedia-row">
            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  backgroundColor: "#FF6762",
                }}
              >
                <div className="platform-img">
                  <img
                    src={youtube}
                    alt=""
                    style={{ width: "60%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">Youtube</h3>
            </div>
            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  backgroundColor: "#5A3E85",
                }}
              >
                <div className="platform-img">
                  <img
                    src={twitch}
                    alt=""
                    style={{ width: "48%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">Twitch</h3>
            </div>
            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  background: "linear-gradient(112deg ,#3871C9 , #FF6942 )",
                }}
              >
                <div className="platform-img">
                  <img
                    src={instagram}
                    alt=""
                    style={{ width: "50%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">Instagram</h3>
            </div>
          </div>
          <div className="row socialmedia-row">
            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  backgroundColor: "#69C9D0",
                }}
              >
                <div className="platform-img">
                  <img
                    src={tiktok}
                    alt=""
                    style={{ width: "47%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">TikTok</h3>
            </div>
            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  backgroundColor: "#3C5A99",
                }}
              >
                <div className="platform-img">
                  <img
                    src={facebook}
                    alt=""
                    style={{ width: "48%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">Facebook</h3>
            </div>
            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  background: "#FFFC1E",
                }}
              >
                <div className="platform-img">
                  <img
                    src={snapchat}
                    alt=""
                    style={{ width: "50%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">Snapchat</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container socialmedia-mobile-container">
        <div className="box1">
          <div className="row socialmedia-row">
            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  backgroundColor: "#FF6762",
                }}
              >
                <div className="platform-img">
                  <img
                    src={youtube}
                    alt=""
                    style={{ width: "60%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">Youtube</h3>
            </div>
            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  backgroundColor: "#5A3E85",
                }}
              >
                <div className="platform-img">
                  <img
                    src={twitch}
                    alt=""
                    style={{ width: "48%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">Twitch</h3>
            </div>
          </div>
          <div className="row socialmedia-row">
            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  background: "linear-gradient(112deg ,#3871C9 , #FF6942 )",
                }}
              >
                <div className="platform-img">
                  <img
                    src={instagram}
                    alt=""
                    style={{ width: "50%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">Instagram</h3>
            </div>

            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  backgroundColor: "#69C9D0",
                }}
              >
                <div className="platform-img">
                  <img
                    src={tiktok}
                    alt=""
                    style={{ width: "47%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">TikTok</h3>
            </div>


          </div>
          <div className="row Socialmedia-row">
            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  backgroundColor: "#3C5A99",
                }}
              >
                <div className="platform-img">
                  <img
                    src={facebook}
                    alt=""
                    style={{ width: "48%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">Facebook</h3>
            </div>
            <div className="col-6 col-sm-4 socialmedia-card1">

              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  background: "#FFFC1E",
                }}
              >
                <div className="platform-img">
                  <img
                    src={snapchat}
                    alt=""
                    style={{ width: "50%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center font-weight-bolder ">Snapchat</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Category cards for mobile view*/}

    </>
  );
};

export default SocialmediaBox;
