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
const CreatorPlatform = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                onClick={handleShow}
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
                onClick={handleShow}
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
                onClick={handleShow}
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
                onClick={handleShow}
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
        <Modal.Body>
          <div className="container">
            <h1 className="d-flex justify-content-between">
              <span>
                <img
                  src={youtube}
                  alt=""
                  style={{ width: "30%", height: "auto", display: "inline" }}
                />
                Youtube
              </span>
              <i
                className="bi bi-x"
                style={{ cursor: "pointer" }}
                onClick={handleClose}
              ></i>
            </h1>

            <div className="container">
              <div className="row" style={{ rowGap: "20px" }}>
                <div className="col-6 col-md-4">
                  <h5>Channel Name</h5>
                  <p>Mr. Beast</p>
                </div>
                <div className="col-6 col-md-4">
                  <h5>Channel Subscribers</h5>
                  <p>110M</p>
                </div>
                {/* <div className="col-6 col-md-4">
                  <h5>Channel Logo</h5>
                  <p>
                    <img src={logo} alt="" width={20} />
                  </p>
                </div> */}
                <div className="col-6 col-md-4">
                  <h5>Average Views</h5>
                  <p>500k per video</p>
                </div>
                <div className="col-6 col-md-4">
                  <h5>Genre of posting</h5>
                  <p>Entertainment, Thrill, Comedy, Sci-Fi</p>
                </div>
                <div className="col-6 col-md-4">
                  <h5>Location</h5>
                  <p>United States</p>
                </div>
                <div className="col-6 col-md-4">
                  <h5>Channel Link</h5>
                  <p>
                    <a href="https://www.youtube.com/@MrBeast">
                      www.youtube.com/@MrBeast
                    </a>
                  </p>
                </div>
                <div className="col-12">
                  <h5>About</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur tempora quas labore ipsam ad laborum maxime
                    magni laboriosam, explicabo, ipsa ipsum? Qui, vel temporibus
                    deserunt eos officiis alias nemo praesentium?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreatorPlatform;
