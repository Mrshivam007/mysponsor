import React, { useState } from "react";
import "../MobileCards/mobile-cards.css";
import thumbnail from "../../assets/img/sponsoring_items/short-thumbnail.jpg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

const CreatorUpcomingContent = ({ cardData }) => {
  const navigate = useNavigate();
  console.log("getting upcoming data ", cardData);

  const handleSponsorClick = (data) => {
    navigate("/mycontent-details", { state: { contentData: data } });
  };
  const [showAllCards, setShowAllCards] = useState(false);
  const visibleCards = cardData ? (showAllCards ? cardData : cardData.slice(0, 4)) : [];

  function calculateTotalPrice(items) {
    let totalPrice = 0;
    items.forEach(item => {
      totalPrice += parseInt(item.price);
    });
    return totalPrice;
  };

  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;


  return (
    <>
      <div className="desktop-view mt-4">
        {visibleCards.map((data) => (
          <div className="pay-box w-100 p-2 mt-4">
            <div className="box d-flex justify-content-between">
              <h1
                className="font-weight-bold text-left"
                style={{ letterSpacing: "3px", fontSize: "xxx-large" }}
              >
                {data.title}
              </h1>
              <div
                className="box d-flex align-items-center px-2"
                style={{
                  transform: "translate(2%,-14%)",
                  borderRadius: "0 18px 0 0",
                  backgroundColor: 'rgb(255, 43, 102)',
                  marginRight: '-1vh'
                }}
              >
                <ul className="list-unstyled d-flex mb-0" style={{ gap: "15px", color: 'white'}}>
                  <li>
                    <h5>
                      <i className="fa fa-youtube"></i>&nbsp;{data.content_platform}
                    </h5>
                  </li>
                  {/* <li>
                    <h5>
                      <i className="fa fa-train"></i>&nbsp;Travel
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa fa-gamepad"></i>&nbsp;Gaming
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa fa-football"></i>&nbsp;Sports
                    </h5>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="container my-2 p-0">
              <div className="row">
                <div className="col-3">
                  <section id="services" class="services py-0 h-100">
                    <div className="records-wrapper container px-0 h-100">
                      <div className="available-content card-wrapper h-100">
                        <div className="icon-box h-100">
                          <h3
                            className="title mb-4"
                            style={{ fontSize: "1.8rem" }}
                          >
                            <a href="">{data.content_category}</a>
                          </h3>
                          {/* <h4 className="title mb-2" style={{ textAlign: 'left' }}>
                            <a href="">
                              Title:{" "}
                              <span className="font-weight-light">{data.title}</span>
                            </a>
                          </h4> */}
                          <h4 className="title mb-2" style={{ textAlign: 'left' }}>
                            <a href="">
                              Price:{" "}
                              <span className="font-weight-light">₹ {calculateTotalPrice(data.sponsoring_content_items)}</span>
                            </a>
                          </h4>
                          <h4 className="title mb-2" style={{ textAlign: 'left' }}>
                            <a href="">Description</a>
                          </h4>
                          <p className="description" style={{ textAlign: 'left' }}>
                            {data.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-3">
                  <div className="container px-0 h-100">
                    <div className="card h-100">
                      <div
                        className="card-body d-flex align-items-end justify-content-center h-100 p-2"
                        style={{
                          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.6) 90%),url(${data.thumbnail1})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "contain",
                        }}
                      >
                        {data.sponsoring_content_items.length >= 2 ? (
                          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                              {data.sponsoring_content_items.map((item, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                  <h4 className="text-center text-white">{item.sponsoring_content_items}</h4>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <h4 className="text-center text-white">#your_ad</h4>
                        )}

                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="row row-cols-2 h-100"
                    style={{ rowGap: "20px" }}
                  >
                    <div className="col">
                      <div
                        className="card h-100"
                        style={{ backgroundColor: "#f2f2f2" }}
                      >
                        <div className="card-body p-2">
                          <h3 className="text-center">Stats</h3>
                          <ul
                            style={{
                              padding: 0,
                              paddingLeft: "20px",
                              listStyle: "none", // Adding left padding for bullet points
                            }}
                          >
                            <li>
                              <span style={{ fontWeight: "bold" }}>
                                Subscribers:&nbsp;
                              </span>
                              {data.subscribers}
                            </li>
                            <li>
                              <span style={{ fontWeight: "bold" }}>
                                Per Video Reach:&nbsp;
                              </span>
                              {data.per_video_reach}
                            </li>
                            <li>
                              <span style={{ fontWeight: "bold" }}>
                                Category:&nbsp;
                              </span>
                              Horror
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="card h-100 text-white"
                        style={{ backgroundColor: "rgb(255, 43, 102)" }}
                        onClick={handleShow}
                      >
                        <div className="card-body p-2 d-flex flex-column justify-content-center">
                          <h1 className="text-center">
                            <i className="bi bi-plus-lg"></i>
                          </h1>
                          <h4 className="text-center">Request a Negotiation</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      {data.is_sponsored ? (
                        <div className="card h-100 bg-secondary">
                          <div className="card-body d-flex justify-content-center align-items-center p-2">
                            <h3 className="text-center">
                              Booked&nbsp;<i className="bi bi-x-circle"></i>
                            </h3>
                          </div>
                        </div>
                      ) : (
                        <div className="card h-100 bg-success">
                          <div className="card-body d-flex justify-content-center align-items-center p-2">
                            <h3 className="text-center text-white">
                              Available&nbsp;<i className="bi bi-check2-circle"></i>
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="col">
                      <div className="card h-100">
                        <div className="card-body p-2">
                          <h4 className="text-center">Customize Campaign</h4>
                          <div className="box d-flex">
                            <Button
                              className="p-2 mx-auto"
                              variant="secondary"
                              size="sm"
                              disabled
                            >
                              Coming Soon
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mobile-view text-md">
        <div className="box d-flex justify-content-between my-4">
          <h1 className="sponsor-mobile-text text-left m-0">Shorts</h1>
          <div className="box bg-white d-flex align-items-center p-2">
            <ul className="list-unstyled d-flex mb-0" style={{ gap: "20px" }}>
              <li>
                <h6 className="mb-0" style={{ fontSize: "12px" }}>
                  <i className="fa fa-bowl-food"></i>&nbsp;Food
                </h6>
              </li>
              <li>
                <h6 className="mb-0" style={{ fontSize: "12px" }}>
                  <i className="fa fa-train"></i>&nbsp;Travel
                </h6>
              </li>
              <li>
                <h6 className="mb-0" style={{ fontSize: "12px" }}>
                  <i className="fa fa-gamepad"></i>&nbsp;Gaming
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="container my-2 p-0">
          <div className="row mb-2">
            <div className="col-6">
              <section id="services" class="services py-0 h-100">
                <div className="records-wrapper container px-0 h-100">
                  <div className="available-content card-wrapper h-100">
                    <div className="icon-box h-100">
                      <h3 className="title mb-2" style={{ fontSize: "20px" }}>
                        <a href="">YT Shorts</a>
                      </h3>
                      <h4 className="title mb-2" style={{ fontSize: "12px" }}>
                        <a href="">
                          Price:&nbsp;
                          <span className="font-weight-light">₹2000</span>
                        </a>
                      </h4>
                      <h4 className="title mb-2" style={{ fontSize: "12px" }}>
                        <a href="">Description</a>
                      </h4>
                      <p className="description" style={{ fontSize: "10px" }}>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Labore, minus.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-6">
              <div className="container px-0 h-100">
                <div className="card h-100">
                  <div
                    className="card-body d-flex align-items-end justify-content-center h-100 p-2"
                    style={{
                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.6) 90%),url(${thumbnail})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                    }}
                  >
                    <h4 className="text-center text-white">#your_ad</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-2 h-100" style={{ rowGap: "10px" }}>
            <div className="col">
              <div
                className="card m-0 h-100"
                style={{ backgroundColor: "#f2f2f2" }}
              >
                <div className="card-body p-2">
                  <h5 className="text-center">Stats</h5>
                  <ul
                    style={{
                      padding: 0,
                      marginBottom: 0,
                      listStyle: "none", // Adding left padding for bullet points
                    }}
                  >
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Subscribers:&nbsp;
                      </span>
                      5000
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Per Video Reach:&nbsp;
                      </span>
                      1000
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Category:&nbsp;
                      </span>
                      Horror
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card m-0 h-100 text-white"
                style={{ backgroundColor: "rgb(255, 43, 102)" }}
              >
                <div className="card-body p-2 d-flex flex-column justify-content-center">
                  <h2 className="text-center">
                    <i className="bi bi-plus-lg"></i>
                  </h2>
                  <h5 className="text-center">Request a Negotiation</h5>
                </div>
              </div>
            </div>
            <div className="col">
              {/* <div className="card m-0 h-100 bg-danger">
                    <div className="card-body d-flex justify-content-center align-items-center p-2">
                      <h4 className="text-center">
                        Booked&nbsp;<i className="bi bi-x-circle"></i>
                      </h4>
                    </div>
                  </div> */}
              <div className="card m-0 h-100 bg-success">
                <div className="card-body d-flex justify-content-center align-items-center p-2">
                  <h4 className="text-center text-white">
                    Available&nbsp;<i className="bi bi-check2-circle"></i>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card m-0 h-100">
                <div className="card-body p-2">
                  <h6 className="text-center">Customize Campaign</h6>
                  <div className="box d-flex">
                    <Button
                      className="p-1 mx-auto rounded-pill"
                      variant="primary"
                      size="sm"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
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
          {/* <div className="box d-flex"> */}
          <span className="record-modal-heading">
            {/* <img
                  src={youtube}
                  alt=""
                  style={{ width: "30%", height: "auto", display: "inline" }}
                /> */}
            Make a Content Request to the Creator
          </span>
          <h2>
            <i
              className="bi bi-x-circle"
              style={{ cursor: "pointer" }}
              onClick={handleClose}
            ></i>
          </h2>
          {/* </div> */}
        </Modal.Header>
        <Modal.Body>
          <div className="container px-0">
            {userDetails?.user_type === "Sponsor" ? (
              <>
                <div className="container px-0 my-2">
                  {/* <div className="row" style={{ rowGap: "20px" }}> */}
                  <div>
                    <label className="large" for="inputEmailAddress">
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="form-control"
                      placeholder="Enter your price"
                    />
                  </div>
                  <div>
                    <label className="large" for="inputEmailAddress">
                      Small Message
                    </label>
                    <textarea
                      className="form-control"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter Message (50 words)"
                      col="30"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <button className="btn btn-success" >
                  Submit
                </button>
              </>
            ) : (
              <>
                <div className="container px-0 my-2">
                  {/* <div className="row" style={{ rowGap: "20px" }}> */}
                  "Unlock the potential to connect with creators by registering as a sponsor today."
                </div>
              </>
            )}
          </div>
          {/* </div> */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreatorUpcomingContent;
