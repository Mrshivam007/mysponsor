import youtube from "../../assets/img/youtube.jpg";
import X from "../../assets/img/X-twitter.jpg";
import twitch from "../../assets/img/twitch.jpg";
import facebook from "../../assets/img/Facebook.png";
import instagram from "../../assets/img/instagram.jpg";
import snapchat from "../../assets/img/snapchat.jpg";
import tiktok from "../../assets/img/tiktok.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
const CreatorPlatform = (data) => {
  const [show, setShow] = useState(false);
  const [platformData, setPlatformData] = useState(null);
  const [platformType, setPlatformType] = useState("");

  const handleClose = () => setShow(false);
  const handlePlatformClick = (platform) => {
    let platformInfo;
    switch (platform) {
      case "youtube":
        platformInfo = data.data.youtube[0];
        platform = "youtube";
        break;
      case "instagram":
        platformInfo = data.data.instagram[0];
        break;
      case "facebook":
        platformInfo = data.data.facebook[0];
        break;
      default:
        platformInfo = null;
    }
    setPlatformData(platformInfo);
    setPlatformType(platform);
    setShow(true);
  };

  console.log("Platform Data ", data.data);
  return (
    <>
      <div className="container">
        <div
          className="box1"
          style={{
            border: "none",
            background: "none",
            backdropFilter: "none",
            boxShadow: "none",
          }}
        >
          <div className="row">
            <div className="col-6 col-md-6 socialmedia-card1">
              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  backgroundColor: "#FF6762",
                  cursor: "pointer",
                }}
                onClick={() => handlePlatformClick("youtube")}
              >
                {/* <Link to={"/youtube"}> */}
                <div className="platform-img d-flex justify-content-center">
                  <img
                    src={youtube}
                    alt=""
                    style={{ width: "60%", height: "auto", margin: "8%" }}
                  />
                </div>
                {/* </Link> */}
              </div>
              <h3 className="text-center">Youtube</h3>
            </div>
            <div className="col-6 col-md-6 socialmedia-card1">
              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  background: "linear-gradient(112deg ,#3871C9 , #FF6942 )",
                  cursor: "pointer",
                }}
                // onClick={handleShow}
                onClick={() => handlePlatformClick("instagram")}
              >
                {/* <Link to={"/instagram"}> */}
                <div className="platform-img d-flex justify-content-center">
                  <img
                    src={instagram}
                    alt=""
                    style={{ width: "50%", height: "auto", margin: "8%" }}
                  />
                </div>
                {/* </Link> */}
              </div>
              <h3 className=" text-center ">Instagram</h3>
            </div>
          </div>
          <div className="row socialmedia-row">
            <div className="col-6 col-md-6 socialmedia-card1">
              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  backgroundColor: "black",
                  cursor: "pointer",
                }}
                // onClick={handleShow}
                onClick={() => handlePlatformClick("X")}
              >
                <div className="platform-img d-flex justify-content-center">
                  <img
                    src={X}
                    alt=""
                    style={{ width: "47%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center ">X</h3>
            </div>
            <div className="col-6 col-md-6 socialmedia-card1">
              <div
                className="card-service platform-container fadeInUp"
                style={{
                  maxWidth: "100%",
                  backgroundColor: "rgb(58 89 153)",
                  cursor: "pointer",
                }}
                // onClick={handleShow}
                onClick={() => handlePlatformClick("facebook")}
              >
                <div className="platform-img d-flex justify-content-center">
                  <img
                    src={facebook}
                    alt=""
                    style={{ width: "48%", height: "auto", margin: "8%" }}
                  />
                </div>
              </div>
              <h3 className=" text-center ">Facebook</h3>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <h2>
            {platformType === "youtube" && (
              <span>
                <img
                  src={youtube}
                  alt=""
                  style={{
                    width: "20%",
                    height: "auto",
                    display: "inline",
                  }}
                />
                Youtube
              </span>
            )}

            {platformType === "instagram" && (
              <span>
                <img
                  src={instagram}
                  alt=""
                  style={{
                    width: "20%",
                    height: "auto",
                    display: "inline",
                  }}
                />
                Instagram
              </span>
            )}
            {platformType === "facebook" && (
              <span>
                <img
                  src={facebook}
                  alt=""
                  style={{
                    width: "20%",
                    height: "auto",
                    display: "inline",
                  }}
                />
                &nbsp;Facebook
              </span>
            )}
            {platformType === "X" && (
              <span>
                <img
                  src={X}
                  alt=""
                  style={{
                    width: "20%",
                    height: "auto",
                    display: "inline",
                  }}
                />
                &nbsp;&nbsp;X
              </span>
            )}
          </h2>
          <h2>
            <i
              className="bi bi-x-circle"
              style={{ cursor: "pointer" }}
              onClick={handleClose}
            ></i>
          </h2>
        </Modal.Header>
        <Modal.Body>
          {platformData ? (
            <div className="container">
              {/* <h2 className="d-flex justify-content-between"> */}
              {/* {platformType === "youtube" && (
                  <span>
                    <img
                      src={youtube}
                      alt=""
                      style={{
                        width: "30%",
                        height: "auto",
                        display: "inline",
                      }}
                    />
                    Youtube
                  </span>
                )}

                {platformType === "instagram" && (
                  <span>
                    <img
                      src={instagram}
                      alt=""
                      style={{
                        width: "30%",
                        height: "auto",
                        display: "inline",
                      }}
                    />
                    Instagram
                  </span>
                )} */}
              {/* <span>
                  <img
                    src={youtube}
                    alt=""
                    style={{ width: "30%", height: "auto", display: "inline" }}
                  />
                  Youtube
                </span> */}
              {/* <i
                  className="bi bi-x"
                  style={{ cursor: "pointer" }}
                  onClick={handleClose}
                ></i> */}
              {/* </h2> */}

              <div className="container px-0">
                <div className="row" style={{ rowGap: "20px" }}>
                  <div className="col-6 col-md-4">
                    <h5>Channel Name</h5>
                    <p>{platformData?.channel_name}</p>
                  </div>
                  <div className="col-6 col-md-4">
                    <h5>
                      {platformType === "youtube" ? "Subscribers" : "Followers"}
                    </h5>
                    <p>
                      {platformType === "youtube"
                        ? platformData.subscribers
                        : platformData.followers}
                    </p>
                  </div>

                  <div className="col-6 col-md-4">
                    <h5>Average Views</h5>
                    <p>{platformData?.per_video_reach} per video</p>
                  </div>
                  <div className="col-6 col-md-4">
                    <h5>Genre of posting</h5>
                    <p>Entertainment, Thrill, Comedy, Sci-Fi</p>
                  </div>
                  <div className="col-6 col-md-4">
                    <h5>Location</h5>
                    <p>{platformData?.location}</p>
                  </div>
                  <div className="col-6 col-md-4">
                    <h5>Channel Link</h5>
                    <p>
                      {/* <a href="https://www.youtube.com/@MrBeast">
                      www.youtube.com/@MrBeast
                    </a> */}
                      {platformData?.youtube_link}
                    </p>
                  </div>
                  <div className="col-12">
                    <h5>About</h5>
                    <p>{platformData?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-center">No Data Available</h3>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreatorPlatform;
